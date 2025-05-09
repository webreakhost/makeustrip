


import express from "express";
import {
  getCancelledCarBookings,
  getCancelledHotelBookings,
} from "../controller/cancelController.js";

const router = express.Router();

// Route to get cancelled car bookings for a user
router.get("/user/:userId/cancelled-car-bookings", getCancelledCarBookings);

// Route to get cancelled hotel bookings for a user
router.get("/user/:userId/cancelled-hotel-bookings", getCancelledHotelBookings);

export default router;
