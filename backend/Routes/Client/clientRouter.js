const express = require("express");
const clientController = require("../../Controllers/clientController");
const router = express.Router();

router.route("/signup/api/client").post(clientController.signup);

module.exports = router;
