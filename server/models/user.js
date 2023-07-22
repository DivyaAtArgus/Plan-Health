const mongoose = require('mongoose');

const userSchema = {
  id: {
    type: 'serial', 
    primaryKey: true,
  },
  username: {
    type: 'text', // Text data type for username
    unique: true, // Ensure usernames are unique
    allowNull: false, // Disallow null values for usernames
  },
  email: {
    type: 'text', // Text data type for email
    unique: true, // Ensure email addresses are unique
    allowNull: false, // Disallow null values for email addresses
  },
  password: {
    type: 'text', // Text data type for password (in a real application, consider hashing passwords)
    allowNull: false, // Disallow null values for passwords
  }
};


// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;