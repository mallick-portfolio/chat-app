const User = require("../models/UserModel");
const byCryptPassword = require("../utils/bycryptPassword");
const generateToken = require("../utils/generateToken");

exports.getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({});
    if (users) {
      res.status(201).json({
        message: "User signup successfull",
        success: true,
        data: users,
      });
    } else {
      res.status(400).json({
        message: "Users Not Found",
        success: true,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteUserById = async (req, res, next) => {
  try {
    const findUser = await User.findById({ _id: req.params.id });
    if (findUser) {
      const deleteUser = await User.deleteOne({ _id: req.params.id });
      res.status(202).json({
        message: "User Deleted successfull",
        success: true,
      });
    } else {
      res.status(404).json({
        message: "User Not Found",
        success: false,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.signUpController = async (req, res, next) => {
  try {
    const existUser = await User.findOne({
      email: req.body.email,
      name: req.body.name,
    });
    if (!existUser) {
      const password = await byCryptPassword(req.body.password);
      console.log(password);
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        password,
      };
      const result = await User.create(newUser);
      const token = generateToken(result._id);
      res.status(201).json({
        message: "User signup successfull",
        success: true,
        data: result,
        token,
      });
    } else {
      res.status(401).json({
        message: "User already exist",
        success: false,
      });
    }
  } catch (error) {
    next(error);
  }
};


