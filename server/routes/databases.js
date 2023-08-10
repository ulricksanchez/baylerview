const express = require('express');
const router = express.Router();

const roomsRouter = require("./rooms");
router.use("/api/rooms", roomsRouter);

const newslettersRouter = require("./newsletters");
router.use("/api/newsletters", newslettersRouter);

const contactsRouter = require("./contacts");
router.use("/api/contacts", contactsRouter);

const testimonialsRouter = require("./testimonials");
router.use("/api/testimonials", testimonialsRouter);

const loginsRouter = require("./logins");
router.use("/api/logins", loginsRouter);

module.exports = router;