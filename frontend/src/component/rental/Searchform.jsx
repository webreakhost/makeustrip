import React from "react";

const SearchForm = () => {
  return (
    <div className="py-5 bg-primary position-relative">
      <div className="container">
        {/* Search Form */}
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="search-wrap position-relative">
              <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                {/* Left Side (Where and Check-in/Check-out) */}
                <div className="col-xl-8 col-lg-7 col-md-12">
                  <div className="row gy-3 gx-md-3 gx-sm-2">
                    {/* Destination Select */}
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                      <div className="form-group hdd-arrow mb-0">
                        <label className="text-light text-uppercase opacity-75">
                          Where
                        </label>
                        <select className="goingto form-control fw-bold">
                          <option value="">Select</option>
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
                    {/* Check-in/Check-out Input */}
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group mb-0">
                        <label className="text-light text-uppercase opacity-75">
                          Checkin & Checkout
                        </label>
                        <input
                          type="text"
                          className="form-control fw-bold"
                          placeholder="Check-In & Check-Out"
                          id="checkinout"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Side (Guests & Rooms and Search Button) */}
                <div className="col-xl-4 col-lg-5 col-md-12">
                  <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                    {/* Guests and Rooms Selector */}
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                      <div className="form-group mb-0">
                        <label className="text-light text-uppercase opacity-75">
                          Guests & Rooms
                        </label>
                        <div className="booking-form__input guests-input mixer-auto">
                          <button name="guests-btn" id="guests-input-btn">
                            1 Guest
                          </button>
                          <div
                            className="guests-input__options"
                            id="guests-input-options"
                          >
                            <div>
                              <span
                                className="guests-input__ctrl minus"
                                id="adults-subs-btn"
                              >
                                <i className="fa-solid fa-minus"></i>
                              </span>
                              <span className="guests-input__value">
                                <span id="guests-count-adults">1</span> Adults
                              </span>
                              <span
                                className="guests-input__ctrl plus"
                                id="adults-add-btn"
                              >
                                <i className="fa-solid fa-plus"></i>
                              </span>
                            </div>
                            <div>
                              <span
                                className="guests-input__ctrl minus"
                                id="children-subs-btn"
                              >
                                <i className="fa-solid fa-minus"></i>
                              </span>
                              <span className="guests-input__value">
                                <span id="guests-count-children">0</span>{" "}
                                Children
                              </span>
                              <span
                                className="guests-input__ctrl plus"
                                id="children-add-btn"
                              >
                                <i className="fa-solid fa-plus"></i>
                              </span>
                            </div>
                            <div>
                              <span
                                className="guests-input__ctrl minus"
                                id="room-subs-btn"
                              >
                                <i className="fa-solid fa-minus"></i>
                              </span>
                              <span className="guests-input__value">
                                <span id="guests-count-room">0</span> Rooms
                              </span>
                              <span
                                className="guests-input__ctrl plus"
                                id="room-add-btn"
                              >
                                <i className="fa-solid fa-plus"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Search Button */}
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                      <div className="form-group mb-0">
                        <button
                          type="button"
                          className="btn btn-whites text-primary full-width fw-medium"
                        >
                          <i className="fa-solid fa-magnifying-glass me-2"></i>
                          Search
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
  );
};

export default SearchForm;
