const express = require('express');
const router = express.Router();
const disbursementController = require('../controllers/disbursementController');

// POST /api/disbursements - Initiate a disbursement to a school
router.post('/', disbursementController.initiateDisbursement);

module.exports = router;
