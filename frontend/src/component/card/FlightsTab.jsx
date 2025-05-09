


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlightsTab = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
  });

  const navigate = useNavigate();

  const navToSearchPage = () => {
    const { from, to, departDate, returnDate } = formData;
    navigate(`/flight?from=${from}&to=${to}&departDate=${departDate}&returnDate=${returnDate}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="row gx-3 gy-3 align-items-center">
      {/* From City */}
      <div className="col-md-2 col-12">
        <div className="form-group">
          <label htmlFor="from" className="form-label fw-bold text-lg">From City</label>
          <input
            type="text"
            name="from"
            className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
            value={formData.from}
            onChange={handleInputChange}
            placeholder="Enter city name"
          />
        </div>
      </div>

      {/* To City */}
      <div className="col-md-2 col-12">
        <div className="form-group">
          <label htmlFor="to" className="form-label fw-bold text-lg">To City</label>
          <input
            type="text"
            name="to"
            className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
            value={formData.to}
            onChange={handleInputChange}
            placeholder="Enter city name"
          />
        </div>
      </div>

      {/* Departure Date */}
      <div className="col-md-2 col-12">
        <div className="form-group">
          <label htmlFor="departDate" className="form-label fw-bold text-lg">Departure Date</label>
          <input
            type="date"
            name="departDate"
            className="form-control fw-small bg-gray-50 text-lg rounded-lg"
            value={formData.departDate}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Return Date */}
      <div className="col-md-2 col-12">
        <div className="form-group">
          <label htmlFor="returnDate" className="form-label fw-bold text-lg">Return Date</label>
          <input
            type="date"
            name="returnDate"
            className="form-control fw-small bg-gray-50 text-lg rounded-lg"
            value={formData.returnDate}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Occupants */}
      <div className="col-md-2 col-12">
        <div className="form-group">
          <label htmlFor="occupants" className="form-label fw-bold text-lg">Occupants</label>
          <select className="form-control fw-bold bg-gray-50 text-lg rounded-lg">
            <option value="">Select</option>
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
            <option value="5">5 Adults</option>
            <option value="6">6 Adults</option>
            <option value="7">7 Adults</option>
            <option value="8">8 Adults</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="col-md-2 col-12 text-md-end text-center">
        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary fw-medium px-4 w-100"
            onClick={navToSearchPage}
          >
            <i className="fa-solid fa-magnifying-glass fs-5"></i> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightsTab;
