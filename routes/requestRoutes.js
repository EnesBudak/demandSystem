const express = require("express");

const unitController = require("../controller/unitController");

const branchController = require("../controller/branchController");

const statusController = require("../controller/requestStatusController");

const documentRequestController = require("../controller/documentRequestController");

const supportRequestController = require("../controller/supportRequestController");
const router = express.Router();

router
  .route("/documentRequest")
  .get(documentRequestController.getAllDocumentRequest)
  .post(documentRequestController.createDocumentRequest);

router
  .route("/documentRequest/:id")
  .patch(documentRequestController.updateDocumentRequest)
  .delete(documentRequestController.deleteDocumentRequest);

router
  .route("/supportRequest")
  .get(supportRequestController.getAllSupportRequest)
  .post(supportRequestController.createSupportRequest);

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
  .patch(unitController.updateUnit)
  .delete(unitController.deleteUnit);

router
  .route("/branch")
  .get(branchController.getAllBranch)
  .post(branchController.createBranch);

router
  .route("/branch/:id")
  .patch(branchController.updateBranch)
  .delete(branchController.deleteBranch);

router
  .route("/requestStatus")
  .get(statusController.getAllStatus)
  .post(statusController.createStatus);

router
  .route("/requestStatus/:id")
  .patch(statusController.updateStatus)
  .delete(statusController.deleteStatus);

module.exports = router;
