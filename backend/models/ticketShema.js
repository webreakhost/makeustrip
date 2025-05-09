



import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  status: {
          type: String,
          enum: ["upcoming", "completed", "cancelled", "unsuccessful"], // Define allowed statuses
          default: "upcoming", // Default status for new tickets
  },
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
    },
  ],
 
});

export default mongoose.model("Ticket", ticketSchema);