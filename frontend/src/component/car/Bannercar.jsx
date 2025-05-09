




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";

const Bannercar = () => {
  const [location, setLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!location || !pickUpDate || !dropOffDate) {
      alert("Please fill in all fields.");
      return;
    }

    if (new Date(pickUpDate) >= new Date(dropOffDate)) {
      alert("Drop-off date must be after pick-up date.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Fetch cars (optional, you can fetch directly in CarSearchResults instead)
      const response = await axios.get(`${BACKENDURL}/api/v1/cars/searchcar`, {
        params: { location, pickUpDate, dropOffDate },
      });

      // Navigate to results page with location as a URL parameter
      navigate(`/cars/${location}`, {
        state: { cars: response.data.data, pickUpDate, dropOffDate },
      });
    } catch (error) {
      console.error("Error searching cars:", error);
      setError("An error occurred while searching for cars. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <div className="image-cover hero-header bg-white" style={{ background: "url(/assets/img/car-bg.jpg) no-repeat" }}> */}
      <div className="image-cover hero-header bg-white" 
      // style={{ background: "url(/cabbanner.png) no-repeat" }}>
      style={{
        backgroundImage: "url(/cabbanner.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "500px", // Default height
        height: "auto", // Auto height for responsiveness
      }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
              <div className="position-relative text-center mb-5">
                <h1>
                  Start Your Trip with <span className="position-relative z-4">Makeustrip</span>
                </h1>
                <p className="fs-5 fw-light">Discover and book the best cars for your next trip.</p>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="search-wrap bg-white rounded-3 p-3">
                <div className="row gy-3">
                  <div className="col-md-4">
                    <label>Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Pick-up Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={pickUpDate}
                      onChange={(e) => setPickUpDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Drop-off Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={dropOffDate}
                      onChange={(e) => setDropOffDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <button
                      type="button"
                      className="btn btn-primary full-width fw-medium"
                      onClick={handleSearch}
                    >
                      <i className="fa-solid fa-magnifying-glass me-2"></i>Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default Bannercar;



