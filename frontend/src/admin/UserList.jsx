import React, { useEffect, useState } from "react";
import { FaUserAlt, FaTicketAlt, FaPlane } from "react-icons/fa";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";

const UserList = () => {
  const [users, setUsers] = useState([]); // Array of users
  const [tickets, setTickets] = useState([]); // Array of tickets
  const [flights, setFlights] = useState([]); // Array of flights
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/auth/allusers`);
        setUsers(response.data.users || []); // Fallback to empty array if no users
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch user data.");
      }
    };

    const fetchTickets = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/tickets/alltickets`);
        const { tickets: ticketData, flights: flightData } = response.data;
        setTickets(ticketData || []); // Fallback to empty array
        setFlights(flightData || []); // Fallback to empty array
      } catch (err) {
        console.error("Error fetching tickets:", err);
        setError("Failed to fetch ticket data.");
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchUsers(), fetchTickets()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center text-lg font-bold">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  const getTicketsForUser = (userId) =>
    tickets.filter((ticket) => ticket.flightBookings.some((booking) => booking.user === userId));

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Users with Tickets</h1>
      <div className="space-y-4">
        {users.map((userWrapper, index) => {
          const user = userWrapper?.user || {};
          const userTickets = getTicketsForUser(user.id);

          return (
            <div
              key={user.id || index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex items-center space-x-6"
            >
              {/* User Information */}
              <div className="flex items-center space-x-4">
                <FaUserAlt className="text-blue-500 text-2xl" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">{user.name || "Unknown User"}</h2>
                  <p className="text-sm text-gray-500">{user.email || "No Email"}</p>
                </div>
              </div>

              {/* User Tickets */}
              <div className="flex-1">
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  Tickets ({userTickets.length}):
                </h3>
                {userTickets.length > 0 ? (
                  <div className="flex flex-wrap space-x-4">
                    {userTickets.map((ticket, ticketIndex) => (
                      <div key={ticket._id || ticketIndex} className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <FaTicketAlt className="text-green-500 text-lg" />
                          <span className="text-gray-600">
                            UID: {ticket.uid || "N/A"} 
                          </span>

                        </div>
                        {ticket.flightBookings.map((booking, bookingIndex) => {
                          const flight = flights.find((f) => f._id === booking.flight);
                          return (
                            <div
                              key={booking._id || bookingIndex}
                              className="flex items-center space-x-4"
                            >
                              <FaPlane className="text-blue-500 text-lg" />
                              <div>
                                <p className="text-sm text-gray-800 font-medium">
                                  Flight: {flight?.airlineName || "Unknown"}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Seat: {booking.seat || "N/A"}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Destination: {flight?.
to || "N/A"}
                                </p>
                                <p className="text-sm text-gray-500">
                                  status: {ticket.status}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No tickets available.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;