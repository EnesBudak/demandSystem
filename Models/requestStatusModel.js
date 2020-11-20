const mongoose = require("mongoose");

const requestStatusSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Lütfen talep durumu giriniz"],
    unique: true,
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
});

const requestStatus = mongoose.model("requestStatus", requestStatusSchema);

module.exports = requestStatus;
