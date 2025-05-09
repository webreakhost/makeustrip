import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
      <div className="pop-touritem">
        <a href="#" className="card rounded-3 shadow-wrap m-0">
          <div className="flight-thumb-wrapper">
            <div className="position-absolute top-0 left-0 ms-3 mt-3 z-1">
              <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                <span className="svg-icon text-light svg-icon-2hx me-1">
                  {/* SVG Icon */}
                </span>
                {car.kmIncluded} Kms included. After that ${car.kmRate}/Kms
              </div>
            </div>
            <div className="popFlights-item-overHidden">
              <img src={car.image} className="img-fluid" alt={car.name} />
            </div>
          </div>
          <div className="touritem-middle position-relative p-3">
            <div className="touritem-flexxer">
              <h4 className="city fs-4 m-0 fw-bold">
                <span>{car.name}</span>
              </h4>
              <p className="detail ellipsis-container">
                <span className="ellipsis-item__normal">{car.type}</span>
                <span className="separate ellipsis-item__normal"></span>
                <span className="ellipsis-item">{car.ac}</span>
                <span className="separate ellipsis-item__normal"></span>
                <span className="ellipsis-item">{car.seats} Seats</span>
              </p>

              <div className="touritem-centrio mt-4">
                <div className="d-block position-relative">
                  <span className="label bg-light-success text-success">
                    {car.cancellation}
                  </span>
                </div>
                <div className="aments-lists mt-2">
                  <div className="detail ellipsis-container mt-1">
                    <span className="ellipsis">{car.transmission}</span>
                    <span className="ellipsis">{car.luggage}</span>
                    <span className="ellipsis">{car.fuel}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="trsms-foots mt-4">
              <div className="flts-flex d-flex align-items-end justify-content-between">
                <div className="flts-flex-strat">
                  <div className="d-flex align-items-center justify-content-start">
                    <span className="label bg-light-danger text-danger">{car.discount}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="text-dark fw-bold fs-4">${car.price}</div>
                    <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">${car.originalPrice}</div>
                  </div>
                </div>

                <div className="flts-flex-end">
                  <div className="row align-items-center justify-content-end gx-2">
                    <div className="col-auto text-start text-md-end">
                      <div className="text-md text-dark fw-medium">Exceptional</div>
                      <div className="text-md text-muted-2">3,014 reviews</div>
                    </div>
                    <div className="col-auto">
                      <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CarCard;
