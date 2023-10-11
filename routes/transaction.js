const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// GET /api/transactions - Retrieve a list of transactions
router.get('/', transactionController.getTransactions);

// GET /api/transactions/:id - Retrieve a transaction by ID
router.get('/:id', transactionController.getTransactionById);

// PUT /api/transactions/:id/reconcile - Update the status of a transaction to mark it as reconciled
router.put('/:id/reconcile', transactionController.updateTransactionStatus);

module.exports = router;
