


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { BACKENDURL } from "../../Config/Config";

// const HotelCard = ({ hotel }) => {
//   const navigate = useNavigate();

//   const handleCardClick = (e, name) => {
//     e.preventDefault();
//     navigate(`/hotel-details/${name}`);
//   };

//   return (
//     <div className="col-xl-12 col-lg-12 col-12">
//       <div className="card list-layout-block rounded-3 p-3 shadow-lg">
//         <div className="row">
//           {/* Hotel Image */}
//           <div className="col-xl-4 col-lg-3 col-md">
//             <div className="cardImage__caps rounded-2 overflow-hidden h-100">
//               <img
//                 className="img-fluid h-100 object-fit-cover"
//                 src={`${BACKENDURL}/${hotel.thumbnail}`}
//                 alt={hotel.name}
//               />
//             </div>
//           </div>

//           {/* Hotel Details */}
//           <div className="col-xl col-lg col-md">
//             <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
//               <h4 className="fs-5 fw-bold mb-1">{hotel.name}</h4>

//               <ul className="row gx-2 p-0 excortio">
//                 <li className="col-auto">
//                   <p className="text-muted-2 text-md">{hotel.location || "Unknown Location"}</p>
//                 </li>
//                 <li className="col-auto"><p className="text-muted-2 text-md fw-bold">.</p></li>
//                 <li className="col-auto">
//                   <p className="text-muted-2 text-md">
//                     {hotel.distance ? `${hotel.distance} km from Airport` : "Distance Unavailable"}
//                   </p>
//                 </li>
//                 <li className="col-auto"><p className="text-muted-2 text-md fw-bold">.</p></li>
//                 <li className="col-auto">
//                   <p className="text-muted-2 text-md">
//                     <a href="#" className="text-primary">Show on Map</a>
//                   </p>
//                 </li>
//               </ul>

//               <div className="detail ellipsis-container mt-3">
//                 {Array.isArray(hotel.amenities) && hotel.amenities.length > 0 ? (
//                   hotel.amenities.slice(0, 5).map((amenity, index) => (
//                     <span key={index} className="ellipsis">{amenity}</span>
//                   ))
//                 ) : (
//                   <span className="ellipsis">No Amenities Listed</span>
//                 )}
//               </div>

//               <div className="position-relative mt-3">
//                 <div className="fw-medium text-dark">{hotel.roomType || "Standard Room"}</div>
//                 <div className="text-md text-muted">
//                   Last booked {hotel.lastBooked || "N/A"} minutes ago
//                 </div>
//               </div>

//               <div className="position-relative mt-4">
//                 <div className="d-block position-relative">
//                   <span className="label bg-light-success text-success">
//                     {hotel.cancellationPolicy || "Free Cancellation Available"}
//                   </span>
//                 </div>
//                 <div className="text-md">
//                   <p className="m-0">
//                     <a href="#" className="text-primary">Login</a> & get additional ₹500 Off Using 
//                     <span className="text-primary"> Visa Card</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Pricing and Booking */}
//           <div className="col-xl-auto col-lg-auto col-md-auto text-right d-flex align-items-start align-items-md-end flex-column">
//             <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
//               <div className="col-auto text-start text-md-end">
//                 <div className="text-md text-dark fw-medium">Exceptional</div>
//                 <div className="text-md text-muted-2">{hotel.reviews || 0} reviews</div>
//               </div>
//               <div className="col-auto">
//                 <div className="square--40 rounded-2 bg-primary text-light">
//                   {hotel.rating || "N/A"}
//                 </div>
//               </div>
//             </div>

//             <div className="position-relative mt-auto full-width">
//               {hotel.discount && (
//                 <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
//                   <span className="label bg-success text-light">{hotel.discount}% Off</span>
//                 </div>
//               )}

//               <div className="d-flex align-items-center justify-content-start justify-content-md-end">
//                 {hotel.originalPrice && (
//                   <div className="text-muted-2 fw-medium text-decoration-line-through me-2">
//                     ₹{hotel.originalPrice}
//                   </div>
//                 )}
//                 <div className="text-dark fw-bold fs-3">₹{hotel.price || "N/A"}</div>
//               </div>

