const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const demandRouter = require("./routes/demandRoutes");
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/demand", demandRouter);

module.exports = app;
