const express = require("express");
const clientController = require("../../Controllers/clientController");
const router = express.Router();

router.route("/signup").post(clientController.signup);

module.exports = router;
