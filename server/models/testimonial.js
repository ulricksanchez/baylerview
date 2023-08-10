const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a text field'],
  },
  email: {
    type: String,
    required: [true, 'Please add a text field'],
  },
  position: {
    type: String,
  },
  message: {
    type: String,
  },
  ratings: {
    type: String,
  },
  testimonial_status: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
