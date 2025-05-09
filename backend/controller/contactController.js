// import { Contactmsg } from "../models/Contactmodel.js";
import { Contactmsg } from "../models/contactSchema.js";

// Function to handle message creation
const sendMessage = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    // Create a new contact message
    const newMessage = new Contactmsg({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    });

    // Save the message to the database
    await newMessage.save();

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
};

const getAllMessages = async (req, res) => {
  try {
    // Fetch all contact messages from the database
    const messages = await Contactmsg.find().sort({ createdAt: -1 }); // Sorting by newest first

    res.status(200).json({ 
      success: true, 
      data: messages 
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ 
      success: false, 
      error: 'Something went wrong, please try again later.' 
    });
  }
};

export {sendMessage, getAllMessages}