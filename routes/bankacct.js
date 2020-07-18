const express  = require("express");
const router   = express.Router();
const bankacctController = require("../controllers/bankacct");

// POST /saves account
router.post("/bank-account", bankacctController.postBankacct);

// GET / search for one `bank-account
// router.get("/bank-account", bankacctController.getallBankacct);

// GET / returns all bank accounts of a user
router.get("/bank-account", bankacctController.getAllBankacct)

// PUT / Update a bank account of a user
router.put("/bank-account/:id", bankacctController.updateBankacct);

// DELETE / Deletes a bank account of a user
router.delete("/bank-account/:id", bankacctController.deloneBankacct)






module.exports = router;