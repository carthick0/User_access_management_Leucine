const { AppDataSource } = require("../config/data-source"); // ✅ Correct
const { Software } = require("../entity/Software");

class SoftwareRepository {
  constructor() {
    this.repo = AppDataSource.getRepository(Software);
  }

  async createSoftware(data) {
    const software = this.repo.create(data);
    return this.repo.save(software);
  }

  async getAllSoftware() {
    return this.repo.find();
  }
}

module.exports = SoftwareRepository;
