





import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { BACKENDURL } from "../../Config/Config";
import { useNavigate } from "react-router-dom";
import Carcard2 from "./CarCard2";
import CarList2 from "./CarList2";

const SearchedCityCar = () => {
  const location = useLocation();
  const { cars, cityName } = location.state || { cars: [], cityName: "Unknown" };


  const navigate = useNavigate(); // Initialize useNavigate

  const handleAvailabilityClick = () => {
    // Redirect to the Car Booking page with car details
    navigate("/carbook", { state: { cars } });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Cars Available in {cityName}</h2>
      {/* {cars.length > 0 ? (
        <div className="row gy-4">
          {cars.map((car) => (
            <div key={car.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="card shadow-sm">
                <img
                  src={car.image || "/assets/img/default-car.jpg"}
                  alt={car.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{car.name}</h5>
                  <p className="card-text">{car.description}</p>
                  <ul className="list-unstyled">
                    <li>
                      <strong>Price:</strong> ${car.price} / day
                    </li>
                    <li>
                      <strong>Seats:</strong> {car.seats}
                    </li>
                    <li>
                      <strong>Fuel Type:</strong> {car.fuelType}
                    </li>
                  </ul>
                  <button onClick={handleAvailabilityClick} className="btn btn-primary w-100 mt-3">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No cars available in {cityName}. Try another search.</p>
      )} */}
      {/* <Carcard2/> */}
      <CarList2/>

    </div>
  );
};

SearchedCityCar.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired,
      seats: PropTypes.number.isRequired,
      fuelType: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ),
  cityName: PropTypes.string,
};

export default SearchedCityCar;
