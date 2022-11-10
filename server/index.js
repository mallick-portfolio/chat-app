const express = require("express");
const mongodb = require("mongodb");
const colors = require("colors");
const cors = require("cors");
const dbConnection = require("./server");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// db connection
// dbConnection()

app.listen(port, () => {
  console.log(`app is listen on port ${port}`.bold.blue);
});