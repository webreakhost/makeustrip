
import React from "react";
import { BACKENDURL } from "../../Config/Config";
import { useNavigate } from "react-router-dom";

const RentalCard = ({ rental }) => {
    const navigate = useNavigate();

    const handleAvailabilityClick = () => {
        // Redirect to the Car Booking page with car details
        navigate("/rental", { state: { rental } });
      };
    return (
        <div className="col-xl-12 col-lg-12 col-12 ">
            <div className="card list-layout-block rounded-3 p-3">
                <div className="row">
                    <div className="col-xl-4 col-lg-3 col-md">
                        <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                            <img
                                src={`${BACKENDURL}/${rental.images[0]}`} // First image from the array
                                className="img-fluid rounded-2 col-xl-12 h-100 object-fit"
                                alt={rental.type}
                            />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="col-xl col-lg col-md">
                        <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                            <div className="d-flex align-items-center justify-content-start mb-1">
                                <span className="label bg-light-purple text-purple">{rental.category || "N/A"}</span>
                            </div>
                            <h4 className="fs-5 fw-bold mb-1">{rental.title}</h4>
                            <ul className="row gx-2 p-0 excortio">
                                <li className="col-auto">
                                    <p className="text-muted-2 text-md">
                                        {rental.location.city}, {rental.location.distanceFromTown} km from town
                                    </p>
                                </li>
                            </ul>
                            <div className="detail ellipsis-container mt-3">
                                <span className="ellipsis">{rental.propertyDetails.beds} Beds</span>
                                <span className="ellipsis">{rental.propertyDetails.baths} Baths</span>
                                <span className="ellipsis">{rental.propertyDetails.store} Store</span>
                                <span className="ellipsis">{rental.propertyDetails.sqft} sqft</span>
                            </div>
                            <div className="position-relative mt-2">
                                <div className="fw-medium text-dark">{rental.description}</div>
                                <div className="fw-medium text-dark">{rental.roomType}</div>
                                <div className="fw-small text-dark">last booked-{rental.lastBooked}</div>
                            </div>

                            <div className="position-relative mt-1">
                                <p>Free Cancellation:{rental.cancellationPolicy}</p>

                            </div>


                        </div>
                    </div>

                    {/* Price & Availability Section */}
                    <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                        <div className="position-relative mt-auto full-width">
                            <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                                <span className="label bg-light-danger text-danger">{rental.discount}% Off</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                                <div className="text-dark fw-bold fs-3">${rental.discountedPrice}</div>
                            </div>
                            <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                                
                                <a onClick={handleAvailabilityClick}
       
  className="btn btn-md btn-primary full-width fw-medium px-lg-4"
>
  See Availability
</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RentalCard;




