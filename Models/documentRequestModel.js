const mongoose = require("mongoose");

const documentRequestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Lütfen talep başlığı giriniz!"],
  },
  description: {
    type: String,
    required: [true, "Lütfen talep açıklaması giriniz!"],
  },
  name: {
    type: String,
    required: [true, "Lütfen ad  giriniz!"],
  },
  lastName: {
    type: String,
    required: [true, "Lütfen soyad giriniz!"],
  },
  phone: {
    type: String,
    required: [true, "Lütfen telefon giriniz!"],
  },
  fileUrl: {
    type: String,
  },
  identificationNumber: {
    type: String,
    required: [true, "Lütfen tc kimlik no giriniz"],
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
  // type: {
  //   type: String,
  //   required: [true, "Lütfen talep türü seçiniz!"],
  // },
  branch: {
    type: String,
    required: [true, "Lütfen branş türü seçiniz!"],
  },
  status: {
    type: String,
    default: "5fb801c405c3c187143964af",
  },
});

const documentRequest = mongoose.model(
  "documentRequest",
  documentRequestSchema
);

module.exports = documentRequest;
