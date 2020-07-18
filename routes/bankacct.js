const express  = require("express");
const router   = express.Router();
const bankacctController = require("../controllers/bankacct");

// POST /all account
router.post("/bank-account", bankacctController.postBankacct);

router.get("/bank-account", bankacctController.getallBankacct)

// router.get("/banl-account/:id", bankacctController.getallBankacct)


module.exports = router;