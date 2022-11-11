const express = require("express");
const userController = require("../controller/userController");
const upload = require("../middleware/imageUpload");
const validateUser = require("../middleware/validateUser");
const router = express.Router();

router.post("/signup", userController.signUpController);
router.post("/login", userController.loginController);
router.get("/users", validateUser, userController.getAllUser);
router.delete("/users/:id", userController.deleteUserById);
router.post(
  "/image-upload",
  upload.single("image"),
  userController.imageUplaod
);
module.exports = router;
