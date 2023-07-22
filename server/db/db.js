const { Pool } = require('pg');

// Database configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // Usually 'localhost'
  database: 'hospital_info',
  password: 'argus2023',
  port: 5432, // Default PostgreSQL port
});
 
module.exports = pool;