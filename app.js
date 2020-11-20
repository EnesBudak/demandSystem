const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const requestRouter = require("./routes/requestRoutes");
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/", requestRouter);

module.exports = app;
