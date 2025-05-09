import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoute from "./Routes/auth.js";
import flightRoute from "./Routes/flights.js";
import bookingRoute from "./Routes/booking.js";
// import router from "./Routes/auth.js";
import hotelRoutes from './Routes/hotelRoutes.js';
import multer from 'multer';
// const path = require('path');
import path from 'path'
// import carRoutes from './Routes/car.js'
import carRoutes from './Routes/car.js'
import roomRoutes from './Routes/room.js'
import ticketRoute from './Routes/tickets.js'
import cancelRoute from './Routes/cancel.js'
import rentalRoute from './Routes/rental.js'
import { Contactrouter } from "./Routes/contactroute.js";

dotenv.config();

const app = express();

const corsOptions = {
    origin:true,
};

app.use(express.json());

app.use(cors(corsOptions));
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder to store the uploaded files
  },
  filename: (req, file, cb) => {
    // Make sure the filename is unique
    cb(null, Date.now() + path.extname(file.originalname)); // Append the file extension to the unique filename
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

app.get("/", (req, res)=>{
    res.send("api is woriking")
});

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/flights", flightRoute);
app.use('/api/v1/hotels', hotelRoutes);
app.use("/api/v1/bookings", bookingRoute);
app.use('/api/v1/cars', carRoutes);
app.use("/api/v1/rooms", roomRoutes);
app.use("/api/v1/tickets", ticketRoute);
app.use("/api/v1/cancel", cancelRoute);
app.use("/api/v1/rental", rentalRoute);
app.use('/api/v1/contacts', Contactrouter);

app.listen(4040, ()=>{
    connectDB();
    console.log("server is ruuning on 4040")
});




