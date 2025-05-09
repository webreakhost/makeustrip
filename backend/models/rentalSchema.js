// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Rental List Schema
const rentalSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  location: {
    city: {
      type: String,
      required: true
    },
    distanceFromTown: {
      type: String,
      required: true
    }
  },
  mapLink: {
    type: String
  },
  propertyDetails: {
    beds: {
      type: Number,
      required: true
    },
    baths: {
      type: Number,
      required: true
    },
    store: {
      type: Number,
      required: true
    },
    sqft: {
      type: Number,
      required: true
    }
  },
  roomType: {
    type: String,
    required: true
  },
  lastBooked: {
    type: Date,
    default: Date.now
  },
  cancellationPolicy: {
    type: String
  },
  discount: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number,
    required: true
  },
  discountedPrice: {
    type: Number,
    required: true
  },
  taxesAndFees: {
    type: Number,
    required: true
  },
  reviews: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  images: {
    type: [String], // Array of image URLs
    required: false,
  },
  availabilityLink: {
    type: String
  }
}, { timestamps: true });


export default mongoose.model('Rental', rentalSchema);
