const User = require("../models/UserModel");
const { byCryptPassword } = require("../utils/bycryptPassword");
const hashPassowrd = require("../utils/hashPassword");
exports.checkUserById = async (email) => {
  const result = await User.findOne({ email });
  return result;
};

exports.signupServices = async (data) => {
  console.log("user data is", data);

  const password = await byCryptPassword(data.password);
  console.log(password);
  const newUser = {
    name: data.name,
    email: data.email,
    password,
  };
  const result = await User.create(newUser);
  return result;
};

exports.loginServices = async (data) => {
  
  const user = await User.findOne({ email: data.email });
  console.log("data", )
  if (user) {
    const match = await hashPassowrd(data.password, user.password);
    if (match) {
      return user;
    }
  }
};
