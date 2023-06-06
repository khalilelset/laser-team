const express = require("express");
const companyController = require("../../Controllers/company/companyController");
const router = express.Router();

router.route("/api/company/register").post(companyController.register);
// router.route("/api/company/login").post(companyController.login);
// router.route("/api/company/logout").get(companyController.logout);

module.exports = router;
