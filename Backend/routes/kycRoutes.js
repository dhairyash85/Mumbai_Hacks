const express = require("express");
const kycController = require("../controllers/kycController.js");
const router = express.Router();

router.post("/add", kycController.addKYC);
router.post("/approve/:address", kycController.approveKYC);
router.post("/reject/:address", kycController.rejectKYC);
router.get("/:address", kycController.getKYC);

module.exports = router;