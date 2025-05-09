
import mongoose from "mongoose";

// Hotel Schema
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  distance: {
    type: String,
    required: true
  },
  amenities: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number,
    required: true
  },
  discount: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  reviews: {
    type: Number,
    required: true
  },
  cancellationPolicy: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Hotel Model
export default mongoose.model('Hotel', HotelSchema);
// export default mongoose.model("flights", flightSchema);

