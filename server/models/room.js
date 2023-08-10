const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Please add a text field'],
  },
  description: {
    type: String,
  },
  amenities: {
    type: String,
  },
  capacity: {
    type: String,
  },
  stars: {
    type: String,
  },
  rate: {
    type: String,
  },
  image_url: {
    type: String,
  },
  room_type: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  reservations: [
    {
      reservation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation',
      },
      checkIn: Date,
      checkOut: Date,
    },
  ],
});

module.exports = mongoose.model('Room', RoomSchema);
