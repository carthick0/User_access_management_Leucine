const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(403);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(401);
    req.user = user;
    next();
  });
};

const permit = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) return res.sendStatus(403);
  next();
};

module.exports = { verifyToken, permit };
