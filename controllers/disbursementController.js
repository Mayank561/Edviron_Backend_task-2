const Transaction = require('../models/Transaction');

// Controller function to initiate a disbursement to a school
exports.initiateDisbursement = async (req, res) => {
  try {
    // Extract data from the request body
    const { schoolName, amount } = req.body;

    // Create a new disbursement record
    const disbursement = new Transaction({
      schoolName,
      amount,
      status: 'pending', // You can set the initial status as 'pending'
    });

    // Save the disbursement record to the database
    await disbursement.save();

    res.json(disbursement);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
