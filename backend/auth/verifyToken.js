import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

import dotenv from 'dotenv';
dotenv.config();

export const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;
  console.log(authToken, "Received Auth Token");

  if (!authToken || !authToken.startsWith("Bearer ")) {
    console.log("Token not found or invalid format");
    return res.status(401).json({ success: false, message: "Token not found" });
  }

  try {
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.userId = decoded.userId;
    console.log("Decoded user ID:", req.userId);

    next();
  } catch (error) {
    console.log("Error during token verification:", error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ success: false, message: "Session Expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ success: false, message: "Invalid Token" });
    }

    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};


export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId);

  if (!user) {
    return res.status(401).json({ success: false, message: "user not found with given id" });
  }

  console.log(user, "user 1");

  if (!roles.includes(user.role)) {
    return res.status(401).json({ success: false, message: "role is not matching" });
  }

  next();
};