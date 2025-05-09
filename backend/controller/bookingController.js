// import Booking from "../models/bookingSchema.js";
import HotelBooking from "../models/bookingSchema.js"
import User from "../models/userSchema.js";
import FlightBooking from "../models/flightbookschema.js"
import Flight from "../models/flightSchema.js";
import Hotel from "../models/HotelSchema.js";
// import Car from "../models/carSchema.js";
// import Rental from "../models/rentalSchema.js";
import Ticket from "../models/ticketShema.js";
import Stripe from "stripe";
import Guest from "../models/guest.js";
import mongoose from "mongoose";
import CarBooking from "../models/carbookingSchema.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Function to generate a UID
function generateUID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let uid = "";
  for (let i = 0; i < 10; i++) {
    uid += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return uid;
}

// Flight Booking Controller
export const getFlightCheckoutSession = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const flight = await Flight.findById(req.params.flightId).populate("airline");

    if (!flight) {
      return res
        .status(404)
        .json({ success: false, message: "Flight not found" });
    }

    const { bookingUsersData, selectedSeats } = req.body;
    const bookingUID = generateUID();
    let ticket = await Ticket.findOne({ uid: bookingUID });

    if (!ticket) {
      ticket = new Ticket({ uid: bookingUID, tickets: [] });
    }

    const numPassengers = Object.keys(bookingUsersData).length;

    for (let i = 1; i <= numPassengers; i++) {
      const userData = bookingUsersData[`passenger${i}`];
      const seat = selectedSeats[i - 1];

      const booking = new FlightBooking({
        flight: flight._id,
        user: user._id,
        seat,
        fName: userData.firstName,
        lName: userData.lastName,
        dob: userData.dob,
        passportNumber: userData.passportNumber,
        state: userData.state,
        phoneNumber: userData.phoneNumber,
        email: userData.email,
        passportSizePhoto: userData.passportSizePhoto,
      });

      const savedBooking = await booking.save();
      ticket.tickets.push(savedBooking._id);
    }

    // user.bookings.push(ticket._id);
    user.flightBookings.push(ticket._id)
    flight.bookedSeats.push(...selectedSeats);

    await Promise.all([ticket.save(), user.save(), flight.save()]);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}success`,
      cancel_url: `${process.env.CLIENT_SITE_URL}`,
      customer_email: user.email,
      client_reference_id: req.params.flightId,
      line_items: [
        {
          price_data: {
            currency: "inr",
            unit_amount: flight.price * 100,
            product_data: {
              name: `${flight.airline.airlineName} - ${flight.from} to ${flight.to}`,
              description: `Departure: ${flight.departDate} ${flight.departTime}, Arrival: ${flight.arriveDate} ${flight.arriveTime}`,
              images: [flight.airline.airlineLogo],
            },
          },
          quantity: numPassengers,
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Stripe checkout session created",
      session,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// hotle booking controoler 
export const createBooking = async (req, res) => {
  const { room, hotelName, transactionDetails, guests, paymentMethodId } = req.body;

  try {
    // Validate request
    if (!room || !hotelName || !transactionDetails || !guests || !paymentMethodId) {
      return res.status(400).json({ success: false, message: "Invalid input data" });
    }

    // Create a Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: transactionDetails.totalPrice * 100, // Amount in cents
      currency: "inr",
      payment_method: paymentMethodId,
      confirm: true,
      payment_method_types: ['card'],
      // return_url: 'http://localhost:5173/success',
      return_url: `${process.env.CLIENT_SITE_URL}success`,
    });

    if (paymentIntent.status !== "succeeded") {
      return res.status(400).json({ success: false, message: "Payment failed" });
    }

    

 const user = await User.findById(req.userId);
// if (!user) {
//   return res.status(404).json({ message: "User not found" });
// {
    const booking = new HotelBooking({
      room,
      hotelName,
      transactionDetails,
      guests,
      stripePaymentId: paymentIntent.id,
      paymentStatus: "paid",
      user:user._id
      // userId: user, // Assuming user ID is passed via middleware
      // userId: req.userId, 
    });

    await booking.save();
    user.hotelBookings.push(booking._id);
    await user.save();

    res.status(200).json({ success: true, message: "Booking successful", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Fetch all bookings for a user
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await HotelBooking.find({ userId: req.user.id });
    res.status(200).json({ success: true, bookings });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


// cnacel hotel booking 
export const cancelBooking = async (req, res) => {
  const { bookingId } = req.params;

  try {
    const booking = await HotelBooking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    if (booking.bookingStatus === "cancelled") {
      return res.status(400).json({ success: false, message: "Booking is already cancelled" });
    }

    booking.bookingStatus = "cancelled";
    await booking.save();

    res.status(200).json({ success: true, message: "Booking cancelled successfully", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};





export const createCarBooking = async (req, res) => {
  const { carId, carName, price, pickupAddress, dropAddress } = req.body;

  try {
    // Fetch the user making the booking
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Create a new car booking
    const newBooking = new CarBooking({
      user: user._id,
      carId,
      carName,
      price,
      pickupAddress,
      dropAddress,
    });

    // Save the booking
    await newBooking.save();

    // Add the booking reference to the user's `carBookings` array
    user.carBookings.push(newBooking._id);
    await user.save();

    // Create Stripe payment session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: carName,
        
            },
            unit_amount: price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}success`,
      cancel_url: `${process.env.CLIENT_SITE_URL}cancel`,
    });

    // Respond with the Stripe session URL
    res.status(200).json({ sessionUrl: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating booking." });
  }
};







// controllers/carBookingController.js
export const cancelCarBooking = async (req, res) => {
  const { bookingId } = req.params; // Extract bookingId from the route params

  try {
    // Find the car booking by its ID
    const booking = await CarBooking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Car booking not found.' });
    }

    // Check if the booking is already canceled
    if (booking.bookingStatus === 'cancelled') {
      return res.status(400).json({ success: false, message: 'Car booking is already cancelled.' });
    }

    // Update the booking status to "cancelled"
    booking.bookingStatus = 'cancelled';
    await booking.save();

    // Update the user's car bookings
    const user = await User.findById(booking.user);
    if (user) {
      user.carBookings = user.carBookings.filter((id) => id.toString() !== bookingId);
      await user.save();
    }

    // Respond with success
    res.status(200).json({
      success: true,
      message: 'Car booking cancelled successfully.',
      booking,
    });
  } catch (error) {
    console.error('Error in cancelCarBooking:', error);
    res.status(500).json({ success: false, message: 'Error cancelling car booking.' });
  }
};




// const Booking = require("../models/rentalbookingSchema.js"); // Assuming Booking model is defined in models/Booking.js

import Booking from "../models/rentalbookingSchema.js"
// Controller to handle booking creation
export const createrentalBooking = async (req, res) => {
    try {
      const user = await User.findById(req.userId);

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
        const { rentalId, guests, totalPrice,title } = req.body;

        // Validate required fields
        if (!user || !rentalId || !guests || guests.length === 0 || !totalPrice) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Save booking details to the database
        const newBooking = new Booking({
            user:user._id,
            rentalId,
            guests,
            title,
            totalPrice,
            bookingDate: new Date(), // Auto-generate booking date
        });

        await newBooking.save();

        user.rentalBookings.push(newBooking._id);
        await user.save();

        res.status(201).json({
            message: "Booking created successfully!",
            booking: newBooking,
        });
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ message: "Failed to create booking." });
    }
};

// module.exports = { createBooking };



