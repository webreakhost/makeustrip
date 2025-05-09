



import React from 'react';

const Nearestservice = () => {
  return (
    <div>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card mb-4">
          <div className="card-header">
            <h4 className="fs-5 mb-0">Nearest Services</h4>
          </div>
          <div className="card-body">
            {/* Transport Section */}
            <div className="row align-items-start mb-4">
              <div className="col-xl-2 col-lg-3 col-md-4">
                <h5 className="fs-6 fw-semibold mb-0">Transport</h5>
              </div>
              <div className="col-xl-10 col-lg-9 col-md-8">
                <div className="row align-items-start">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <ul className="row align-items-center p-0 mb-0">
                      <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="explot-first">Metro:<span className="text-dark ms-2">Lavender</span></div>
                          <div className="explot-distance"><span className="text-muted">360m</span></div>
                        </div>
                      </li>
                      {/* Repeat for other transport items */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Landmarks Section */}
            <div className="row align-items-start mb-4">
              <div className="col-xl-2 col-lg-3 col-md-4">
                <h5 className="fs-6 fw-semibold mb-0">Landmarks</h5>
              </div>
              <div className="col-xl-10 col-lg-9 col-md-8">
                <div className="row align-items-start">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <ul className="row align-items-center p-0 mb-0">
                      <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="explot-first"><span className="text-dark ms-2">Sentosa</span></div>
                          <div className="explot-distance"><span className="text-muted">360m</span></div>
                        </div>
                      </li>
                      {/* Repeat for other landmarks */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Dining Section */}
            <div className="row align-items-start mb-4">
              <div className="col-xl-2 col-lg-3 col-md-4">
                <h5 className="fs-6 fw-semibold mb-0">Dining</h5>
              </div>
              <div className="col-xl-10 col-lg-9 col-md-8">
                <div className="row align-items-start">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <ul className="row align-items-center p-0 mb-0">
                      <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="explot-first"><span className="text-dark ms-2">SYMMETRY</span></div>
                          <div className="explot-distance"><span className="text-muted">360m</span></div>
                        </div>
                      </li>
                      {/* Repeat for other dining options */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Shopping Section */}
            <div className="row align-items-start mb-4">
              <div className="col-xl-2 col-lg-3 col-md-4">
                <h5 className="fs-6 fw-semibold mb-0">Shopping</h5>
              </div>
              <div className="col-xl-10 col-lg-9 col-md-8">
                <div className="row align-items-start">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <ul className="row align-items-center p-0 mb-0">
                      <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div className="explot-first"><span className="text-dark ms-2">Bugis Street</span></div>
                          <div className="explot-distance"><span className="text-muted">360m</span></div>
                        </div>
                      </li>
                      {/* Repeat for other shopping places */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nearestservice;
