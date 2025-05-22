const express= require('express');
const { verifyToken, permit } = require('../middleware/auth');
const { submitRequest, getPendingRequests, approveOrRejectRequest } = require('../controllers/requestController');
const router=express.Router();

router.post("/", verifyToken, permit("Employee"),submitRequest );


router.patch("/:id", verifyToken, permit("Manager"), getPendingRequests);


router.get("/", verifyToken, permit("Manager"),approveOrRejectRequest);

module.exports = router;