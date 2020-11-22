const express = require("express");
const multer = require("multer");
const unitController = require("../controller/unitController");

const branchController = require("../controller/branchController");

const statusController = require("../controller/requestStatusController");

const documentRequestController = require("../controller/documentRequestController");

const supportRequestController = require("../controller/supportRequestController");
const router = express.Router();

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "text/plain" ||
    file.mimetype === "image/png"
  ) {
    req.fileValidationError = true;
    return cb(null, true);
  } else {
    req.fileValidationError = false;
    return cb(null, false, req.fileValidationError);
  }
};

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    let fileName = Date.now() + file.originalname;
    cb(null, fileName);
    req.uploadedFile = fileName;
  },
});

let upload = multer({ storage: storage, fileFilter: fileFilter });

router
  .route("/documentRequest")
  .get(documentRequestController.getAllDocumentRequest)
  .post(upload.single("file"), documentRequestController.createDocumentRequest);

router
  .route("/documentRequest/:id")
  .patch(documentRequestController.updateDocumentRequest)
  .delete(documentRequestController.deleteDocumentRequest);

router
  .route("/supportRequest")
  .get(supportRequestController.getAllSupportRequest)
  .post(upload.single("file"), supportRequestController.createSupportRequest);

router
  .route("/supportRequest/:id")
  .patch(supportRequestController.updateSupportRequest)
  .delete(supportRequestController.deleteSupportRequest);

router
  .route("/unit")
  .get(unitController.getAllUnit)
  .post(unitController.createUnit);

router
  .route("/unit/:id")
  .get(unitController.getUnit)
  .patch(unitController.updateUnit)
  .delete(unitController.deleteUnit);

router
  .route("/branch")
  .get(branchController.getAllBranch)
  .post(branchController.createBranch);

router
  .route("/branch/:id")
  .get(branchController.getBranch)
  .patch(branchController.updateBranch)
  .delete(branchController.deleteBranch);

router
  .route("/requestStatus")
  .get(statusController.getAllStatus)
  .post(statusController.createStatus);

router
  .route("/requestStatus/:id")
  .get(statusController.getStatus)
  .patch(statusController.updateStatus)
  .delete(statusController.deleteStatus);

module.exports = router;
