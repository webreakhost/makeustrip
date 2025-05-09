



import React from 'react';

const GuestReview = () => {
  return (
    <div>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card mb-4">
          <div className="card-header">
            <h4 className="fs-5 mb-0">Guests Reviews</h4>
          </div>
          <div className="card-body">
            <div className="row align-items-center mb-4">
              <div className="col-xl-2 col-lg-3 col-md-4">
                <div className="rounded-3 bg-primary full-width">
                  <div className="py-4 px-3 text-center">
                    <h3 className="text-light display-2 fw-semibold mb-0">92</h3>
                    <p className="text-light lh-base m-0">Extraordinary 786 Reviews</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-10 col-lg-9 col-md-8">
                <div className="row align-items-start">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <ul className="row align-items-center p-0 mb-0 gy-3 gx-4">
                      <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="revs-wraps">
                          <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                            <span className="text-dark fw-semibold text-md">Dishes</span>
                            <span className="text-dark fw-semibold text-md">8.7</span>
                          </div>
                          <div className="progress" role="progressbar" aria-label="Example" aria-valuenow="87"
                            aria-valuemin="0" aria-valuemax="100" style={{ height: '7px' }}>
                            <div className="progress-bar bg-primary" style={{ width: '87%' }}></div>
                          </div>
                        </div>
                      </li>
                      <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="revs-wraps">
                          <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                            <span className="text-dark fw-semibold text-md">Swimming</span>
                            <span className="text-dark fw-semibold text-md">9.2</span>
                          </div>
                          <div className="progress" role="progressbar" aria-label="Example" aria-valuenow="92"
                            aria-valuemin="0" aria-valuemax="100" style={{ height: '7px' }}>
                            <div className="progress-bar bg-primary" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                      </li>
                      <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="revs-wraps">
                          <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                            <span className="text-dark fw-semibold text-md">Rooms</span>
                            <span className="text-dark fw-semibold text-md">8.8</span>
                          </div>
                          <div className="progress" role="progressbar" aria-label="Example" aria-valuenow="88"
                            aria-valuemin="0" aria-valuemax="100" style={{ height: '7px' }}>
                            <div className="progress-bar bg-primary" style={{ width: '88%' }}></div>
                          </div>
                        </div>
                      </li>
                      <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="revs-wraps">
                          <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                            <span className="text-dark fw-semibold text-md">Location</span>
                            <span className="text-dark fw-semibold text-md">8.9</span>
                          </div>
                          <div className="progress" role="progressbar" aria-label="Example" aria-valuenow="89"
                            aria-valuemin="0" aria-valuemax="100" style={{ height: '7px' }}>
                            <div className="progress-bar bg-primary" style={{ width: '89%' }}></div>
                          </div>
                        </div>
                      </li>
                      <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="revs-wraps">
                          <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                            <span className="text-dark fw-semibold text-md">Services</span>
                            <span className="text-dark fw-semibold text-md">9.2</span>
                          </div>
                          <div className="progress" role="progressbar" aria-label="Example" aria-valuenow="92"
                            aria-valuemin="0" aria-valuemax="100" style={{ height: '7px' }}>
                            <div className="progress-bar bg-primary" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                      </li>
                      <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="revs-wraps">
                          <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                            <span className="text-dark fw-semibold text-md">Cleanliness</span>
                            <span className="text-dark fw-semibold text-md">8.6</span>
                          </div>
                          <div className="progress" role="progressbar" aria-label="Example" aria-valuenow="86"
                            aria-valuemin="0" aria-valuemax="100" style={{ height: '7px' }}>
                            <div className="progress-bar bg-primary" style={{ width: '86%' }}></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="gstRevws-groups">

                  {/* Single Review */}
                  <div className="single-gstRevws rounded-2 border p-2 d-flex align-items-start mb-3">
                    <div className="single-gstRevws-thumb">
                      <div className="rounded-2 overflow-hidden w-25 h-25">
                        <img src="/assets/img/team-1.jpg" className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="single-gstRevws-caps ps-3">
                      <div className="gstRevws-head d-flex align-items-start justify-content-between">
                        <div className="dfls-headers">
                          <h5 className="h6 text-dark fw-semibold mb-0">Adam Bluecart</h5>
                          <p className="text-md mb-0">Canada</p>
                        </div>
                        <div className="dfls-arrios"><span className="text-muted text-md">10 July 2023</span></div>
                      </div>
                      <div className="dfls-secription">
                        <p className="mb-0">
                          In a free hour, But in certain circumstances and owing to the claims of duty or the obligations of business when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Load More Reviews */}
                  <div className="show-morerewsbox mb-3">
                    <div className="text-center" role="alert">
                      <a href="#" className="fw-medium text-primary">Load More Guest Reviews<i className="fa-solid fa-caret-down ms-2"></i></a>
                    </div>
                  </div>

                  {/* Submit Reviews */}
                  <div className="sbms-rewsbox">
                    <div className="alert alert-success text-center" role="alert">
                      Login your account to submit reviews <a href="#" className="text-dark">Login</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestReview;
