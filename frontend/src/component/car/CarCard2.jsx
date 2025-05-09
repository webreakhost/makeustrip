




import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { BACKENDURL } from "../../Config/Config";

const Carcard2 = ({ car }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAvailabilityClick = () => {
    // Redirect to the Car Booking page with car details
    navigate("/carbook", { state: { car } });
  };

  return (
    <div>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card list-layout-block rounded-3 p-3">
          <div className="row">
            {/* Car Image */}
            <div className="col-xl-4 col-lg-3 col-md">
              <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                <img
                  src={BACKENDURL + `/${car.image}`} // Adjust to your backend URL for image
                  className="img-fluid"
                  alt={`Image of ${car.image}`}
                />
              </div>
            </div>

            {/* Car Details */}
            <div className="col-xl col-lg col-md">
              <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                <h4 className="fs-5 fw-bold mb-1">{car.name}</h4>
                <h3 className="fs-5 fw-bold mb-1">{car.location}</h3>
                <ul className="row g-2 p-0">
                  <li className="col-auto">
                    <p className="text-muted-2 text-md">{car.type}</p>
                  </li>
                  <li className="col-auto">
                    <p className="text-muted-2 text-md fw-bold">.</p>
                  </li>
                  <li className="col-auto">
                    <p className="text-muted-2 text-md">{car.ac}</p>
                  </li>
                  <li className="col-auto">
                    <p className="text-muted-2 text-md fw-bold">.</p>
                  </li>
                  <li className="col-auto">
                    <p className="text-muted-2 text-md">{car.seats} Seats</p>
                  </li>
                </ul>
                <div className="detail ellipsis-container mt-3">
                  <span className="ellipsis">{car.transmission}</span>
                  <span className="ellipsis">{car.luggage}</span>
                  <span className="ellipsis">{car.fuel}</span>
                </div>
                <div className="position-relative mt-3">
                  <div className="fw-medium text-dark">
                    {car.kmIncluded}Kms included. After that ${car.kmRate}/Kms
                  </div>
                  <div className="text-md text-muted">
                    {car.cancellation || "Non-refundable"}
                  </div>
                </div>
              </div>
            </div>

            {/* Price and Availability */}
            <div className="col-xl-auto col-lg-auto col-md-auto text-right d-flex align-items-start flex-column">
              <div className="row align-items-center mb-3">
                <div className="col-auto text-start text-md-end">
                  <div className="text-md text-dark fw-medium">Exceptional</div>
                  <div className="text-md text-muted-2">
                    {car.reviews} reviews
                  </div>
                </div>
                <div className="col-auto">
                  <div className="square--40 rounded-2 bg-primary text-light">
                    {car.rating || "0.0"}
                  </div>
                </div>
              </div>

              <div className="mt-auto full-width">
                {car.discount && (
                  <div className="d-flex justify-content-end mb-1">
                    <span className="label bg-success text-light">
                      {car.discount}
                    </span>
                  </div>
                )}
                <div className="d-flex align-items-center justify-content-end">
                  {car.originalPrice && (
                    <div className="text-muted-2 fw-medium text-decoration-line-through me-2">
                      US${car.originalPrice}
                    </div>
                  )}
                  <div className="text-dark fw-bold fs-3">${car.price}</div>
                </div>
                <div className="text-muted-2 text-sm">+$22 taxes & Fees</div>
                <div className="mt-2">
                  <button
                    onClick={handleAvailabilityClick}
                    className="btn btn-md btn-primary full-width fw-medium"
                  >
                    See Availability<i className="fa-solid fa-arrow-trend-up ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carcard2;
