const express = require("express");
const router = express.Router();
const contactController = require("../../Controllers/Contact/contactController");

// Signup route
router.post("/api/contact/add", contactController.addMessage);
router.get("/api/contact/getMessages", contactController.getMessages);

module.exports = router;
