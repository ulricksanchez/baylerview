const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add your email address.'],
  },
  password: {
    type: String,
  },
  lastname: {
    type: String,
  },
  firstname: {
    type: String,
  },
  email: {
    type: String,
  },
  position: {
    type: String,
  },
  user_level: {
    type: String,
  },
  account_status: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Login', LoginSchema);
