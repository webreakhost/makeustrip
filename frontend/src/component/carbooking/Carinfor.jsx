



import React from 'react';
import Faredetail from './Faredetail';

const Carinfor = ({car}) => {
  return (
    <div className="col-12">
      <div className="card border-0 p-3 mb-4">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <div className="d-inline-flex align-items-center mb-1">
              <span className="bg-light-success text-success fw-medium px-2 py-1 rounded">
                25 Sep 2023
              </span>
            </div>
            <h4 className="mb-0">{car.location} - One Way</h4>
            <p className="fw-semibold text-muted">
              <span>{car.name}</span> | <span>AC</span> | <span>No of seats:{car.seats}</span> | <span>Car-fuel-type:{car.fuel}</span>
            </p>
          </div>
          <div className="text-end">
            <button className="bg-light-info text-info rounded px-3 py-2 me-2">
              <i className="fas fa-bookmark me-2"></i>Bookmark
            </button>
            <button className="bg-light-danger text-danger rounded px-3 py-2">
              <i className="fas fa-share-alt me-2"></i>Share
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="row align-items-center">
          {/* Gallery */}
          <div className="col-lg-8 mb-3 mb-lg-0">
            <div className="grid grid-cols-2 gap-2">
              <img src="assets/img/car.jpg" alt="Car" className="rounded img-fluid" />
              <img src="assets/img/car.jpg" alt="Car" className="rounded img-fluid" />
              <img src="assets/img/car.jpg" alt="Car" className="rounded img-fluid" />
              <div className="position-relative">
                <img src="assets/img/car.jpg" alt="Car" className="rounded img-fluid" />
                <button className="btn btn-dark position-absolute bottom-0 end-0 m-2">
                  16 More Photos
                </button>
              </div>
            </div>
          </div>

          {/* Details */}          
          <Faredetail car = {car}/>
        </div>

        {/* Footer */}
        <div className="mt-3">
          <div className="d-flex align-items-center">
            <div className="bg-success text-white rounded-circle p-2">4.8</div>
            <div className="ms-3">
              <p className="mb-0">Exceptional</p>
              <p className="text-muted">3,014 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carinfor;

