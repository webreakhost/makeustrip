// import express from "express";
// import {
//   addRoom,
//   getAllRooms,
//   getRoom,
//   searchRooms,
//   getRoomsByHotelId
// } from "../controller/roomController.js";
// import multer from "multer";
// const router = express.Router();

// // Add a new room
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads/rooms/"); // Upload destination folder
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + "-" + file.originalname); // Unique file names
//     },
//   });
//   const upload = multer({ storage });
  
//   // Add room route with image uploads
//   router.post("/add", upload.array("images", 5), addRoom); // Accept up to 5 images
  
// // router.post("/add", addRoom);

// // Get all rooms
// router.get("/all", getAllRooms);

// // Get a single room by ID
// router.get("/:id", getRoom);

// // Search rooms with filters
// router.get("/search", searchRooms);

// router.get("/hotels/:hotelId/rooms", getRoomsByHotelId);

// export default router;






import express from "express";
import {
  addRoom,
  getAllRooms,
  getRoom,
  searchRooms,
  getRoomsByHotelName
} from "../controller/roomController.js";
import multer from "multer";

const router = express.Router();

// Configure storage for room images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/rooms/"); // Upload destination folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filenames
  },
});

const upload = multer({ storage });

// Add a room with image uploads
router.post("/add", upload.array("images", 5), addRoom);

// Get all rooms
router.get("/all", getAllRooms);

// Get a single room by ID
router.get("/:id", getRoom);

// Search rooms with filters
router.get("/search", searchRooms);

// Get rooms by hotel ID
// router.get("/hotels/:hotelId/rooms", getRoomsByHotelId);
// router.get('/hotels/:hotelName/rooms', getRoomsByHotelName);
router.get("/hotel/:hotelName", getRoomsByHotelName);

export default router;
