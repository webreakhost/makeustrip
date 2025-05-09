



import React, { useEffect, useState } from "react";
import { FaPlane, FaTicketAlt, FaRegSadCry } from "react-icons/fa";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";

const CancelledTickets = ({ userId }) => {
  const [cancelledTickets, setCancelledTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCancelledTickets = async () => {
      try {
        const response = await axios.put(
          `${BACKENDURL}/api/v1/tickets/getcancel/${userId}`
        );

        console.log("API Response:", response.data); // Debugging API response

        if (response.data.success && Array.isArray(response.data.data)) {
          setCancelledTickets(response.data.data);
        } else {
          setCancelledTickets([]);
          setError(response.data.message || "Unexpected API response.");
        }
      } catch (err) {
        setCancelledTickets([]); // Prevent undefined issues
        setError("Failed to fetch cancelled tickets. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCancelledTickets();
  }, [userId]);

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        <FaRegSadCry size={40} className="mx-auto" />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 mt-[17vw] sm:mt-[6vw]">
      {/* <h2 className="text-2xl font-bold text-center mb-6">
        Cancelled Tickets
      </h2> */}

      {cancelledTickets.length === 0 ? (
        <div className="text-center text-gray-500">
          <FaRegSadCry size={50} className="mx-auto mb-4" />
          <p>No cancelled tickets found.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cancelledTickets.map((flight, index) => (
            <div
              key={flight._id || index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              {/* Flight Info */}
              <div className="flex items-center mb-4">
                {flight.airlineLogo ? (
                  <img
                    src={flight.airlineLogo}
                    alt={flight.airlineName}
                    className="h-12 w-12 object-contain mr-4"
                  />
                ) : (
                  <FaPlane size={48} className="text-blue-500 mr-4" />
                )}
                <div>
                  <h3 className="text-lg font-bold">{flight.airlineName}</h3>
                  <p className="text-sm text-gray-500">
                    {flight.from} → {flight.to}
                  </p>
                  <p className="text-sm text-gray-400">
                    Departure:{" "}
                    {flight.departDate
                      ? new Date(flight.departDate).toLocaleString()
                      : "N/A"}
                  </p>
                </div>
              </div>

              {/* Bookings */}
              <div className="space-y-4">
                {Array.isArray(flight.bookings) && flight.bookings.length > 0 ? (
                  flight.bookings.map((booking) => (
                    <div
                      key={booking._id}
                      className="bg-gray-50 p-3 rounded-lg border border-gray-200"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">
                            Passenger Name: {booking.fName || "Unknown"}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Seat: {booking.seat || "N/A"}
                          </p>
                        </div>
                        <FaTicketAlt size={24} className="text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Ticket ID: {booking.ticketId || "N/A"}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No bookings available.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CancelledTickets;
