const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Hospital_info', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Import routes
const hospitalRoutes = require('./routes/hospitalRoutes');

// Routes
app.use('/api/hospitals', hospitalRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
