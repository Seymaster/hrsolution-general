const express  = require("express");
const router   = express.Router();
const emergencyController = require("../controllers/emergency")

// POST  /saves emergency contact 
router.post("/emergency-contact", emergencyController.postEmergency)

// GET /retrieve all Emergency contacts
router.get("/emergency-contact", emergencyController.getallEmergency)

// PUT /updates a Emergency contact
router.put("/emergency-contact/:id", emergencyController.updateEmergencycontact)

// DELETE /deletes a Emergency contact
router.delete("/emergency-contact/:id", emergencyController.deloneEmergencyContact)

module.exports = router;