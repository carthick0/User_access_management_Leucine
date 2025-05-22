class RequestService {
  constructor(requestRepository) {
    this.requestRepository = requestRepository;
  }

  async createRequest(requestData) {
    
    requestData.status = 'Pending'; // default status on create
    return await this.requestRepository.create(requestData);
  }

  async getPendingRequests() {
    return await this.requestRepository.findPending();
  }

  async approveOrRejectRequest(id, status) {
    if (!['Approved', 'Rejected'].includes(status)) {
      throw new Error('Invalid status');
    }
    return await this.requestRepository.updateStatus(id, status);
  }
}

module.exports= RequestService;
