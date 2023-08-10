const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');
const Room = require('../models/room');
const reservation = require('../models/reservation');

// For getting all reservations
router.get('/reserved', async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate('roomNumber', 'roomName room_type')
      .select(
        'roomNumber checkIn checkOut name email roomName roomType persons'
      );

    res.json(reservations);
  } catch (error) {
    console.error(error); // Log the actual error to the console for debugging
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

// Reservation of Rooms
router.post('/', async (req, res) => {
  const { roomNumber, checkIn, checkOut, persons, name, email } = req.body;

  // Perform validation and other necessary checks before creating a reservation
  if (!roomNumber || !checkIn || !checkOut || !persons || !name || !email) {
    res.status(400).json({ error: 'Invalid input data' });
    return;
  }

  try {
    const room = await Room.findOne({ roomNumber });
    if (!room) {
      res.status(404).json({ error: 'Selected room does not exist' });
      return;
    }

    // Check if the room is available for the specified dates
    const overlappingReservations = await Reservation.find({
      roomNumber,
      $or: [
        {
          checkIn: { $lt: new Date(checkOut) },
          checkOut: { $gt: new Date(checkIn) },
        },
        { checkIn: { $gte: new Date(checkIn), $lt: new Date(checkOut) } },
        { checkOut: { $gt: new Date(checkIn), $lte: new Date(checkOut) } },
      ],
    });

    if (overlappingReservations.length > 0) {
      res
        .status(409)
        .json({ error: 'Room is already booked for the selected dates' });
      return;
    }

    const reservation = new Reservation({
      roomNumber: room.roomNumber,
      roomName: room.name,
      roomType: room.room_type,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      persons: parseInt(persons),
      name: name,
      email: email,
    });

    // Save the reservation to the database
    await reservation.save();

    // Update the room availability based on the new reservation
    room.reservations.push({
      reservation: reservation._id,
      checkIn: reservation.checkIn,
      checkOut: reservation.checkOut,
    }); // Add the reservation ID to the room's bookings array
    await room.save();

    res.json({ message: 'Reservation created successfully' });
  } catch (error) {
    console.error(error); // Log the actual error to the console for debugging
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

//Delete a reservation
router.delete('/:id', async (req, res) => {
  try {
    await reservation.findByIdAndDelete(req.params.id);
    return res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

module.exports = router;
