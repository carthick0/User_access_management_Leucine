const { AppDataSource } = require("../config/data-source");
const { Request } = require("../entity/Request");

class RequestRepository {
  constructor() {
    this.repo = AppDataSource.getRepository(Request);
  }

  async create(requestData) {
    const request = this.repo.create(requestData);
    return await this.repo.save(request);
  }

  async findPending() {
    return await this.repo.find({
      where: { status: "Pending" },
      relations: ["user", "software"], 
    });
  }

  async findById(id) {
    return await this.repo.findOne({
      where: { id },
      relations: ["user", "software"],
    });
  }

  async updateStatus(id, status) {
    const request = await this.findById(id);
    if (!request) throw new Error("Request not found");
    request.status = status;
    return await this.repo.save(request);
  }
}

module.exports = RequestRepository;
