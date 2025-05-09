






import React, { useMemo } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { BACKENDURL } from '../../Config/Config';

const Roombook = React.memo(() => {
    const navigate = useNavigate();
    const location = useLocation();
    const { room, hotelName } = location.state || {};

    if (!room || !hotelName) {
        return <p>Room or hotel details are missing.</p>;
    }

    const {
        originalPrice = 0,
        price,
        discount = 0,
        quantity = 1,
        type,
        amenities = [],
        description = '',
        images = [],
    } = room;

    const discountedPrice = useMemo(() => (
        price || (originalPrice - (originalPrice * discount) / 100)
    ), [price, originalPrice, discount]);

    const totalPrice = useMemo(() => (
        discountedPrice * quantity
    ), [discountedPrice, quantity]);

    const transactionDetails = useMemo(() => ({
        totalPrice,
        discountedPrice,
        discount,
        quantity,
    }), [totalPrice, discountedPrice, discount, quantity]);

    const handleNext = () => {
        navigate('/bookingpage-02', {
            state: {
                room,
                hotelName,
                transactionDetails,
            },
        });
    };

    return (
        <div>
            <section className="pt-4 gray-simple position-relative">
                <div className="container">
                    <div className="row align-items-start">
                        {/* Left: Room Info */}
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            <div className="card p-3 mb-3">
                                <div className="card-box list-layout-block border br-dashed rounded-3 p-2">
                                    <div className="row">
                                        {/* Room Image */}
                                        <div className="col-xl-4 col-lg-3">
                                            <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                                <img
                                                    src={`${BACKENDURL}/${images[0]}`}
                                                    alt={type}
                                                    loading="lazy"
                                                    className="img-fluid rounded-2 h-100 object-fit-cover w-100"
                                                />
                                            </div>
                                        </div>

                                        {/* Room Info */}
                                        <div className="col-xl col-lg">
                                            <div className="listLayout_midCaps mt-3">
                                                <h4 className="fs-5 fw-bold mb-1">{hotelName}</h4>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="square--40 rounded-2 bg-primary text-light fw-semibold me-2">{type}</div>
                                                    <div className="text-md text-dark fw-medium">{amenities.join(", ")}</div>
                                                </div>
                                                <div className="mt-3">
                                                    <h6 className="fw-semibold">Description</h6>
                                                    <p className="text-muted-2">{description}</p>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center mt-4">
                                                    <div>
                                                        <p className="text-muted-2 mb-1"><s>₹{originalPrice.toFixed(2)}</s></p>
                                                        <h4 className="fw-bold text-primary">₹{discountedPrice.toFixed(2)}</h4>
                                                        <p className="text-success">{discount}% Off</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Price Summary */}
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="card rounded-2 p-3">
                                <div className="mb-3">
                                    <h5 className="fw-semibold fs-6">Your Price Summary</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span className="fw-medium">Rooms charge</span>
                                            <span className="fw-semibold">₹{originalPrice.toFixed(2)}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span className="fw-medium">Rooms charge in offer</span>
                                            <span className="fw-semibold">₹{discountedPrice.toFixed(2)}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span className="fw-medium">Total Discount</span>
                                            <span className="fw-semibold">{discount}%</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between text-success">
                                            <span className="fw-medium">Total Price</span>
                                            <span className="fw-semibold">₹{totalPrice.toFixed(2)}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <button className="btn fw-medium btn-primary w-100" onClick={handleNext}>
                                        Proceed to Traveler Info
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
});

export default Roombook;
