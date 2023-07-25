var express = require('express');
const pool = require('./db/db');
var router = require( './route/user');
  
// Initialize express app
var app = express();

app.use(express.json());

app.use("/", router)

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the PostgreSQL database.');

  // Release the client from the pool
  done();
});
