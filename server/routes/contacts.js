const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const contact = require('../models/contact');

//get all messages
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json({ success: true, data: contacts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

//get a single message
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.json({ success: true, data: contact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

//Add a message
router.post('/', async (req, res) => {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      message_status: req.body.message_status,
    });
  
    try {
      const savedContact = await contact.save();
      res.json({ success: true, data: savedContact });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Something Went Wrong' });
    }
  });

  //Delete a Message
router.delete('/:id', async (req, res) => {
  try {
    await contact.findByIdAndDelete(req.params.id);
    return res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

module.exports = router;