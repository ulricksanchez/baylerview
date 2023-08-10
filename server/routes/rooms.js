const express = require('express');
const router = express.Router();
const Room = require('../models/room');
const room = require('../models/room');

//get all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json({ success: true, data: rooms });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

//get a single room
router.get('/:id', async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.json({ success: true, data: room });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

//Add a room
router.post('/', async (req, res) => {
  const roomNumber = req.body.roomNumber;

  // Check if the room number already exists
  const existingRoom = await Room.findOne({ roomNumber });
  if (existingRoom) {
    return res.status(409).json({ error: 'Room number already exists' });
  }

  const room = new Room({
    image_url: req.body.image_url,
    roomNumber: roomNumber,
    name: req.body.name,
    description: req.body.description,
    amenities: req.body.amenities,
    capacity: req.body.capacity,
    stars: req.body.stars,
    rate: req.body.rate,
    room_type: req.body.room_type,
  });

  try {
    const savedRoom = await room.save();
    res.json({ success: true, data: savedRoom });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

//to get all the available rooms on a specific date
router.post('/available', async (req, res) => {
  const { checkIn, checkOut } = req.body;

  try {
    // Find all rooms where the date range does not overlap with existing reservations
    const availableRooms = await Room.find({
      reservations: {
        $not: {
          $elemMatch: {
            $or: [
              {
                checkIn: { $lt: new Date(checkOut) },
                checkOut: { $gt: new Date(checkIn) },
              },
              {
                checkIn: { $lte: new Date(checkIn) },
                checkOut: { $gte: new Date(checkOut) },
              },
              {
                checkIn: { $gte: new Date(checkIn) },
                checkOut: { $lte: new Date(checkOut) },
              },
            ],
          },
        },
      },
      capacity: { $gte: req.body.persons },
    });

    res.json({ success: true, data: availableRooms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

//Delete a Room
router.delete('/:id', async (req, res) => {
  try {
    await room.findByIdAndDelete(req.params.id);
    return res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});
module.exports = router;
