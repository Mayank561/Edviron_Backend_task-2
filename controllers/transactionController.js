const Transaction = require('../models/Transaction');

// Controller functions for transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      res.status(404).json({ error: 'Transaction not found' });
      return;
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateTransactionStatus = async (req, res) => {
  try {
    const transactionId = req.params.id;

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      transactionId,
      { status: 'reconciled' },
      { new: true }
    );

    if (!updatedTransaction) {
      res.status(404).json({ error: 'Transaction not found' });
      return;
    }

    res.json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
