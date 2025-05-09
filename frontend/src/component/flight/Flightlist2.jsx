


// FlightList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlightCard from './FlightCard';
import { BACKENDURL } from '../../Config/Config';

const FlightList = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch flight data from API
    const fetchFlights = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/flights/all-flights`);
        setFlights(response.data); // Assuming the data is in response.data
      } catch (error) {
        console.error('Error fetching flight data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlights();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-xl-9 col-lg-8 col-md-12">
      <div className="row align-items-center justify-content-between">
        <div className="col-xl-4 col-lg-4 col-md-4">
          <h5 className="fw-bold fs-6 mb-lg-0 mb-3">Showing {flights.length} Search Results</h5>
        </div>
      </div>

      <div className="row align-items-center g-4 mt-2">
        {flights.map((flight) => (
          <div key={flight._id} className="col-xl-12 col-lg-12 col-md-12">
            <FlightCard flight={flight} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;
