const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async signup(userData) {
   
    const existingUser = await this.userRepository.findByUsername(userData.username);
    if (existingUser) {
      throw new Error('Username already taken');
    }

   
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    
    const newUser = {
      ...userData,
      password: hashedPassword,
      role: userData.role || 'Employee',
    };

   
    return await this.userRepository.createUser(newUser);
  }

  async login({ username, password }) {
    
    const user = await this.userRepository.findByUsername(username);
    if (!user) {
      throw new Error('Invalid username or password');
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid username or password');
    }

   
    const payload = { id: user.id, username: user.username, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { token, role: user.role };
  }
}

module.exports = UserService;
