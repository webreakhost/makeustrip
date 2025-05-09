import React, { useState, useEffect } from "react";
import FilterBar from "../hotel/FilterBar";
import axios from 'axios';  // Import axios to fetch data

import { BACKENDURL } from "../../Config/Config";
import { useNavigate } from "react-router-dom";
import Roombook from "../room/Roombook";


const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  // Navigate to Room Details page when a user clicks on the card
  const handleCardClick = (e) => {
    e.preventDefault();
    navigate(`/hotel-details/${hotel.name}`);
  };
  
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
      <div className="pop-touritem shadow-sm">
        {/* Hotel Card Link */}
        <a href="room-details" onClick={handleCardClick} className="card rounded-3 m-0 text-decoration-none">
          {/* Hotel Thumbnail */}
          <div className="flight-thumb-wrapper">
            <div className="popFlights-item-overHidden">

<img
              src={BACKENDURL + `/${hotel.thumbnail}`}  // Adjust to your backend URL for image
              className="img-fluid"
              alt={`Image of ${hotel.name}`}
            />
 
            </div>
          </div>

          {/* Hotel Information */}
          <div className="touritem-middle position-relative p-3">
            {/* Hotel Name and Location */}
            <h4 className="city fs-title m-0 fw-bold">{hotel.name}</h4>
            <p className="detail text-secondary mb-2">
              {hotel.location} <span className="separate text-muted">|</span> {hotel.distance} km from center
            </p>

            {/* Cancellation Policy */}
            <div className="touritem-centrio mt-2 d-flex align-items-center">
              <p className="mb-0 text-success fw-bold">Free cancellation</p>
              <span className="label bg-light-success text-success ms-2">
                {hotel.cancellationPolicy}
              </span>
            </div>

            {/* Amenities */}
            <ul className="aments-lists mt-2 list-unstyled d-flex flex-wrap">
              {hotel.amenities.slice(0, 3).map((facility, index) => (
                <li key={index} className="text-dark d-inline-flex align-items-center me-3">
                  <i className="fa-solid fa-check text-success me-1"></i> {facility}
                </li>
              ))}
            </ul>

            {/* Price, Discount, and Rating */}
            <div className="trsms-foots mt-3 d-flex align-items-end justify-content-between">
              {/* Price Section */}
              <div>
                <span className="label bg-success text-light mb-1 px-2 py-1 rounded">
                  {hotel.discount}% Off
                </span>
                <div className="text-dark fw-bold fs-5">US${hotel.price}</div>
                <div className="text-muted text-decoration-line-through small">
                  US${hotel.originalPrice}
                </div>
                <div className="text-muted small">Per Night</div>
              </div>

              {/* Rating Section */}
              <div className="d-flex flex-column align-items-end">
                <span className="text-success fw-medium">Exceptional</span>
                <span className="text-muted small">{hotel.reviews} reviews</span>
                <div
                  className="square--40 bg-primary text-light d-flex justify-content-center align-items-center rounded"
                  style={{ width: "40px", height: "40px" }}
                >
                  {hotel.rating}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};




const Hoteldethome = () => {
    const [hotels, setHotels] = useState([]);
  
    useEffect(() => {
      axios
        .get(BACKENDURL + "/api/v1/hotels/hotelss")
        .then((response) => {
          setHotels(response.data.slice(0, 6)); // Limiting results to 6
        })
        .catch((error) => {
          console.error("Error fetching hotel data:", error);
        });
    }, []);
  
    return (
      <div>
        <section className="">
          <div className="container">
            <div className="row justify-content-between">
              <div className='text-center text-3xl font-semibold -mt-4'>
                <h4 className="text-red-700">Book Hotel With Makeustrip</h4>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <h5 className="fw-bold fs-6 mb-3 -mt-3">
                  Showing {hotels.length} Search Results
                </h5>
              </div>
            </div>
            <div className="row g-4">
              {hotels.map((hotel) => (
                <HotelCard key={hotel._id} hotel={hotel} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Hoteldethome;
  



