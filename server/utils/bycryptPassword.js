const bcrypt = require("bcrypt");

const byCryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  result = await bcrypt.hash(password, salt);
  return result;
};
module.exports = byCryptPassword;
