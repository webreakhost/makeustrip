




import React, { useState } from "react";
import axios from "axios";

const BACKENDURL = "http://62.72.30.159"; // Replace with your actual backend URL

const CarBookings = ({ carBookings, setBookings }) => {
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  const handleCarCancelBooking = async (bookingId) => {
    try {
      const token = localStorage.getItem("token"); // Fetch token from local storage
      const response = await axios.patch(
        `${BACKENDURL}/api/v1/bookings/carcancelled/${bookingId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        alert("Car booking cancelled successfully!");

        // Update the booking status in the state
        setBookings((prevBookings) => ({
          ...prevBookings,
          carBookings: prevBookings.carBookings.map((booking) =>
            booking._id === bookingId
              ? { ...booking, bookingStatus: "cancelled" }
              : booking
          ),
        }));
        setSelectedBookingId(null);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to cancel car booking. Please try again.");
    }
  };

  if (!carBookings.length) {
    return <p>No car bookings available.</p>;
  }

  return (
    <div className="row align-items-center justify-content-start">
      <div className="col-xl-12 col-lg-12 col-md-12">
        {carBookings.map((car) => (
          <div
            key={car._id}
            className={`card border br-dashed mb-4 ${
              car.bookingStatus === "cancelled" ? "bg-light text-muted" : ""
            }`}
          >
            {/* Card header */}
            <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
              {/* Icon and Title */}
              <div className="d-flex align-items-center">
                <div className="square--50 circle bg-light-success text-success flex-shrink-0">
                  <i className="fa-solid fa-car"></i>
                </div>
                <div className="ms-2">
                  <h6 className="card-title text-dark fs-5 mb-1">
                    {car.sourceCity} To {car.destinationCity}
                  </h6>
                  <ul className="nav nav-divider small">
                    <li className="nav-item text-muted">Booking ID: {car._id}</li>
                    <li className="nav-item ms-2">
                      <span className="text-dark fw-medium">{car.carName}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Button */}
              <div className="mt-2 mt-md-0">
                {car.bookingStatus === "cancelled" ? (
                  <span className="badge bg-danger text-white">Cancelled</span>
                ) : selectedBookingId === car._id ? (
                  <button
                    className="btn btn-md btn-light-danger fw-medium mb-0"
                    onClick={() => handleCarCancelBooking(car._id)}
                  >
                    Cancel Booking
                  </button>
                ) : (
                  <button
                    className="btn btn-md btn-light-seegreen fw-medium mb-0"
                    onClick={() => setSelectedBookingId(car._id)}
                  >
                    Manage Booking
                  </button>
                )}
              </div>
            </div>

            {/* Card body */}
            <div className="card-body">
              <div className="row g-3">
                <div className="col-sm-6 col-md-4">
                  <span>Pickup address</span>
                  <h6 className="mb-0">{car.pickupAddress}</h6>
                </div>
                <div className="col-sm-6 col-md-4">
                  <span>Drop address</span>
                  <h6 className="mb-0">{car.dropAddress}</h6>
                </div>
                <div className="col-md-4">
                  <span>Booked by</span>
                  <h6 className="mb-0">{car.bookedBy}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarBookings;
