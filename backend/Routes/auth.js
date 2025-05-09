import express from "express";
import User from "../models/userSchema.js"
import jwt from "jsonwebtoken"
import axios from "axios";

import { authenticate, restrict  } from "../auth/verifyToken.js";


import {
  registerUser,
  loginUser,
  getUser,
  getUserBookings,
  getAllUsers,
  getAllUserBookings,
  getAllBookings,
  forgotPassword,
  resetPassword,
  updateUserRole,
  
  
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser",authenticate,getUser);
router.get("/myBookings", authenticate, getUserBookings);
router.get("/allusers", getAllUsers);
router.get('/all-bookings', getAllBookings);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.put("/update-role/:id", authenticate, updateUserRole);

router.get("/all-user-bookings", getAllUserBookings);



// const router = express.Router();

router.post("/google-login", async (req, res) => {
    try {
        const { token } = req.body;

        // Verify Google Token
        const response = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);

        if (!response.data.email) {
            return res.status(400).json({ error: "Invalid Google token" });
        }

        const { email, name, picture } = response.data;

        // Check if user exists in database
        let user = await User.findOne({ email });

        if (!user) {
            // Create new user if not exists
            user = await User.create({
                email,
                name,
                photo: picture,
                isAdmin: false,
            });
        }

        // Generate JWT Token
        const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.json({
            token: jwtToken,
            user,
        });
    } catch (error) {
        console.error("Google login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});



// router.get("/allusers", getAllUsers);
// router.put("/updateUser", authenticate, updateProfile);
// authenticate
export default router;
