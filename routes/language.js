const express = require("express");
const router  = express.Router();
const languageController = require("../controllers/language")

// POST /saves a language
router.post("/language", languageController.postLanguage);

// GET /retrieve all language
router.get("/language", languageController.getallLanguage);

// PUT  /updates a Language
router.put("/language/:id", languageController.updateLanguage);

// DELETE /Deletes a language
router.delete("/language/:id", languageController.deloneLanguage)

module.exports = router;