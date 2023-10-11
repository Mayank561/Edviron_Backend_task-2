const mongoose = require('mongoose');

// Replace 'mongodb+srv://...' with your actual connection string
const mongoURI = 'mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Event listener for successful connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Event listener for connection errors
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = db;
