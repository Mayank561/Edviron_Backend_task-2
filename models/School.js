const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: String,
  paymentHistory: [{ date: Date, amount: Number }],
});

module.exports = mongoose.model('School', schoolSchema);
