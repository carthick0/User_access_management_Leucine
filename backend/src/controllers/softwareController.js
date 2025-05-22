const SoftwareRepository = require("../repositories/SoftwareRepository");

const SoftwareService= require("../services/SoftwareService")


const softwareService = new SoftwareService(new SoftwareRepository());

 async function createSoftware(req, res) {
  try {
    const newSoftware = await softwareService.addSoftware(req.body);
    return res.status(201).json({
      success: true,
      message: "Software created successfully",
      error: {},
      data: newSoftware,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: "Failed to create software",
      error: error.message,
    });
  }
}

 async function getAllSoftware(req, res) {
  try {
    const softwareList = await softwareService.getAllSoftware();
    return res.status(200).json({
      success: true,
      message: "Software list fetched successfully",
      error: {},
      data: softwareList,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch software list",
      error: error.message,
    });
  }
}

module.exports={
    createSoftware,
    getAllSoftware
}