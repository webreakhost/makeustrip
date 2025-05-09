



import React from "react";
import { useNavigate } from "react-router-dom";

const Successfull = () => {
  const navigate = useNavigate();

  const goToBookingDetails = () => {
    navigate("/my-bookings"); // Replace with your actual route
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-700 flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-10 max-w-md">
        <div className="text-green-500 text-6xl mb-6">
          <i className="fas fa-check-circle animate-bounce"></i>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your payment. Your booking is confirmed, and you can view the details now.
        </p>
        <button
          onClick={goToBookingDetails}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-transform transform hover:scale-105 font-semibold"
        >
          View Booking Details
        </button>
      </div>
      <div className="mt-6">
        <img
          src="https://cdn.dribbble.com/users/1787323/screenshots/15743245/media/c50178d301f0509475b3b121d435f6a0.gif"
          alt="Payment Success Animation"
          className="rounded-lg shadow-lg max-w-sm"
        />
      </div>
    </div>
  );
};

export default Successfull;

