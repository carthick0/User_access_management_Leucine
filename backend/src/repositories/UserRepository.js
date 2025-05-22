const { AppDataSource } = require('../config/data-source'); 
const { User } = require('../entity/User'); 

class UserRepository {
  
  constructor() {
    console.log('User entity:', User);
    this.repo = AppDataSource.getRepository(User);
  }
    

  async createUser(userData) {
    const user = this.repo.create(userData);
    return await this.repo.save(user);
  }
  

  async findByUsername(username) {
    return await this.repo.findOneBy({ username });
  }

  async findById(id) {
    return await this.repo.findOneBy({ id });
  }
}

module.exports = UserRepository;
