const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  schoolName: String,
  amount: Number,
  status: String,
});

module.exports = mongoose.model('Transaction', transactionSchema);
