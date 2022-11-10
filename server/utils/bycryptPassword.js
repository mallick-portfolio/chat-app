const bcrypt = require("bcrypt");

exports.byCryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  result = await bcrypt.hash(password, salt);
  return result;
};
