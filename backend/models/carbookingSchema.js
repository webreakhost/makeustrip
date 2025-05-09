// const mongoose = require('mongoose');
import mongoose from "mongoose";

const carBookingSchema = new mongoose.Schema(
  {
    carId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Car' },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    carName: { type: String, required: true },
    price: { type: Number, required: true },
    pickupAddress: { type: String, required: true },
    bookingStatus: {
      type: String,
      enum: ["cancelled", "upcoming", "completed"],
      default: "upcoming",
    },
    dropAddress: { type: String, required: true },
  },
  { timestamps: true }
);

// module.exports = mongoose.model('CarBooking', carBookingSchema);
export default mongoose.model('CarBooking', carBookingSchema);