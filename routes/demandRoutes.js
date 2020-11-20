const express = require("express");

const demandController = require("../controller/demandController");

const router = express.Router();

router.route("/").get(demandController.getAllDemand);

module.exports = router;
