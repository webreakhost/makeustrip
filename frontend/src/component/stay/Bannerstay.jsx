



import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const Bannerstay = () => {
    const [guests, setGuests] = useState({ adults: 1, children: 0, rooms: 1 });
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [city, setCity] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook



    // Function to handle guest count changes
    const handleGuestChange = (type, operation) => {
        setGuests(prevGuests => {
            const newCount = operation === 'add' ? prevGuests[type] + 1 : prevGuests[type] - 1;
            if (newCount >= 0) {
                return { ...prevGuests, [type]: newCount };
            }
            return prevGuests;
        });
    };

    // Function to handle the search
    const handleSearch = () => {
        // Check if city is entered
        if (city) {
            // Navigate to the rental page with the city name
            navigate(`/rental/${city}/`);
        }
    };

    return (
        <div>
            <div className="image-cover hero-header bg-white" style={{ background: 'url(tourbanner.webp) no-repeat' }} data-overlay="3">
                <div className="container">
                    {/* Search Form */}
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                            <div className="position-relative text-center mb-5">
                                <h1>Start Your Trip with <span className="position-relative z-4">Makeustrip</span></h1>
                                <p className="fs-5 fw-light">Take a little break from the work stress of everyday. Discover, plan trips and explore beautiful destinations.</p>
                            </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 px-lg-5">
                            <div className="search-wrap with-label bg-white rounded-3 p-3 pt-4">
                                <div className="row gy-3 gx-md-3 gx-sm-2">
                                    <div className="col-xl-8 col-lg-7 col-md-12">
                                        <div className="row gy-3 gx-md-3 gx-sm-2">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                                <div className="form-group hdd-arrow border rounded-1 mb-0">
                                                    <label>Where</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter city name"
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <div className=" form-group hdd-arrow border rounded-1 mb-0">
                                                    <label>Choose Date</label>
                                                    
                                                    <input type='date' className="form-control fw-bold"
                                                    selected={startDate}
                                                    onChange={(dates) => {
                                                        const [start, end] = dates;
                                                        setStartDate(start);
                                                        setEndDate(end);
                                                    }}
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    selectsRange
                                                    placeholderText="Check-In & Check-Out"
                                                    >
                        
                        </input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-md-12">
                                        <div className="row gy-3 gx-md-3 gx-sm-2">
                                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                                <div className="form-group mb-0">
                                                    <label>Guests</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        min="1"
                                                        value={guests}
                                                        onChange={(e) => setGuests(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                                <div className="form-group mb-0">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary full-width rounded-1 fw-medium"
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannerstay;




