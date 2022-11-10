const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dbConnection = require("./server");
const userRouter = require("./router/user.router");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// db connection
dbConnection();

app.use("/api/v1", userRouter);

app.listen(port, () => {
  console.log(`app is listen on port ${port}`.bold.blue);
});

app.use(errorHandler);
