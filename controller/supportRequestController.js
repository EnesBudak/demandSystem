const Request = require("../Models/supportRequestModel");
const Unit = require("../Models/supportRequestUnitModel");
const multer = require("multer");
exports.getAllSupportRequest = async (req, res) => {
  try {
    const request = await Request.find({});

    res.status(201).json({
      status: "success",
      data: {
        request: request,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

exports.updateSupportRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const request = await Request.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        request,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteSupportRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const request = await Request.findByIdAndDelete(id);
    res.status(201).json({
      status: "success",
      data: {
        deletedRequest: request,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

exports.createSupportRequest = async (req, res) => {
  try {
    const data = req.body;
    const uploadedFile = req.uploadedFile;

    if (req.fileValidationError !== true) {
      res.status(400).json({
        status: "success",
        data: {
          message: "Yanlış dosya tipi",
        },
      });
    }

    let path = `/uploads/${uploadedFile}`;
    data.fileUrl = path;
    const unit = await Unit.findById(data.unit);

    data.unit = unit.title;
    const newRequest = await Request.create(data);
    res.status(201).json({
      status: "success",
      data: {
        request: newRequest,
      },
    });
    // req.io.sockets.emit("newRequestInfo", newRequest);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};
