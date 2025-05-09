



// import React from 'react';

// const Herobannerhtl = () => {
//   return (
//     <div>
//       <div className="py-5 bg-primary position-relative">
//         <div className="container">
//           {/* Search Form */}
//           <div className="row justify-content-center align-items-center">
//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//               <div className="search-wrap position-relative">
//                 <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
//                   {/* Location Selection */}
//                   <div className="col-xl-8 col-lg-7 col-md-12">
//                     <div className="row gy-3 gx-md-3 gx-sm-2">
//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
//                         <div className="form-group hdd-arrow mb-0">
//                           <label className="text-light text-uppercase opacity-75">Where</label>
//                           <select className="goingto form-control fw-bold">
//                             <option value="">Select</option>
//                             <option value="ny">New York</option>
//                             <option value="sd">San Diego</option>
//                             <option value="sj">San Jose</option>
//                             <option value="ph">Philadelphia</option>
//                             <option value="nl">Nashville</option>
//                             <option value="sf">San Francisco</option>
//                             <option value="hu">Houston</option>
//                             <option value="sa">San Antonio</option>
//                           </select>
//                         </div>
//                       </div>
//                       {/* Date Picker */}
//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                         <div className="form-group mb-0">
//                           <label className="text-light text-uppercase opacity-75">Checkin & Checkout</label>
//                           <input
//                             type="text"
//                             className="form-control fw-bold"
//                             placeholder="Check-In & Check-Out"
//                             id="checkinout"
//                             readOnly
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Guests and Rooms Selection */}
//                   <div className="col-xl-4 col-lg-5 col-md-12">
//                     <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
//                       <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
//                         <div className="form-group mb-0">
//                           <label className="text-light text-uppercase opacity-75">Guests & Rooms</label>
//                           <div className="booking-form__input guests-input mixer-auto">
//                             <button name="guests-btn" id="guests-input-btn">
//                               1 Guest
//                             </button>
//                             <div className="guests-input__options" id="guests-input-options">
//                               <div>
//                                 <span className="guests-input__ctrl minus" id="adults-subs-btn">
//                                   <i className="fa-solid fa-minus"></i>
//                                 </span>
//                                 <span className="guests-input__value">
//                                   <span id="guests-count-adults">1</span> Adults
//                                 </span>
//                                 <span className="guests-input__ctrl plus" id="adults-add-btn">
//                                   <i className="fa-solid fa-plus"></i>
//                                 </span>
//                               </div>
//                               <div>
//                                 <span className="guests-input__ctrl minus" id="children-subs-btn">
//                                   <i className="fa-solid fa-minus"></i>
//                                 </span>
//                                 <span className="guests-input__value">
//                                   <span id="guests-count-children">0</span> Children
//                                 </span>
//                                 <span className="guests-input__ctrl plus" id="children-add-btn">
//                                   <i className="fa-solid fa-plus"></i>
//                                 </span>
//                               </div>
//                               <div>
//                                 <span className="guests-input__ctrl minus" id="room-subs-btn">
//                                   <i className="fa-solid fa-minus"></i>
//                                 </span>
//                                 <span className="guests-input__value">
//                                   <span id="guests-count-room">0</span> Rooms
//                                 </span>
//                                 <span className="guests-input__ctrl plus" id="room-add-btn">
//                                   <i className="fa-solid fa-plus"></i>
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       {/* Search Button */}
//                       <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
//                         <div className="form-group mb-0">
//                           <button
//                             type="button"
//                             className="btn btn-whites text-primary full-width fw-medium"
//                           >
//                             <i className="fa-solid fa-magnifying-glass me-2"></i>
//                             Search
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End Row */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Herobannerhtl;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";

const Herobannerhtl = () => {
  const [city, setCity] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(BACKENDURL + `/api/v1/hotels/search`, {
        params: {
          location: city,
          checkInDate,
          checkOutDate,
          guests,
          rooms,
        },
      });
      navigate(`/${city}/hotel-list/`, { state: { hotels: response.data } });
    } catch (error) {
      console.error("Error searching hotels:", error);
      setError("An error occurred while searching for hotels. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="py-5 bg-primary position-relative">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="search-wrap position-relative">
                <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                  {/* Location Selection */}
                  <div className="col-xl-8 col-lg-7 col-md-12">
                    <div className="row gy-3 gx-md-3 gx-sm-2">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                        <div className="form-group hdd-arrow mb-0">
                          <label className="text-light text-uppercase opacity-75">Where</label>
                          <input
                            type="text"
                            className="goingto form-control fw-bold"
                            placeholder="Enter City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* Date Picker */}
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group mb-0">
                          <label className="text-light text-uppercase opacity-75">Checkin & Checkout</label>
                          <input
                            type="date"
                            className="form-control fw-bold mb-2"
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                          />
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Guests and Rooms Selection */}
                  <div className="col-xl-4 col-lg-5 col-md-12 mb-2">
                    <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 ">
                        <div className="form-group mb-0">
                          <label className="text-light text-uppercase opacity-75">Guests & Rooms</label>
                          <div className="d-flex gap-2">
                            <input
                              type="number"
                              className="form-control fw-bold"
                              min="1"
                              value={guests}
                              onChange={(e) => setGuests(e.target.value)}
                              placeholder="Guests"
                            />
                           
                          </div>
                        </div>
                      </div>
                      {/* Search Button */}
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="form-group mb-0">
                          <button
                            type="button"
                            className="btn btn-whites text-primary full-width fw-medium"
                            onClick={handleSearch}
                            disabled={loading}
                          >
                            <i className="fa-solid fa-magnifying-glass me-2"></i>
                            {loading ? "Searching..." : "Search"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobannerhtl;
