const Request = require("../Models/documentRequestModel");

exports.getAllDocumentRequest = async (req, res) => {
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

exports.updateDocumentRequest = async (req, res) => {
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
exports.deleteDocumentRequest = async (req, res) => {
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
exports.createDocumentRequest = async (req, res) => {
  try {
    const data = req.body;
    const newRequest = await Request.create(data);
    res.status(201).json({
      status: "success",
      data: {
        request: newRequest,
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