//               <div className="d-flex align-items-start align-items-md-end flex-column mb-2">
//                 <div className="text-muted-2 text-sm">+₹{hotel.taxes || 0} taxes & Fees</div>
//                 <div className="text-muted-2 text-sm">For {hotel.nights || 1} Nights</div>
//               </div>

//               <div className="d-flex align-items-start align-items-md-end flex-column text-start text-md-end">
//                 <button
//                   onClick={(e) => handleCardClick(e, hotel.name)}
//                   className="btn btn-md btn-primary full-width fw-medium px-lg-4"
//                 >
//                   See Availability <i className="fa-solid fa-arrow-trend-up ms-2"></i>
//                 </button>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;



import React from "react";
import { useNavigate } from "react-router-dom";
import { BACKENDURL } from "../../Config/Config";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  // Function to format the URL
  const formatHotelUrl = (name) => {
    const formattedName = name.trim().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
    const randomString = Math.random().toString(36).substring(2, 8);
    return `/hotel-details/${formattedName}-${randomString}/`;
  };

 

  const handleCardClick = (e) => {
    e.preventDefault();
    const formattedUrl = formatHotelUrl(hotel.name);
    navigate(formattedUrl);
  };

  return (
    <div className="col-xl-12 col-lg-12 col-12">
      <div className="card list-layout-block rounded-3 p-3 shadow-lg">
        {/* <div className="row">
          <div className="col-xl-4 col-lg-3 col-md">
            <div className="cardImage__caps rounded-2 overflow-hidden h-100">
              <img
                className="img-fluid h-100 object-fit-cover"
                src={`${BACKENDURL}/${hotel.thumbnail}`}
                alt={hotel.name}
              />
            </div>
          </div>

          <div className="col-xl col-lg col-md">
            <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
              <h4 className="fs-5 fw-bold mb-1">{hotel.name}</h4>

              <ul className="row gx-2 p-0 excortio">
                <li className="col-auto">
                  <p className="text-muted-2 text-md">{hotel.location || "Unknown Location"}</p>
                </li>
                <li className="col-auto"><p className="text-muted-2 text-md fw-bold">.</p></li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md">
                    {hotel.distance ? `${hotel.distance} km from Airport` : "Distance Unavailable"}
                  </p>
                </li>
                <li className="col-auto"><p className="text-muted-2 text-md fw-bold">.</p></li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md">
                    <a href="#" className="text-primary">Show on Map</a>
                  </p>
                </li>
              </ul>

              <div className="detail ellipsis-container mt-3">
                {Array.isArray(hotel.amenities) && hotel.amenities.length > 0 ? (
                  hotel.amenities.slice(0, 5).map((amenity, index) => (
                    <span key={index} className="ellipsis">{amenity}</span>
                  ))
                ) : (
                  <span className="ellipsis">No Amenities Listed</span>
                )}
              </div>

              <div className="position-relative mt-3">
                <div className="fw-medium text-dark">{hotel.roomType || "Standard Room"}</div>
                <div className="text-md text-muted">
                  Last booked {hotel.lastBooked || "N/A"} minutes ago
                </div>
              </div>

              <button
                onClick={handleCardClick}
                className="btn btn-md btn-primary full-width fw-medium px-lg-4 mt-3"
              >
                See Availability <i className="fa-solid fa-arrow-trend-up ms-2"></i>
              </button>
            </div>
          </div>

          <div className="col-xl-auto col-lg-auto col-md-auto text-right d-flex align-items-start align-items-md-end flex-column">
            <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
              <div className="col-auto text-start text-md-end">
                <div className="text-md text-dark fw-medium">Exceptional</div>
                <div className="text-md text-muted-2">{hotel.reviews || 0} reviews</div>
              </div>
              <div className="col-auto">
                <div className="square--40 rounded-2 bg-primary text-light">
                  {hotel.rating || "N/A"}
                </div>
              </div>
            </div>

            <div className="position-relative mt-auto full-width">
              {hotel.discount && (
                <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                  <span className="label bg-success text-light">{hotel.discount}% Off</span>
                </div>
              )}

              <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                {hotel.originalPrice && (
                  <div className="text-muted-2 fw-medium text-decoration-line-through me-2">
                    ₹{hotel.originalPrice}
                  </div>
                )}
                <div className="text-dark fw-bold fs-3">₹{hotel.price || "N/A"}</div>
              </div>

              <div className="d-flex align-items-start align-items-md-end flex-column mb-2">
                <div className="text-muted-2 text-sm">+₹{hotel.taxes || 0} taxes & Fees</div>
                <div className="text-muted-2 text-sm">For {hotel.nights || 1} Nights</div>
              </div>
            </div>
          </div>
        </div> */}
          <div className="row">
          {/* Hotel Image */}
          <div className="col-xl-4 col-lg-3 col-md">
            <div className="cardImage__caps rounded-2 overflow-hidden h-100">
              <img
                className="img-fluid h-100 object-fit-cover"
                src={`${BACKENDURL}/${hotel.thumbnail}`}
                alt={hotel.name}
              />
            </div>
          </div>

          {/* Hotel Details */}
          <div className="col-xl col-lg col-md">
            <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
              <h4 className="fs-5 fw-bold mb-1">{hotel.name}</h4>

              <ul className="row gx-2 p-0 excortio">
                <li className="col-auto">
                  <p className="text-muted-2 text-md">{hotel.location || "Unknown Location"}</p>
                </li>
                <li className="col-auto"><p className="text-muted-2 text-md fw-bold">.</p></li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md">
                    {hotel.distance ? `${hotel.distance} km from Airport` : "Distance Unavailable"}
                  </p>
                </li>
                <li className="col-auto"><p className="text-muted-2 text-md fw-bold">.</p></li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md">
                    <a href="#" className="text-primary">Show on Map</a>
                  </p>
                </li>
              </ul>

              <div className="detail ellipsis-container mt-3">
                {Array.isArray(hotel.amenities) && hotel.amenities.length > 0 ? (
                  hotel.amenities.slice(0, 5).map((amenity, index) => (
                    <span key={index} className="ellipsis">{amenity}</span>
                  ))
                ) : (
                  <span className="ellipsis">No Amenities Listed</span>
                )}
              </div>

              <div className="position-relative mt-3">
                <div className="fw-medium text-dark">{hotel.roomType || "Standard Room"}</div>
                <div className="text-md text-muted">
                  Last booked {hotel.lastBooked || "N/A"} minutes ago
                </div>
              </div>

              <div className="position-relative mt-4">
                <div className="d-block position-relative">
                  <span className="label bg-light-success text-success">
                    {hotel.cancellationPolicy || "Free Cancellation Available"}
                  </span>
                </div>
                <div className="text-md">
                  <p className="m-0">
                    <a href="#" className="text-primary">Login</a> & get additional ₹500 Off Using 
                    <span className="text-primary"> Visa Card</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing and Booking */}
          <div className="col-xl-auto col-lg-auto col-md-auto text-right d-flex align-items-start align-items-md-end flex-column">
            <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
              <div className="col-auto text-start text-md-end">
                <div className="text-md text-dark fw-medium">Exceptional</div>
                <div className="text-md text-muted-2">{hotel.reviews || 0} reviews</div>
              </div>
              <div className="col-auto">
                <div className="square--40 rounded-2 bg-primary text-light">
                  {hotel.rating || "N/A"}
                </div>
              </div>
            </div>

            <div className="position-relative mt-auto full-width">
              {hotel.discount && (
                <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                  <span className="label bg-success text-light">{hotel.discount}% Off</span>
                </div>
              )}

              <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                {hotel.originalPrice && (
                  <div className="text-muted-2 fw-medium text-decoration-line-through me-2">
                    ₹{hotel.originalPrice}
                  </div>
                )}
                <div className="text-dark fw-bold fs-3">₹{hotel.price || "N/A"}</div>
              </div>

              <div className="d-flex align-items-start align-items-md-end flex-column mb-2">
                <div className="text-muted-2 text-sm">+₹{hotel.taxes || 0} taxes & Fees</div>
                <div className="text-muted-2 text-sm">For {hotel.nights || 1} Nights</div>
              </div>

              <div className="d-flex align-items-start align-items-md-end flex-column text-start text-md-end">
                <button
                  onClick={(e) => handleCardClick(e, hotel.name)}
                  className="btn btn-md btn-primary full-width fw-medium px-lg-4"
                >
                  See Availability <i className="fa-solid fa-arrow-trend-up ms-2"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HotelCard;
