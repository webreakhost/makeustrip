import express from "express"
// import { getAllMessages, sendMessage } from "";
import { getAllMessages, sendMessage } from "../controller/contactController.js";


const Contactrouter = express.Router();

// POST request to send a contact message
Contactrouter.post('/contact', sendMessage);
Contactrouter.get('/allmsg', getAllMessages);

// module.exports = router;
export {Contactrouter}