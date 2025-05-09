import React from "react";

const Googleios = () => {
  return (
    <div>
      <section className="pt-0 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="card rounded-3 border-0 bg-light-primary m-0 appLink-card p-xl-4 p-3">
                <div className="card-body">
                  <div className="row align-items-center justify-content-between">

                    {/* Left Section */}
                    <div className="col-xl-7 col-lg-7 col-md-6">
                      <div className="appLink-captions">
                        <div className="d-flex align-items-center">
                          <div>
                            <img src="/assets/img/app-link.png" className="img-fluid" width="65" alt="App Icon" />
                          </div>
                          <div className="ps-3">
                            <h2 className="fw-bold fs-2 mb-1">Download App Now!</h2>
                            <p>
                              Use Code <span className="text-primary text-uppercase fw-medium">Welcome</span> and get 
                              <span className="text-success text-uppercase fw-medium">Flat 20%</span> OFF* on your first domestic flight booking.
                            </p>
                          </div>
                        </div>

                        {/* Form Section */}
                        <div className="appLink-forms mt-4">
                          <form>
                            <div className="row g-0">
                              <div className="col-xl-9 col-lg-10">
                                <div className="appLink-frmbox bg-white border br-dashed rounded-2 p-2">
                                  <div className="row g-0 align-items-center">
                                    <div className="col-xl-8 col-lg-8">
                                      <div className="form-group position-relative">
                                        <input
                                          type="text"
                                          className="form-control form-control-md bold border-0 ps-5"
                                          placeholder="Enter Mobile Number"
                                        />
                                        <span className="position-absolute top-50 ms-4 translate-middle fw-medium text-dark">
                                          +91 -
                                        </span>
                                      </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4">
                                      <button
                                        type="button"
                                        className="btn btn-md btn-primary full-width fw-medium">
                                        Get App Link
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-xl-4 col-lg-4 col-md-5 mt-md-0 mt-4">
                      <div className="appLink-buttons text-md-end">
                        <div className="app-wrap">
                          <a href="#" className="d-inline-flex">
                            <div className="cardApp-box bg-dark d-inline-flex py-3 px-4 rounded align-items-center mb-3">
                              <div className="cardApp-icon">
                                <i className="fa-brands fa-google-play text-light fs-1"></i>
                              </div>
                              <div className="cardApp-caption text-start ps-3">
                                <p className="text-light opacity-75 text-uppercase m-0">Get It On</p>
                                <h5 className="fw-bold text-light fs-5 m-0">Google Play</h5>
                              </div>
                            </div>
                          </a>
                          <a href="#" className="d-inline-flex">
                            <div className="cardApp-box bg-primary d-inline-flex py-3 px-4 rounded align-items-center">
                              <div className="cardApp-icon">
                                <i className="fa-brands fa-apple text-light fs-1"></i>
                              </div>
                              <div className="cardApp-caption text-start ps-3">
                                <p className="text-light opacity-75 text-uppercase m-0">Download On The</p>
                                <h5 className="fw-bold text-light fs-5 m-0">App Store</h5>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Googleios;

