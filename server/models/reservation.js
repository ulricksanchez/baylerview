const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
  },
  roomName: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  persons: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Reservation', reservationSchema);
