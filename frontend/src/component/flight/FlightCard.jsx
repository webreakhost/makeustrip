

// import React from 'react';

// const FlightCard = ({ flight }) => {
//   return (
//     <div className="flights-list-item bg-white rounded-3 p-3">
//       <div className="row gy-4 align-items-center justify-content-between">
//         <div className="col">
//           <div className="row">
//             <div className="col-xl-12 col-lg-12 col-md-12">
//               <div className="d-flex align-items-center mb-2">
//                 <span className="label bg-light-primary text-primary me-2">Departure</span>
//                 <span className="text-muted text-sm">{flight.departDate}</span>
//               </div>
//             </div>
//             <div className="col-xl-12 col-lg-12 col-md-12">
//               <div className="row gx-lg-5 gx-3 gy-4 align-items-center">
//                 <div className="col-sm-auto">
//                   <div className="d-flex align-items-center justify-content-start">
//                     <div className="d-start fl-pic">
//                       <img className="img-fluid" src={flight.airline.airlineLogo} width="45" alt={flight.airline.airlineName} />
//                     </div>
//                     <div className="d-end fl-title ps-2">
//                       <div className="text-dark fw-medium">{flight.airlineName}</div>
//                       <div className="text-sm text-muted">First Class</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col">
//                   <div className="row gx-3 align-items-center">
//                     <div className="col-auto">
//                       <div className="text-dark fw-bold">{flight.departTime}</div>
//                       <div className="text-muted text-sm fw-medium">{flight.from}</div>
//                     </div>
//                     <div className="col text-center">
//                       <div className="flightLine departure">
//                         <div></div>
//                         <div></div>
//                       </div>
//                       <div className="text-muted text-sm fw-medium mt-3">Direct</div>
//                     </div>
//                     <div className="col-auto">
//                       <div className="text-dark fw-bold">{flight.arriveTime}</div>
//                       <div className="text-muted text-sm fw-medium">{flight.to}</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-auto">
//                   <div className="text-dark fw-medium">4H 40M</div>
//                   <div className="text-muted text-sm fw-medium">2 Stop</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-auto">
//           <div className="d-flex items-center h-100">
//             <div className="text-start text-md-end">
//               <div className="text-dark fs-3 fw-bold lh-base">₹{flight.price}</div>
//               <div className="text-muted text-sm mb-2">Refundable</div>
//             </div>
//             <div className="flight-button-wrap">
//               <button className="btn btn-primary btn-md fw-medium full-width">
//                 Select Flight<i className="fa-solid fa-arrow-trend-up ms-2"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default FlightCard;




import React from 'react';
import { useNavigate } from 'react-router-dom';

const FlightCard = ({ flight }) => {
  const navigate = useNavigate();

  const handleSelectFlight = () => {
    navigate(`/book/${flight._id}`);
  };

  return (
    <div className="flights-list-item bg-white rounded-3 p-3">
      <div className="row gy-4 align-items-center justify-content-between">
        <div className="col">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="d-flex align-items-center mb-2">
                <span className="label bg-light-primary text-primary me-2">Departure</span>
                <span className="text-muted text-sm">{flight.departDate}</span>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="row gx-lg-5 gx-3 gy-4 align-items-center">
                <div className="col-sm-auto">
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="d-start fl-pic">
                      <img
                        className="img-fluid"
                        src={flight.airline.airlineLogo}
                        width="45"
                        alt={flight.airline.airlineName}
                      />
                    </div>
                    <div className="d-end fl-title ps-2">
                      <div className="text-dark fw-medium">{flight.airlineName}</div>
                      <div className="text-sm text-muted">First Class</div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row gx-3 align-items-center">
                    <div className="col-auto">
                      <div className="text-dark fw-bold">{flight.departTime}</div>
                      <div className="text-muted text-sm fw-medium">{flight.from}</div>
                    </div>
                    <div className="col text-center">
                      <div className="flightLine departure">
                        <div></div>
                        <div></div>
                      </div>
                      <div className="text-muted text-sm fw-medium mt-3">Direct</div>
                    </div>
                    <div className="col-auto">
                      <div className="text-dark fw-bold">{flight.arriveTime}</div>
                      <div className="text-muted text-sm fw-medium">{flight.to}</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-auto">
                  <div className="text-dark fw-medium">4H 40M</div>
                  <div className="text-muted text-sm fw-medium">2 Stop</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-auto">
          <div className="d-flex items-center h-100">
            <div className="text-start text-md-end me-3">
              <div className="text-dark fs-3 fw-bold lh-base">₹{flight.price}</div>
              <div className="text-muted text-sm mb-2">Refundable</div>
            </div>
            <div className="flight-button-wrap">
              <button
                className="btn btn-primary btn-md fw-medium full-width"
                onClick={handleSelectFlight}
              >
                Select Flight <i className="fa-solid fa-arrow-trend-up ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
