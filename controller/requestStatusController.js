const Status = require("../Models/requestStatusModel");

exports.getAllStatus = async (req, res) => {
  try {
    const status = await Status.find({});
    res.status(201).json({
      status: "success",
      data: {
        status: status,
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
exports.getStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const status = await Status.findById(id);
    res.status(201).json({
      status: "success",
      data: {
        status: status,
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

exports.updateStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const status = await Status.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        status,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const status = await Status.findByIdAndDelete(id);
    res.status(201).json({
      status: "success",
      data: {
        deletedStatus: status,
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
exports.createStatus = async (req, res) => {
  try {
    const data = req.body;
    const newStatus = await Status.create(data);
    res.status(201).json({
      status: "success",
      data: {
        status: newStatus,
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
