import User from "../models/userSchema.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Ticket from "../models/ticketShema.js";
import nodemailer from "nodemailer";
import crypto from "crypto";
import dotenv from "dotenv"


// const jwtSecretKey = "dkfjdslkfjlk43546kjsSak56g4"
  // "f64b6790ba78cd243e0c5849dc5e7fd97c47e8f37234fe6403b1432a4a7705caadcc729936593a00939b3bd0e3554533961121715e4ffeac1b84cc10835a4d95";
const saltRounds = 10;

const createJWTToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: "25d" });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email, and password are required fields" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    return res.status(400).json("Something went wrong");
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Email and password are required fields" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Create payload with user ID and email
    const payload = {
      userId: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    // Create JWT token
    const token = createJWTToken(payload);

    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      profilePic: user.profilePic,
    };

    return res
      .status(200)
      .json({ message: "Login successful", token, data: userData });
  } catch (error) {
    console.error("Login error:", error); // Add this line for logging
    return res.status(500).json({ error: "Something went wrong" });
  }
};
// require("dotenv").config();

dotenv.config();
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // Your email
    pass: process.env.EMAIL_PASS,  // Your app password
  },
});

// 🔹 Forgot Password
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate a reset token (valid for 1 hour)
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email with reset link
    const resetLink = `${process.env.CLIENT_SITE_URL}reset-password/${resetToken}`;

    await transporter.sendMail({
      from: `"Support Team" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Password Reset Request",
      html: `<p>You requested a password reset.</p>
             <p>Click the link below to reset your password:</p>
             <a href="${resetLink}">${resetLink}</a>
             <p>This link is valid for 1 hour.</p>`,
    });

    res.status(200).json({ message: "Reset link sent to email" });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// 🔹 Reset Password
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ error: "Token and new password are required" });
  }

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    // Hash the new password
    user.password = await bcrypt.hash(newPassword, saltRounds);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};



export const getUser = async (req, res) => {
  try {
    console.log(req.userId, "req.userId"); // Log user ID
    if (!req.userId) {
      return res.status(400).json({ message: "User ID not found in request" });
    }

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const tickets = user.flightBookings || [];
    const ticketObjects = [];

    for (let i = 0; i < tickets.length; i++) {
      const ticket = await Ticket.findById(tickets[i]);
      if (!ticket) {
        console.error(`Ticket not found: ${tickets[i]}`);
        continue;
      }
      ticketObjects.push(ticket);
    }

    return res.status(200).json({ user, tickets: ticketObjects });
  } catch (error) {
    console.error("Error in getUser:", error); // Detailed error log
    return res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};


export const getUserBookings = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .populate("hotelBookings")
      .populate("flightBookings")
      .populate("carBookings")
      .populate("rentalBookings");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      hotelBookings: user.hotelBookings,
      flightBookings: user.flightBookings,
      carBookings: user.carBookings,
      rentalBookings:user.rentalBookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};


export const getAllBookings = async (req, res) => {
  try {
      // Fetch all users and their associated bookings
      const users = await User.find({}).populate('hotelBookings flightBookings carBookings');
      res.status(200).json({ success: true, users });
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to fetch bookings' });
  }
};




export const getAllUserBookings = async (req, res) => {
  try {
    const users = await User.find({})
      .populate("hotelBookings")
      .populate("flightBookings")
      .populate("carBookings")
      .populate("rentalBookings");

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    const userBookings = users.map((user) => ({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      hotelBookings: user.hotelBookings,
      flightBookings: user.flightBookings,
      carBookings: user.carBookings,
      rentalBookings:user.rentalBookings,
    }));

    res.status(200).json({ users: userBookings });
  } catch (error) {
    console.error("Error fetching all user bookings:", error.message);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};




export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}); // Fetch all users

    if (!users.length) {
      return res.status(404).json({ message: "No users found" });
    }

    // Map through the users to fetch their booking details
    const userDetails = await Promise.all(
      users.map(async (user) => {
        const tickets = await Promise.all(
          user.flightBookings.map(async (bookingId) => await Ticket.findById(bookingId))
        );

        return {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
          tickets,
        };
      })
    );

    return res.status(200).json({ users: userDetails });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};



// import User from "../models/User.js"; // Adjust the import path as needed

export const updateUserRole = async (req, res) => {
  try {
    const userId = req.params.id;
    const { role } = req.body;

    // Validate role
    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid role specified." });
    }

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Update role
    user.role = role;
    await user.save();

    res.status(200).json({ message: "User role updated successfully.", user });
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
};

// module.exports = { updateUserRole };

