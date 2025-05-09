



import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BACKENDURL } from "../../Config/Config";
import { authContext } from "../../context/authContext";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications

const Faredetail = ({ car }) => {
  const { user, isUserLoggedIn } = useContext(authContext); // Get the user from the context
  const navigate = useNavigate();
  const [pickupAddress, setPickupAddress] = useState(
    "1674 Oak Drive Albany, New York"
  );
  const [dropAddress, setDropAddress] = useState(
    "1735 Sycamore Dallas, San Jose"
  );

  const handleBooking = async () => {
    if (!user) {
      toast.error("User information is missing!");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${BACKENDURL}/api/v1/bookings/carbookings`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user._id, // Use user from context
          carId: car._id,
          carName: car.name,
          price: car.price,
          pickupAddress,
          dropAddress,
        }),
      });

      const data = await response.json();

      if (data.sessionUrl) {
        window.location.href = data.sessionUrl; // Redirect to Stripe payment
      } else {
        toast.error("Error initiating payment.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while processing the booking.");
    }
  };

  if (!isUserLoggedIn) {
    toast.error("Please log in to book tickets");
    navigate("/");
    return null;
  }

  return (
    <div className="col-lg-4">
      <div className="card border-dashed p-3">
        <div className="d-flex align-items-center mb-3">
          <div className="bg-light-primary text-primary rounded-circle p-2">
            <i className="fas fa-percent"></i>
          </div>
          <p className="mb-0 ms-2">Login to get up to 20% lower price</p>
        </div>
        <div className="mb-3">
          <p className="fw-bold mb-0">{car.name}</p>
          <div className="fw-medium text-dark">
            {car.kmIncluded} Kms included. After that ${car.kmRate}/Kms
          </div>
          <h2>Rent for one day: ${car.price}</h2>
        </div>
        <div>
          <label className="form-label">Pickup Address</label>
          <input
            type="text"
            className="form-control mb-2"
            value={pickupAddress}
            onChange={(e) => setPickupAddress(e.target.value)}
          />
          <label className="form-label">Drop Address</label>
          <input
            type="text"
            className="form-control mb-4"
            value={dropAddress}
            onChange={(e) => setDropAddress(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleBooking}>
          Proceed For Booking
        </button>
      </div>
    </div>
  );
};

export default Faredetail;
