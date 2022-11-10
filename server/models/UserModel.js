const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: [true, "Name must me required"],
    },
    email: {
      type: String,
      trim: true,
      require: true,
      unique: [true, "Please provide you vaild email"],
    },
    password: {
      type: String,
      require: true,
    },
    pic: {
      type: String,
      default: "https://placeimg.com/192/192/people",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
