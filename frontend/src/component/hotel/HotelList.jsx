




import React from "react";
import { BACKENDURL } from "../../Config/Config";
import { useNavigate } from "react-router-dom";

const HotelList = ({ hotel = [] }) => {
  const navigate = useNavigate();

  // Navigate to Room Details page
  const handleCardClick = (e, hotelId) => {
    e.preventDefault();
    navigate(`/hotel-details/${hotelId}`);
  };

  return (
    <div className="hotel-list container mt-5">
      <h2 className="text-center mb-4">Available Hotels</h2>
      <div className="row">
        {hotel.length > 0 ? (
          hotel.map((hotel) => (
            <div key={hotel._id} className="col-md-4 col-sm-6 mb-4">
              <div
                onClick={(e) => handleCardClick(e, hotel._id)}
                className="card h-100 shadow cursor-pointer"
              >
                <img
                  src={BACKENDURL + `/${hotel.thumbnail}`}
                  className="img-fluid"
                  alt={`Image of ${hotel.name}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{hotel.name || "Hotel Name"}</h5>
                  <p className="card-text">
                    <strong>Location:</strong> {hotel.location || "Unknown"}
                  </p>
                  <p className="card-text">
                    <strong>Distance:</strong> {hotel.distance || "N/A"} km
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong> ₹{hotel.price || "N/A"}{" "}
                    {hotel.originalPrice && (
                      <span className="text-muted text-decoration-line-through">
                        ₹{hotel.originalPrice}
                      </span>
                    )}
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> {hotel.rating || "Not Rated"} ★
                  </p>
                  <p className="card-text">
                    <strong>Amenities:</strong>{" "}
                    {hotel.amenities?.join(", ") || "Not specified"}
                  </p>
                  <p className="card-text">
                    <strong>Cancellation Policy:</strong>{" "}
                    {hotel.cancellationPolicy || "No policy specified"}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No hotels found. Please refine your search.</p>
        )}
      </div>
    </div>
  );
};

export default HotelList;



