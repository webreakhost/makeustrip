import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  profilePic: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png",
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
  hotelBookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HotelBooking", // Referencing the hotel bookings schema
    },
  ],
  flightBookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FlightBooking", // Referencing the flight bookings schema
    },
  ],
  carBookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CarBooking", // Referencing the flight bookings schema
    },
  ],
  rentalBookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RentalBooking", // Referencing the flight bookings schema
    },
  ],
});

export default mongoose.model("User", userSchema);
