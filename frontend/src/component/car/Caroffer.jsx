import React from 'react';

const Caroffer = () => {
  return (
    <div>
      <section className="pt-5 pb-0">
        <div className="container">
          <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-3 g-4">
            
            {/* Offer 1 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="pop-touritems">
                <a href="#" className="card rounded-3  br-dashed border-2 m-0">
                  <div className="offers-container d-flex align-items-center justify-content-start p-2">
                    <div className="offers-flex position-relative">
                      <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2">
                        <span className="label text-light bg-danger fw-medium">20% Off</span>
                      </div>
                      <div className="offers-pic">
                        <img src="/assets/img/city/ct-6.webp" className="img-fluid rounded" width="110" alt="Los Angeles" />
                      </div>
                    </div>
                    <div className="offers-captions ps-3">
                      <h4 className="city fs-6 m-0 fw-bold">
                        <span>Los Angeles</span>
                      </h4>
                      <p className="detail ellipsis-container">
                        <span className="ellipsis-item__normal">Round-trip</span>
                        <span className="separate ellipsis-item__normal"></span>
                        <span className="ellipsis-item">3D/4N</span>
                        <span className="separate ellipsis-item__normal"></span>
                        <span className="ellipsis-item">3 Person</span>
                      </p>
                      <div className="booking-wrapes d-flex align-items-center justify-content-between">
                        <h5 className="fs-5 low-price m-0">
                          <span className="tag-span">From</span> <span className="price">$849 - $999</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="pop-touritems">
                <a href="#" className="card rounded-3  br-dashed border-2 m-0">
                  <div className="offers-container d-flex align-items-center justify-content-start p-2">
                    <div className="offers-flex position-relative">
                      <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2">
                        <span className="label text-light bg-danger fw-medium">15% Off</span>
                      </div>
                      <div className="offers-pic">
                        <img src="/assets/img/city/ct-5.webp" className="img-fluid rounded" width="110" alt="United Kingdom" />
                      </div>
                    </div>
                    <div className="offers-captions ps-3">
                      <h4 className="city fs-6 m-0 fw-bold">
                        <span>United Kingdom</span>
                      </h4>
                      <p className="detail ellipsis-container">
                        <span className="ellipsis-item__normal">Round-trip</span>
                        <span className="separate ellipsis-item__normal"></span>
                        <span className="ellipsis-item">3D/4N</span>
                        <span className="separate ellipsis-item__normal"></span>
                        <span className="ellipsis-item">2 Person</span>
                      </p>
                      <div className="booking-wrapes d-flex align-items-center justify-content-between">
                        <h5 className="fs-5 low-price m-0">
                          <span className="tag-span">From</span> <span className="price">$399 - $599</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="pop-touritems">
                <a href="#" className="card rounded-3  br-dashed border-2 m-0">
                  <div className="offers-container d-flex align-items-center justify-content-start p-2">
                    <div className="offers-flex position-relative">
                      <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2">
                        <span className="label text-light bg-danger fw-medium">30% Off</span>
                      </div>
                      <div className="offers-pic">
                        <img src="/assets/img/city/ct-1.webp" className="img-fluid rounded" width="110" alt="France" />
                      </div>
                    </div>
                    <div className="offers-captions ps-3">
                      <h4 className="city fs-6 m-0 fw-bold">
                        <span>France</span>
                      </h4>
                      <p className="detail ellipsis-container">
                        <span className="ellipsis-item__normal">Round-trip</span>
                        <span className="separate ellipsis-item__normal"></span>
                        <span className="ellipsis-item">3D/4N</span>
                        <span className="separate ellipsis-item__normal"></span>
                        <span className="ellipsis-item">3 Person</span>
                      </p>
                      <div className="booking-wrapes d-flex align-items-center justify-content-between">
                        <h5 className="fs-5 low-price m-0">
                          <span className="tag-span">From</span> <span className="price">$569 - $799</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Caroffer;
