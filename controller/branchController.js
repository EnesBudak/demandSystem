const Branch = require("../Models/documentRequestBranchModel");

exports.getAllBranch = async (req, res) => {
  try {
    const branch = await Branch.find({});
    res.status(201).json({
      status: "success",
      data: {
        branch: branch,
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

exports.getBranch = async (req, res) => {
  try {
    const id = req.params.id;
    const branch = await Branch.findById(id);
    res.status(201).json({
      status: "success",
      data: {
        branch: branch,
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

exports.updateBranch = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const branch = await Branch.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        branch,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteBranch = async (req, res) => {
  try {
    const id = req.params.id;
    const branch = await Branch.findByIdAndDelete(id);
    res.status(201).json({
      status: "success",
      data: {
        deletedBranch: branch,
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
exports.createBranch = async (req, res) => {
  try {
    const data = req.body;
    const newBranch = await Branch.create(data);
    res.status(201).json({
      status: "success",
      data: {
        branch: newBranch,
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
