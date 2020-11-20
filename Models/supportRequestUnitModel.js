const mongoose = require("mongoose");

const supportRequestUnitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Lütfen teklif talebi branşı giriniz"],
    unique: true,
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
});

const supportRequestUnit = mongoose.model(
  "supportRequestUnit",
  supportRequestUnitSchema
);

module.exports = supportRequestUnit;
