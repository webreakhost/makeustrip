

import mongoose from "mongoose";

// Define Car Schema
const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Car name
    type: { type: String, required: true }, // Car type: SUV, Sedan, Hatchback, etc.
    image: { type: String, required: true }, // Image URL
    seats: { type: Number, required: true }, // Number of seats
    ac: { type: String, enum: ['Yes', 'No'], required: true }, // Air Conditioning
    kmIncluded: { type: Number, required: true }, // KM included
    kmRate: { type: Number, required: true }, // Rate per KM after included
    price: { type: Number, required: true }, // Price per day
    originalPrice: { type: Number }, // Original price (if discounted)
    discount: { type: String, default: "No Discount" }, // Discount info
    cancellation: { type: String, default: "Non-refundable" }, // Cancellation policy
    transmission: { type: String, required: true }, // Transmission: Manual or Automatic
    luggage: { type: String }, // Luggage capacity: "2 Bags", "3 Bags", etc.
    fuel: { type: String, required: true }, // Fuel type: Petrol/Diesel/Electric
    reviews: { type: Number, default: 0 }, // Total reviews
    rating: { type: Number, default: 0 }, // Average rating
    isBooked: { type: Boolean, default: false }, // Booking status
    bookingStatus: {
      type: String,
      enum: ["Available", "Pending", "Confirmed", "Cancelled"],
      default: "Available",
    }, // Booking status
    bookingDetails: {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // User ID of the booker
      fromDate: { type: Date },
      toDate: { type: Date },
    },
    location: { type: String, required: true }, // Location of the car
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // Adds createdAt and updatedAt
);

export default mongoose.model('Car', carSchema);
