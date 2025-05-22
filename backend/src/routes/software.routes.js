const express= require('express');
const { verifyToken, permit } = require('../middleware/auth');
const { createSoftware, getAllSoftware } = require('../controllers/softwareController');

const router=express.Router();


router.post("/",verifyToken,permit("Admin"),createSoftware);

router.get("/",verifyToken,getAllSoftware);

module.exports=router;