import express from "express";

import {
  getTicket,
  getSingleTicketForVerification,getAllTickets,cancelTicket,getCancelledTickets,getAllCancelledTickets,
  
} from "../controller/ticketController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/getTicket/:uid", getTicket);
// router.get("/getusertic",  getTicketsForUser)
router.put("/getcancel/:uid", getCancelledTickets);
router.put("/cancel/:uid", cancelTicket);
router.get("/alltickets", getAllTickets);
router.get("/allcancelled-tickets", getAllCancelledTickets);
// allcancelled-tickets
router.get(
  "/getSingleFlightForVerification/:id",
  getSingleTicketForVerification
);

export default router;