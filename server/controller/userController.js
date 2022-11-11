const User = require("../models/UserModel");
const userServices = require("../services/userServices");
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
    const existUser = await userServices.checkUserById(req.body.email);
    if (!existUser) {
      const result = await userServices.signupServices(req.body);
      res.status(201).json({
        message: "User signup successfull",
        success: true,
        data: result,
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

exports.loginController = async (req, res, next) => {
  try {
    const result = await userServices.loginServices(req.body);
    const token = generateToken(result._id);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Login successfull",
        token,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Login Failed",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.imageUplaod = async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: req.file,
  });
};
