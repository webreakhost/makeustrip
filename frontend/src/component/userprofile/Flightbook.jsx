import React, { useState, useEffect, useContext } from "react";
import { FaClock, FaCalendarAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { BACKENDURL } from "../../Config/Config";
import { authContext } from "../../context/authContext";
import { useNavigate, Link, NavLink } from "react-router-dom";
import axios from "axios";

const Flightbook = () => {
  const { dispatch } = useContext(authContext);
  const [tickets, setTickets] = useState([]);
  const [activeTab, setActiveTab] = useState("upcoming"); // State to track active tab
  const [loading, setLoading] = useState(false); // State for loading during cancelation
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(BACKENDURL + "/api/v1/auth/getUser", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTickets(response.data.tickets || []); // Ensure we get an empty array if tickets is undefined
      } catch (error) {
        if (error.response && error.response.status === 401) {
          dispatch({ type: "LOGOUT" });
          navigate("/login");
        } else {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [navigate, dispatch]);

  // Handle Tab Click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Handle Ticket Cancelation
  const handleCancelTicket = async (uid) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    if (!window.confirm("Are you sure you want to cancel this ticket?")) return;

    setLoading(true);

    try {
      const response = await axios.put(
        `${BACKENDURL}/api/v1/tickets/cancel/${uid}`, // Backend route for cancelation
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        alert("Ticket canceled successfully!");
        setTickets((prevTickets) =>
          prevTickets.map((ticket) =>
            ticket.uid === uid ? { ...ticket, status: "cancelled" } : ticket
          )
        );
      } else {
        alert(response.data.message || "Failed to cancel ticket.");
      }
    } catch (error) {
      console.error("Error canceling ticket:", error);
      alert("An error occurred while canceling the ticket.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
    
      {/* Tickets Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        {tickets.length > 0 ? (
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* {/* {tickets.map((ticket) => */}

{tickets
  .filter((ticket) => ticket !== null) // Filter out null or undefined tickets
  .map((ticket) => (
    <div
      key={ticket._id}
      className="bg-white shadow-lg rounded-md p-6 hover:shadow-xl transition-all"
    >
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold text-lg text-blue-600">
          Ticket Id : {ticket.uid}
        </p>
        <Link
          to={`/ticket/${ticket.uid}`}
          className="text-blue-500 underline text-sm"
        >
          Go to Ticket
        </Link>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <FaClock size={18} className="mr-2" />
          <p>
            {ticket.status === "cancelled"
              ? "Cancelled"
              : "Upcoming Trip"}
          </p>
        </div>
        {ticket.status !== "cancelled" && (
          <button
            onClick={() => handleCancelTicket(ticket.uid)}
            className="bg-red-500 text-white text-xs px-3 py-1 rounded-md hover:bg-red-600 transition-all"
            disabled={loading}
          >
            {loading ? "Canceling..." : "Cancel Ticket"}
          </button>
        )}
      </div>
    </div>
  ))}
            </div>
          </div>
        ) : (
          <p className="mt-5 text-gray-500">No tickets found</p>
        )}
      </div>
    </div>
  );
};

export default Flightbook;



