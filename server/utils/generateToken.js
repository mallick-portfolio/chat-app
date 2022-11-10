const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    { expiresIn: 60 * 60 }
  );
  return token;
};

module.exports = generateToken;
