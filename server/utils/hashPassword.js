const bcrypt = require("bcrypt");
const { byCryptPassword } = require("./bycryptPassword");

const hashPassowrd = async (password, userPassword) => {
  console.log(password, userPassword)
  const result = await bcrypt.compare(password, userPassword);
  return result;
};
module.exports = hashPassowrd;
