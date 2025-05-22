const RequestRepository= require( '../repositories/RequestRepository.js');
const RequestService =require('../services/RequestService.js');
const { AppDataSource } =require('../config/data-source.js')

const requestService = new RequestService(new RequestRepository(AppDataSource));

async function submitRequest(req, res) {
  try {
    const requestData = req.body;
    requestData.user = req.user; 
    const request = await requestService.createRequest(requestData);
    return res.status(201).json({
      success: true,
      message: "Access request submitted successfully",
      error: {},
      data: request,
    });
  } catch (error) {
    console.error('submitRequest error:', error);
    return res.status(400).json({
      success: false,
      message: "Failed to submit access request",
      error: error.message,
    });
  }
}

 async function getPendingRequests(req, res) {
  try {
    const requests = await requestService.getPendingRequests();
    return res.status(200).json({
      success: true,
      message: "Pending requests fetched successfully",
      error: {},
      data: requests,
    });
  } catch (error) {
    console.error('getPendingRequests error:', error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch pending requests",
      error: error.message,
    });
  }
}

 async function approveOrRejectRequest(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body; 
    const updatedRequest = await requestService.approveOrRejectRequest(id, status);
    return res.status(200).json({
      success: true,
      message: `Request ${status.toLowerCase()} successfully`,
      error: {},
      data: updatedRequest,
    });
  } catch (error) {
    console.error('approveOrRejectRequest error:', error);
    return res.status(400).json({
      success: false,
      message: "Failed to update request status",
      error: error.message,
    });
  }
}

module.exports={
    submitRequest,
    getPendingRequests,
    approveOrRejectRequest
}