const express = require("express");
const clientController = require("../../Controllers/clientController");
const router = express.Router();

router.route("/api/client/register").post(clientController.register);
router.route("/api/client/login").post(clientController.login);
router.route("/api/client/logout").post(clientController.logout);

module.exports = router;
