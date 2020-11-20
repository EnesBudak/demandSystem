const mongoose = require("mongoose");

const supportRequestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Lütfen talep başlığı giriniz!"],
  },
  description: {
    type: String,
    required: [true, "Lütfen talep açıklaması giriniz!"],
  },

  fileUrl: {
    type: String,
  },

  unit: {
    type: String,
    required: [true, "Lütfen birim seçiniz"],
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
});

const supportRequest = mongoose.model("supportRequest", supportRequestSchema);

module.exports = supportRequest;
