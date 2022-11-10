const express = require("express");
const userController = require("../controller/userController");
const validateUser = require("../middleware/validateUser");
const router = express.Router();

router.post("/signup", userController.signUpController);
router.post("/login", userController.loginController);
router.get("/users", validateUser, userController.getAllUser);
router.delete("/users/:id", userController.deleteUserById);

module.exports = router;
