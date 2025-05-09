// const express = require('express');
// const router = express.Router();
import express from 'express'
// import router from express.Router();
const router = express.Router();
import {
  addCar,
  // searchCar,
  searchCar,
  // searchCars,
  getCar,
  getAllCars,
} from '../controller/carController.js' // Import controller functions

// Route to add a car
import multer from 'multer';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
    },
  });
  
  const upload = multer({ storage });
  
  // Route to add a car
  router.post("/addcar", upload.single("image"), addCar);

// Route to search for cars dynamically
router.get('/searchcar', searchCar);

// Route to get a single car by ID
router.get('/getcar/:id', getCar);

// Route to get all cars
router.get('/getallcars', getAllCars);

// module.exports = router;
export default router;
