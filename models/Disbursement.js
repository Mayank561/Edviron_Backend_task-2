const mongoose = require('mongoose');

const disbursementSchema = new mongoose.Schema({
  schoolName: String,
  amount: Number,
  status: String,
});

module.exports = mongoose.model('Disbursement', disbursementSchema);
