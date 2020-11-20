const Request = require("../Models/supportRequestModel");

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
    const newRequest = await Request.create(data);
    req.io.sockets.emit("newRequestInfo", newRequest);
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
