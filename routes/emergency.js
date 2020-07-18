const express  = require("express");
const router   = express.Router();
const emergencyController = require("../controllers/emergency")

// POST  /saves emergency contact 
router.post("/emergency-contact", emergencyController.postEmergency)

// GET /retrieve all Emergency contacts
router.get("/emergency-contact", emergencyController.getallEmergency)

module.exports = router;