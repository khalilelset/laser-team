const express = require("express");
const CompanyController = require("../../Controllers/CompanyController");
const router = express.Router();

router.route("/signup/api/Company").post(CompanyController.signup);

module.exports = router;
