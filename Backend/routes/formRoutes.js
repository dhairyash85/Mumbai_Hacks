// routes/formRoutes.js
const express = require("express");
const formController = require("../controllers/formController");
const router = express.Router();

router.post("/add", formController.addForm);
router.get("/:address", formController.getForms);

module.exports = router;