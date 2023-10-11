const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const transactionRoutes = require('./routes/transaction');
const schoolRoutes = require('./routes/schools');
const disbursementRoutes = require('./routes/disbursements');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

app.use('/api/transactions', transactionRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/disbursements', disbursementRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
