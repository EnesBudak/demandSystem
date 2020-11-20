const mongoose = require("mongoose");

const documentRequestBranchSchema = new mongoose.Schema({
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

const documentRequestBranch = mongoose.model(
  "documentRequestBranch",
  documentRequestBranchSchema
);

module.exports = documentRequestBranch;
