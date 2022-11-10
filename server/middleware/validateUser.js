const jwt = require("jsonwebtoken");

const validateUser = async (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  var decoded = await jwt.verify(token, process.env.JWT_SECRET);
  if (decoded.id) {
    req.id = decoded.id;
    next();
  }
};

module.exports = validateUser;
