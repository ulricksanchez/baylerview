const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

const app = express();

//Static Folder
app.use(express.static(path.join(__dirname, "public")));

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // or '*' for any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//cors middleware
app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:3000"],
    credentials: true,
  })
);

//routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Bay-Ler View API",
  });
});

const roomsRouter = require("./routes/rooms");
app.use("/api/rooms", roomsRouter);

const reservationRouter = require('./routes/reservations');
app.use('/api/reservations', reservationRouter);

const newslettersRouter = require("./routes/newsletters");
app.use("/api/newsletters", newslettersRouter);

const contactsRouter = require("./routes/contacts");
app.use("/api/contacts", contactsRouter);

const testimonialsRouter = require("./routes/testimonials");
app.use("/api/testimonials", testimonialsRouter);

const loginsRouter = require("./routes/logins");
app.use("/api/logins", loginsRouter);

const databasesRouter = require("./routes/databases");
app.use("/api/allrecords", databasesRouter);

app.listen(port, () => console.log(`Server listening in port ${port}`));
