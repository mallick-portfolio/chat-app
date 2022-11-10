const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/signup", userController.signUpController);
router.post("/login", userController.loginController);
router.get("/users", userController.getAllUser);
router.delete("/users/:id", userController.deleteUserById);

module.exports = router;
