import express from 'express'
import { addRental, getAllRentals, searchRentalsByCity, getSingleRental } from '../controller/rentalController.js'
const router = express.Router();

import multer from "multer";


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/rental/"); // Upload destination folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filenames
  },
});

const upload = multer({ storage });

// router.post("/addrental", upload.array("images", 5), addRental);
router.post("/addrental", upload.array("images", 5), addRental);
router.get("/getallrentals", getAllRentals);
router.get('/search', searchRentalsByCity);
router.get("/rentals/:id", getSingleRental);


export default router