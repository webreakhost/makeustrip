



import React, { useState } from "react";
import axios from "axios";
// import { BACKENDURL } from "../../utils/helper";
import { BACKENDURL } from "../../Config/Config";

const HotelBookings = ({ hotelBookings, setBookings }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (bookingId) => {
    setDropdownOpen(dropdownOpen === bookingId ? null : bookingId);
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.patch(
        `${BACKENDURL}/api/v1/bookings/cancel/${bookingId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        alert("Booking cancelled successfully!");

        setBookings((prevBookings) => ({
          ...prevBookings,
          hotelBookings: prevBookings.hotelBookings.map((booking) =>
            booking._id === bookingId
              ? { ...booking, bookingStatus: "cancelled" }
              : booking
          ),
        }));
        setDropdownOpen(null);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to cancel booking. Please try again.");
    }
  };

  if (!hotelBookings.length) {
    return <p>No hotel bookings available.</p>;
  }

  return (
    <div className="row align-items-center justify-content-start">
      <div className="col-xl-12 col-lg-12 col-md-12">
        {hotelBookings.map((hotel) => (
          <div key={hotel._id} className="card border br-dashed mb-4">
            {/* Card header */}
            <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
              {/* Icon and Title */}
              <div className="d-flex align-items-center">
                <div className="square--50 circle bg-light-purple text-purple flex-shrink-0">
                  <i className="fa-solid fa-hotel"></i>
                </div>
                <div className="ms-2">
                  <h6 className="card-title text-dark fs-5 mb-1">
                    {hotel.hotelName}
                  </h6>
                  <ul className="nav nav-divider small">
                    <li className="nav-item text-muted">Booking ID: {hotel._id}</li>
                    <li className="nav-item ms-2">
                      {hotel.bookingStatus === "cancelled" ? (
                        <span className="label bg-light-danger text-danger">Cancelled</span>
                      ) : (
                        <span className="label bg-light-success text-success">Confirmed</span>
                      )}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Button with dropdown */}
              <div className="mt-2 mt-md-0 position-relative">
                {hotel.bookingStatus === "cancelled" ? (
                  <button
                    className="btn btn-md btn-light-danger fw-medium mb-0 cursor-not-allowed"
                    disabled
                  >
                    Booking Cancelled
                  </button>
                ) : (
                  <div>
                    <button
                      className="btn btn-md btn-light-seegreen fw-medium mb-0"
                      onClick={() => toggleDropdown(hotel._id)}
                    >
                      Manage Booking
                    </button>
                    {dropdownOpen === hotel._id && (
                      <div className="dropdown-menu show mt-2 p-2 border rounded shadow-sm" style={{ position: 'absolute', right: 0, zIndex: 1000 }}>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => handleCancelBooking(hotel._id)}
                        >
                          Cancel Booking
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Card body */}
            <div className="card-body">
              <div className="row g-3">
                <div className="col-sm-6 col-md-4">
                  <span>Check-in Date</span>
                  <h5>{new Date(hotel.createdAt).toLocaleDateString()}</h5>
                </div>
                <div className="col-sm-6 col-md-4">
                  <span>Check-out Date</span>
                  <h6 className="mb-0">
                    {new Date(hotel.checkOutDate).toLocaleDateString()}
                  </h6>
                </div>
                <div className="col-md-4">
                  <span>Booked by</span>
                  <h6 className="mb-0">{hotel.guestName || "Guest User"}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelBookings;
