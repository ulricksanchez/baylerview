const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a text field'],
  },
  email: {
    type: String,
    required: [true, 'Please add a text field'],
  },
  message: {
    type: String,
  },
  message_status: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Contact', ContactSchema);
