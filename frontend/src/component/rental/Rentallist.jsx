import React from 'react';

const Rentallist = () => {
  return (
    <div className="col-xl-12 col-lg-12 col-12">
      <div className="card list-layout-block rounded-3 p-3">
        <div className="row">
          {/* Image Section */}
          <div className="col-xl-4 col-lg-3 col-md">
            <div className="cardImage__caps rounded-2 overflow-hidden h-100">
              <img
                className="img-fluid h-100 object-fit"
                src="assets/img/property/img-1.jpg"
                alt="Property"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="col-xl col-lg col-md">
            <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
              <div className="d-flex align-items-center justify-content-start mb-1">
                <span className="label bg-light-purple text-purple">Apartment</span>
              </div>
              <h4 className="fs-5 fw-bold mb-1">Cobblestone Realty Partners</h4>
              <ul className="row gx-2 p-0 excortio">
                <li className="col-auto">
                  <p className="text-muted-2 text-md">South Town</p>
                </li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md fw-bold">.</p>
                </li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md">9km from Towndown</p>
                </li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md fw-bold">.</p>
                </li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md">
                    <a href="#" className="text-primary">Show on Map</a>
                  </p>
                </li>
              </ul>
              <div className="detail ellipsis-container mt-3">
                <span className="ellipsis">3 Beds</span>
                <span className="ellipsis">2 Baths</span>
                <span className="ellipsis">1 Store</span>
                <span className="ellipsis">2200 sqft</span>
              </div>
              <div className="position-relative mt-3">
                <div className="fw-medium text-dark">Standard Twin Double Room</div>
                <div className="text-md text-muted">Last booked 25 min ago</div>
              </div>
              <div className="position-relative mt-4">
                <div className="d-block position-relative">
                  <span className="label bg-light-success text-success">
                    Free Cancellation Till 10 Aug 23
                  </span>
                </div>
                <div className="text-md">
                  <p className="m-0">
                    <a href="#" className="text-primary">Login</a> & get additional $15 Off Using{' '}
                    <span className="text-primary">Visa card</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Price & Availability Section */}
          <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
            <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
              <div className="col-auto text-start text-md-end">
                <div className="text-md text-dark fw-medium">Exceptional</div>
                <div className="text-md text-muted-2">3,014 reviews</div>
              </div>
              <div className="col-auto">
                <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
              </div>
            </div>

            <div className="position-relative mt-auto full-width">
              <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                <span className="label bg-light-danger text-danger">15% Off</span>
              </div>
              <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                <div className="text-muted-2 fw-medium text-decoration-line-through me-2">US$79</div>
                <div className="text-dark fw-bold fs-3">$5000</div>
              </div>
              <div className="d-flex align-items-start align-items-md-end justify-content-start justify-content-md-end flex-column mb-2">
                <div className="text-muted-2 text-sm">+$22 taxes & Fees</div>
                <div className="text-muted-2 text-sm">Per Month</div>
              </div>
              <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                <a href="#" className="btn btn-md btn-primary full-width fw-medium px-lg-4">
                  See Availability
                  <i className="fa-solid fa-arrow-trend-up ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rentallist;
