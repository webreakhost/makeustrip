


import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  passportNumber: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
});

const BookingSchema = new mongoose.Schema(
  {
    room: { type: String, required: true },
    hotelName: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    transactionDetails: {
      totalPrice: { type: Number, required: true },
    },
    guests: [GuestSchema],
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
    bookingStatus: {
      type: String,
      enum: ["cancelled", "upcoming", "completed"],
      default: "upcoming",
    },
    stripePaymentId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("HotelBooking", BookingSchema);
