const express = require("express");
const mongodb = require("mongodb");
const colors = require("colors");
const cors = require("cors");
const dbConnection = require("./server");
const chats = require("./data");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// db connection
dbConnection();

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "chatapp home",
    success: true,
  });
});

app.get("/api/v1/chat", async (req, res) => {
  res.status(200).json({
    status: true,
    message: "Data get successfull",
    data: chats,
  });
});

app.listen(port, () => {
  console.log(`app is listen on port ${port}`.bold.blue);
});
