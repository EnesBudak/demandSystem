exports.getAllDemand = async (req, res) => {
  try {
    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
    });
  }
};
