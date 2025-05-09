




import React, { useEffect, useState } from "react";
// import CarCard from "./CarCard";
import Carcard1 from "./Carcard1";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";

const Carlist = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cars from backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get( BACKENDURL + "/api/v1/cars/getallcars"); // Adjust API endpoint
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="col-xl-9 col-lg-8 col-md-12">
      <div className="row align-items-center justify-content-between">
        <div className="col-xl-4 col-lg-4 col-md-4">
          <h5 className="fw-bold fs-6 mb-lg-0 mb-3">
            Showing {cars.length} Search Results
          </h5>
        </div>
      </div>

      <div className="row align-items-center g-4 mt-2">
        {loading ? (
          <p>Loading...</p>
        ) : (
          cars.map((car) => <Carcard1 key={car._id} car={car} />)
        )}
      </div>
    </div>
  );
};

export default Carlist;
