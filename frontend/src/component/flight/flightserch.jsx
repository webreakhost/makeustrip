



import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Make sure to install this package
import 'react-datepicker/dist/react-datepicker.css'; // Import styles for the date picker

const FlightSearch = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [journeyDate, setJourneyDate] = useState(null);

  const handleLeavingFromChange = (e) => {
    setLeavingFrom(e.target.value);
  };

  const handleGoingToChange = (e) => {
    setGoingTo(e.target.value);
  };

  const handleJourneyDateChange = (date) => {
    setJourneyDate(date);
  };

  return (
    <div className="py-5 bg-primary position-relative">
      <div className="container">
        {/* Search Form */}
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="search-wrap position-relative">
              <div className="row align-items-end gy-3 gx-md-3 gx-sm-2 ">
                <div className="col-xl-8 col-lg-7 col-md-12">
                  <div className="row gy-3 gx-md-3 gx-sm-2">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                      <div className="form-group hdd-arrow mb-0">
                        <label className="text-light text-uppercase opacity-75">
                          Leaving From
                        </label>
                        <input
                          type="text"
                          className="leaving form-control fw-bold"
                          value={leavingFrom}
                          onChange={handleLeavingFromChange}
                          placeholder="Type city name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group hdd-arrow mb-0">
                        <label className="text-light text-uppercase opacity-75">
                          Going To
                        </label>
                        <input
                          type="text"
                          className="goingto form-control fw-bold"
                          value={goingTo}
                          onChange={handleGoingToChange}
                          placeholder="Type city name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-12">
                  <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                      <div className="form-group mb-0">
                        {/* <label className="text-light text-uppercase opacity-75">
                          Journey Date
                        </label> */}
                        <DatePicker
                          selected={journeyDate}
                          onChange={handleJourneyDateChange}
                          className="form-control fw-bold"
                          placeholderText="Select Journey Date"
                          dateFormat="MMMM d, yyyy"
                          isClearable
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                      <div className="form-group mb-0">
                        <button
                          type="button"
                          className="btn btn-whites text-primary full-width fw-medium "
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
        </div>
        {/* </row> */}
      </div>
    </div>
  );
};

export default FlightSearch;
