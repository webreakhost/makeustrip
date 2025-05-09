import express from 'express';
// import { addHotel, getAllHotels, getHotelById, filterHotels} '';
import { addHotel, getAllHotels, getHotelById, filterHotels, searchHotels,getHotelByName } from '../controller/hotelController.js';

const router = express.Router();


import multer from 'multer';
const upload = multer({ dest: 'uploads/' }); // Specify the folder for uploads

// Route to add hotel with file upload
router.post('/hotel', upload.single('thumbnail'), addHotel);

// for searching hotel 
router.get("/search", searchHotels);

// Get all hotels
router.get('/hotelss', getAllHotels);

// Get a single hotel by ID
router.get('/hotels/:id', getHotelById);
router.get('/hotel/:name', getHotelByName);

// Filter hotels by location or price range
router.get('/hotels/filter', filterHotels);

export default router;
