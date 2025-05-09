












import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";
import Bookingdas from "./Bookingdas";
import HotelBookings from "./HotelBookings";
import Flightbook from "./Flightbook";
import CarBookings from "./CarBookings";
import RentalBookings from "./RentalBookings"; // <<--- New Import

const MyBookings = () => {
  const [bookings, setBookings] = useState({
    hotelBookings: [],
    flightBookings: [],
    carBookings: [],
    rentalBookings: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("hotel");

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BACKENDURL}/api/v1/auth/myBookings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch bookings. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-red-500">{error}</div>;

  const hasBookings =
    bookings.hotelBookings.length > 0 ||
    bookings.flightBookings.length > 0 ||
    bookings.carBookings.length > 0 ||
    bookings.rentalBookings.length > 0;

  return (
    <div className="container mx-auto p-4 bg-gray-200">
      <Bookingdas bookings={bookings} />

      {!hasBookings ? (
        <div className="text-center text-gray-500 text-lg font-semibold ">
          No bookings available.
        </div>
      ) : (
        <>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center space-x-4 mb-3 mt-3 ">
            <button
              className={`px-4 py-2 rounded ${activeTab === "hotel" ? "bg-green-500 text-white" : "bg-gray-200"}`}
              onClick={() => setActiveTab("hotel")}
            >
              Hotel Bookings
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === "flight" ? "bg-green-500 text-white" : "bg-gray-200"}`}
              onClick={() => setActiveTab("flight")}
            >
              Flight Bookings
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === "car" ? "bg-green-500 text-white" : "bg-gray-200"}`}
              onClick={() => setActiveTab("car")}
            >
              Car Bookings
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === "rental" ? "bg-green-500 text-white" : "bg-gray-200"}`}
              onClick={() => setActiveTab("rental")}
            >
              Rental Bookings
            </button>
          </div>

          {/* Booking Content */}
          {activeTab === "hotel" && <HotelBookings hotelBookings={bookings.hotelBookings} />}
          {activeTab === "flight" && <Flightbook flightBookings={bookings.flightBookings} />}
          {activeTab === "car" && <CarBookings carBookings={bookings.carBookings} />}
          {activeTab === "rental" && <RentalBookings rentalBookings={bookings.rentalBookings} />}
        </>
      )}
    </div>
  );
};

export default MyBookings;
