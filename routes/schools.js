const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// GET /api/schools - Retrieve a list of schools
router.get('/', schoolController.getSchools);

// GET /api/schools/:id - Retrieve a school by ID
router.get('/:id', schoolController.getSchools);

module.exports = router;
