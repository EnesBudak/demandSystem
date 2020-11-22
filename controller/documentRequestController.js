const Request = require("../Models/documentRequestModel");
const Branch = require("../Models/documentRequestBranchModel");
const Status = require("../Models/requestStatusModel");
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

    const branch = await Branch.findById(updateData.branch);
    const status = await Status.findById(updateData.status);
    updateData.status = status.title;
    updateData.branch = branch.title;
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

    const branch = await Branch.findById(data.branch);

    data.branch = branch.title;

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
