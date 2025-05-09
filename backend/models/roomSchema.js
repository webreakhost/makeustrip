import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  type: {
    type: String, // e.g., "Superior Double Room", "Deluxe King Room"
    required: true,
    trim: true,
  },
  description: {
    type: String, // Short room description
    required: false,
  },
  amenities: {
    type: [String], // e.g., ["Free Wi-Fi", "Air Conditioning", "King Bed"]
    required: true,
  },
  sleeps: {
    type: Number, // Number of people the room can accommodate
    required: true,
  },
  bedType: {
    type: String, // e.g., "King Bed", "Queen Bed", "Twin Bed"
    required: true,
  },
  price: {
    type: Number, // Base price per night
    required: true,
  },
  originalPrice: {
    type: Number, // Original price for discount calculation
    required: false,
  },
  discount: {
    type: String, // e.g., "10% Off"
    required: false,
  },
  availability: {
    type: Boolean, // Whether the room is available for booking
    default: true,
  },
  floor: {
    type: String, // e.g., "6th Floor"
    required: false,
  },
  size: {
    type: String, // e.g., "1800 sqft"
    required: false,
  },
  views: {
    type: String, // e.g., "City View", "Garden View"
    required: false,
  },
  smokingPolicy: {
    type: String, // e.g., "Non-Smoking"
    required: false,
  },
  images: {
    type: [String], // Array of image URLs
    required: false,
  },
  isRefundable: {
    type: Boolean, // Whether the room booking is refundable
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Room", RoomSchema);
