import React from "react";

const RentalBookings = ({ rentalBookings }) => {
  if (!rentalBookings.length) {
    return <p>No rental bookings available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
      {rentalBookings.map((rental) => (
        <div key={rental._id} className="card border mb-4">
          <div className="card-header p-4 border-b flex justify-between">
            <div>
              <h6 className="text-lg font-bold">{rental.rentalName}</h6>
              <p className="text-sm text-muted">Booking ID: {rental._id}</p>
            </div>
            <div>
              {rental.bookingStatus === "cancelled" ? (
                <span className="text-red-500 font-semibold">Cancelled</span>
              ) : (
                <button className="btn btn-sm bg-red-500 text-white">Cancel Booking</button>
              )}
            </div>
          </div>
          <div className="card-body p-4">
            <p>Rental Type: {rental.rentalType}</p>
            <p>Pickup Date: {new Date(rental.pickupDate).toLocaleDateString()}</p>
            <p>Return Date: {new Date(rental.returnDate).toLocaleDateString()}</p>
            <p>Price: {rental.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RentalBookings;
