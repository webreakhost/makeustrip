import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import CarList2 from "./CarList2";
import { BACKENDURL } from "../../Config/Config";

const CarSearchResults = () => {
  const { location } = useParams();
  const { state } = useLocation();
  const [cars, setCars] = useState(state?.cars || []);
  const [loading, setLoading] = useState(!state?.cars);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!state?.cars) {
      setLoading(true);
      axios
        .get(`${BACKENDURL}/api/v1/cars/searchcar`, { params: { location } })
        .then((response) => {
          setCars(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching cars:", error);
          setError("Failed to load cars. Please try again.");
        })
        .finally(() => setLoading(false));
    }
  }, [location, state]);

  return (
    <div className="container  bg-gray-100">
      {/* <h2 className="text-center mb-4">Cars Available in {location}</h2> */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-6 border-b-1 border-gray-300 pb-2">
  Cars Available in <span className="text-blue-600  mt-5">{location}</span>
</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {cars.length > 0 ? <CarList2 cars={cars} /> : !loading && <p>No cars found.</p>}
    </div>
  );
};

export default CarSearchResults;
