import React from 'react';

const Roomdet2 = () => {
  return (
    <>
      <div className="col-xl-12 col-lg-12 col-md-12">
        {/* Single Room Option */}
        <div className="card mb-4">
          <div className="card-header">
            <h6 className="fw-semibold mb-0">Superior Double Room</h6>
          </div>
          <div className="card-body">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-4 col-md-4">
                <div className="roomavls-groups">
                  <div className="roomavls-thumb mb-2">
                    <img
                      src="/assets/img/hotel/hotel-10.jpg"
                      className="img-fluid rounded-2"
                      alt="Superior Double Room"
                    />
                  </div>
                  <div className="roomavls-caps">
                    <div className="roomavls-escols d-flex align-items-start mb-2">
                      <span className="label bg-light-purple text-purple me-2">King Bed</span>
                      <span className="label bg-light-purple text-purple">3 Sleeps</span>
                    </div>
                    <div className="roomavls-lists">
                      <ul className="row align-items-center gx-2 gy-1 mb-0 p-0">
                        <li className="col-6">
                          <span className="text-muted-2 text-md">
                            <i className="fa-brands fa-bity me-2"></i>City View
                          </span>
                        </li>
                        <li className="col-6">
                          <span className="text-muted-2 text-md">
                            <i className="fa-solid fa-ban-smoking me-2"></i>Non-Smoking
                          </span>
                        </li>
                        <li className="col-6">
                          <span className="text-muted-2 text-md">
                            <i className="fa-solid fa-vector-square me-2"></i>1800sqft | 6 Floor
                          </span>
                        </li>
                        <li className="col-6">
                          <span className="text-muted-2 text-md">
                            <i className="fa-solid fa-wifi me-2"></i>Free Wi-Fi
                          </span>
                        </li>
                        <li className="col-6">
                          <span className="text-muted-2 text-md">
                            <i className="fa-solid fa-bath me-2"></i>Private Bathroom
                          </span>
                        </li>
                        <li className="col-6">
                          <span className="text-muted-2 text-md">
                            <i className="fa-solid fa-snowflake me-2"></i>Air Conditioning
                          </span>
                        </li>
                        <li className="col-6">
                          <span className="text-muted-2 text-md">
                            <i className="fa-solid fa-cash-register me-2"></i>Refrigerator
                          </span>
                        </li>
                        <li className="col-6">
                          <span className="text-muted-2 text-md">
                            <i className="fa-solid fa-tty me-2"></i>Telephone
                          </span>
                        </li>
                        <li className="col-12">
                          <a href="#" className="text-primary fw-medium text-md">
                            Show More Room Amenities
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-8">
                {/* Single Item */}
                <div className="d-block border br-dashed rounded-2 px-3 py-3 mb-3">
                  <div className="d-flex align-items-sm-end justify-content-between flex-sm-row flex-column">
                    <div className="typsofrooms-wrap">
                      <div className="d-flex align-items-center">
                        <h6 className="fs-6 fw-semibold mb-1 me-2">Your Choice</h6>
                        <a href="#" className="text-muted fs-6">
                          <i className="fa-solid fa-circle-question"></i>
                        </a>
                      </div>
                      <div className="typsofrooms-groups d-flex align-items-start">
                        <div className="typsofrooms-brk1 mb-4">
                          <ul className="row align-items-center g-1 mb-0 p-0">
                            <li className="col-12">
                              <span className="text-muted-2 text-md">
                                <i className="fa-solid fa-mug-saucer me-2"></i>Breakfast for US$10 (Optional)
                              </span>
                            </li>
                            <li className="col-12">
                              <span className="text-muted-2 text-md">
                                <i className="fa-solid fa-ban-smoking me-2"></i>Non-Refundable
                              </span>
                            </li>
                            <li className="col-12">
                              <span className="text-success text-md">
                                <i className="fa-solid fa-meteor me-2"></i>Instant Confirmation
                              </span>
                            </li>
                            <li className="col-12">
                              <span className="text-muted-2 text-md">
                                <i className="fa-brands fa-cc-visa me-2"></i>Prepay Online
                              </span>
                            </li>
                            <li className="col-12">
                              <span className="text-success text-md">
                                <i className="fa-solid fa-circle-check me-2"></i>Booking of Maximum 5 Rooms
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="typsofrooms-action col-auto">
                      <div className="prcrounce-groups">
                        <div className="d-flex align-items-center justify-content-start justify-content-sm-end">
                          <div className="text-dark fw-semibold fs-4">US$ 99</div>
                        </div>
                        <div className="d-flex align-items-start align-items-sm-end justify-content-start justify-content-md-end flex-column mb-2">
                          <div className="text-muted-2 text-sm">After tax US$ 102</div>
                        </div>
                      </div>
                      <div className="prcrounce-groups-button d-flex flex-column align-items-start align-items-md-end mt-3">
                        <div className="prcrounce-sngbuttons d-flex mb-2">
                          <button className="btn btn-sm btn-light-primary rounded-1 fw-medium px-4">
                            Book at This Price
                          </button>
                        </div>
                        <div className="prcrounce-sngbuttons d-flex">
                          <button className="btn btn-sm btn-primary rounded-1 fw-medium px-4">
                            Access Lower Price
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* / Single Item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roomdet2;
