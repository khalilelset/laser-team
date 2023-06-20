const express = require("express");
const clientController = require("../../Controllers/clientController");
const router = express.Router();

router.route("/api/client/register").post(clientController.register);
router.route("/api/client/login").post(clientController.login);
router.route("/api/client/logout").get(clientController.logout);
router.route("/api/client/profile/:email").get(clientController.getUserInfo);
router.route("/api/client/profile/update/:email").put(clientController.updateclient);


module.exports = router;
