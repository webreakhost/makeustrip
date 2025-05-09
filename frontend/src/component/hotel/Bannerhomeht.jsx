




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";

const Bannerhomeht = () => {
  const [city, setCity] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(BACKENDURL + `/api/v1/hotels/search`, {
        params: {
          location: city,
          checkInDate,
          checkOutDate,
          guests,
        },
      });
      navigate(`/${city}/hotel-list/`, { state: { hotels: response.data } });
    } catch (error) {
      console.error("Error searching hotels:", error);
      setError("An error occurred while searching for hotels. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="image-cover hero-header bg-white"
        // style={{ background: "url(/assets/img/banner-5.jpg) no-repeat" }}
        // style={{ background: "url(/hotelbanner.png) no-repeat" }}
        style={{
          backgroundImage: "url(/hotelbanner.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "530px", // Default height
          height: "auto", // Auto height for responsiveness
        }}
        data-overlay="5"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-9 text-center mb-4">
              <h1>
                Start Your Trip with <span className="position-relative">Makeustrip</span>
              </h1>
              <p className="fs-5 fw-light">
                Take a break from work stress. Discover, plan trips, and explore beautiful destinations.
              </p>
            </div>
            <div className="col-xl-12 px-5">
              <div className="search-wrap bg-white rounded-3 p-3">
                <div className="row gx-3 align-items-end">
                  <div className="col-md-3">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter city name"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="col-md-2">
                    <label>Check-In</label>
                    <input
                      type="date"
                      className="form-control"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-2">
                    <label>Check-Out</label>
                    <input
                      type="date"
                      className="form-control"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-2">
                    <label>Guests</label>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    />
                  </div>
                  <div className="col-md-3">
                    <button
                      type="button"
                      className="btn btn-primary w-100 mt-4"
                      onClick={handleSearch}
                    >
                      <i className="fa-solid fa-magnifying-glass me-2"></i>Search
                    </button>
                  </div>
                </div>
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannerhomeht;
