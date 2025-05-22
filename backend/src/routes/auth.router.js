const express=require('express');
const { signup, login } = require('../controllers/userController');
const router=express.Router();

router.post("/signup",signup);

router.post("/login",login);


router.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is up and running 🚀' });
});

module.exports=router;