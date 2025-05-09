import React from 'react';

const Hoteldetailban = () => {
    return (
        <div>
            <div className="py-4 bg-primary position-relative">
                <div className="container">
                    {/* Search Form */}
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="search-wrap position-relative my-2 bg-white rounded-2 shadow-wrap p-2">
                                <div className="row align-items-center g-2">
                                    {/* Location and Date Selection */}
                                    <div className="col-xl-8 col-lg-7 col-md-12">
                                        <div className="row g-2">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                                <div className="form-group mb-0">
                                                    <select
                                                        className="goingto form-control fw-bold"
                                                        name="leaving[]"
                                                        multiple="multiple"
                                                    >
                                                        <option value="ny">New York</option>
                                                        <option value="sd">San Diego</option>
                                                        <option value="sj">San Jose</option>
                                                        <option value="ph">Philadelphia</option>
                                                        <option value="nl">Nashville</option>
                                                        <option value="sf">San Francisco</option>
                                                        <option value="hu">Houston</option>
                                                        <option value="sa">San Antonio</option>
                                                    </select>
                                                </div>
                                            </div>
                                            

                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <div className="form-group mb-0">
                                                    <input
                                                        type="date"
                                                        className="form-control fw-bold"
                                                        placeholder="Check-In & Check-Out"
                                                        id="checkinout"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Guests and Search Button */}
                                    <div className="col-xl-4 col-lg-5 col-md-12">
                                        <div className="row align-items-end g-2">
                                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-4">
                                                <div className="form-group mb-0">
                                                    <div className="booking-form__input guests-input mixer-auto">
                                                        <button name="guests-btn" id="guests-input-btn">
                                                            1 Guest
                                                        </button>
                                                        <div className="guests-input__options" id="guests-input-options">
                                                            <div>
                                                                <span className="guests-input__ctrl minus" id="adults-subs-btn">
                                                                    <i className="fa-solid fa-minus"></i>
                                                                </span>
                                                                <span className="guests-input__value">
                                                                    <span id="guests-count-adults">1</span> Adults
                                                                </span>
                                                                <span className="guests-input__ctrl plus" id="adults-add-btn">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="guests-input__ctrl minus" id="children-subs-btn">
                                                                    <i className="fa-solid fa-minus"></i>
                                                                </span>
                                                                <span className="guests-input__value">
                                                                    <span id="guests-count-children">0</span> Children
                                                                </span>
                                                                <span className="guests-input__ctrl plus" id="children-add-btn">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="guests-input__ctrl minus" id="room-subs-btn">
                                                                    <i className="fa-solid fa-minus"></i>
                                                                </span>
                                                                <span className="guests-input__value">
                                                                    <span id="guests-count-room">0</span> Rooms
                                                                </span>
                                                                <span className="guests-input__ctrl plus" id="room-add-btn">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8">
                                                <div className="form-group mb-0">
                                                    <button type="button" className="btn btn-primary full-width fw-medium">
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
                    {/* End of Row */}
                </div>
            </div>
        </div>
    );
};

export default Hoteldetailban;
