




import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";
import CancelledTickets from "../ticket/CancelledTickets";

const Cancelled = () => {
  const [carBookings, setCarBookings] = useState([]);
  const [hotelBookings, setHotelBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user._id) {
      setError("User not found. Please log in.");
      setLoading(false);
      return;
    }

    const userId = user._id;

    const fetchCancelledBookings = async () => {
      try {
        const [carResponse, hotelResponse] = await Promise.all([
          axios.get(`${BACKENDURL}/api/v1/cancel/user/${userId}/cancelled-car-bookings`),
          axios.get(`${BACKENDURL}/api/v1/cancel/user/${userId}/cancelled-hotel-bookings`)
        ]);

        setCarBookings(carResponse.data.cancelledCarBookings);
        setHotelBookings(hotelResponse.data.cancelledHotelBookings);
        setError("");
      } catch (err) {
        console.error("Error fetching cancelled bookings:", err);
        setError("you have't any cancelled bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchCancelledBookings();
  }, []);

  if (loading) return <div className="text-center text-lg font-semibold">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-center mb-6 text-red-700">Cancelled Bookings</h3>

      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-4 text-gray-600">Cancelled Car Bookings</h4>
        {carBookings.length === 0 ? (
          <p className="text-gray-500">No cancelled car bookings found.</p>
        ) : (
          <ul className="space-y-4">
            {carBookings.map((booking) => (
              <li key={booking._id} className="p-4 bg-white shadow rounded-md">
                <p><strong>Booking ID:</strong> {booking._id}</p>
                <p><strong>Car Name:</strong> {booking.carName}</p>
                <p><strong>Pickup Address:</strong> {booking.pickupAddress}</p>
                <p><strong>Drop Address:</strong> {booking.dropAddress}</p>
                <p><strong>Price:</strong> ${booking.price}</p>
                <p><strong>Status:</strong> <span className="text-red-500">{booking.bookingStatus}</span></p>
                <p><strong>Date:</strong> {new Date(booking.createdAt).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4 text-gray-600">Cancelled Hotel Bookings</h4>
        {hotelBookings.length === 0 ? (
          <p className="text-gray-500">No cancelled hotel bookings found.</p>
        ) : (
          <ul className="space-y-4">
            {hotelBookings.map((booking) => (
              <li key={booking._id} className="p-4 bg-white shadow rounded-md">
                <p><strong>Booking ID:</strong> {booking._id}</p>
                <p><strong>Hotel Name:</strong> {booking.hotelName}</p>
                <p><strong>Total Price:</strong> ${booking.transactionDetails.totalPrice}</p>
                <p><strong>Guests:</strong> {booking.guests.map(g => `${g.firstName} ${g.lastName}`).join(", ")}</p>
                <p><strong>Status:</strong> <span className="text-red-500">{booking.bookingStatus}</span></p>
                <p><strong>Date:</strong> {new Date(booking.createdAt).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="">
      <h4 className="text-xl font-semibold mb-4 text-gray-600">Cancelled flight Bookings</h4>
        <CancelledTickets/>
      </div>
    </div>
  );
};

export default Cancelled;
