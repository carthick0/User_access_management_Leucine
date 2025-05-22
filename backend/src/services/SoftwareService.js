class SoftwareService {
  constructor(softwareRepository) {
    this.softwareRepository = softwareRepository;
  }

  async addSoftware(softwareData) {
    try {
      const software = await this.softwareRepository.createSoftware(softwareData);
      return software;
    } catch (error) {
      console.error("Error in addSoftware:", error.message);
      throw error;
    }
  }

  async getAllSoftware() {
    try {
      const softwareList = await this.softwareRepository.getAllSoftware();
      return softwareList;
    } catch (error) {
      console.error("Error in getAllSoftware:", error.message);
      throw error;
    }
  }

  
}
module.exports=SoftwareService;
