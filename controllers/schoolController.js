const School = require('../models/School');

// Controller functions for schools
exports.getSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
