const Unit = require("../Models/supportRequestUnitModel");

exports.getAllUnit = async (req, res) => {
  try {
    const unit = await Unit.find({});
    res.status(201).json({
      status: "success",
      data: {
        unit: unit,
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

exports.getUnit = async (req, res) => {
  try {
    const id = req.params.id;
    const unit = await Unit.findById(id);
    res.status(201).json({
      status: "success",
      data: {
        unit: unit,
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

exports.updateUnit = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const unit = await Unit.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        unit,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteUnit = async (req, res) => {
  try {
    const id = req.params.id;
    const unit = await Unit.findByIdAndDelete(id);
    res.status(201).json({
      status: "success",
      data: {
        deletedUnit: unit,
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
exports.createUnit = async (req, res) => {
  try {
    const data = req.body;
    const newUnit = await Unit.create(data);
    res.status(201).json({
      status: "success",
      data: {
        unit: newUnit,
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
