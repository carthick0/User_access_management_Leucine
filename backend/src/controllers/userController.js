
const UserRepository =require( "../repositories/UserRepository.js");
const UserService =require("../services/UserService.js") ;

const userService = new UserService(new UserRepository());

 async function signup(req, res) {
  try {
   
    const newUser = await userService.signup(req.body);
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      error: {},
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Signup failed",
      error: error.message,
    });
  }
}

 async function login(req, res) {
  try {
    // login returns { token, role }
    const result = await userService.login(req.body);
    return res.status(200).json({
      success: true,
      message: "Login successful",
      error: {},
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      success: false,
      message: "Invalid username or password",
      error: error.message,
    });
  }
}

module.exports={login,signup}