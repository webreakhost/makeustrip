import React from 'react';

const Amenities = () => {
  return (
    <>
      {/* Amenities Section */}
      <div className="searchBar-single px-3 py-3 border-bottom">
        <div className="searchBar-single-title d-flex mb-3">
          <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Amenities</h6>
        </div>
        <div className="searchBar-single-wrap">
          <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
            <li className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wififree" />
                <label className="form-check-label" htmlFor="wififree">Free Wifi</label>
              </div>
            </li>
            <li className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bkrsdt" />
                <label className="form-check-label" htmlFor="bkrsdt">Breakfast included</label>
              </div>
            </li>
            <li className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="pool" />
                <label className="form-check-label" htmlFor="pool">Pool</label>
              </div>
            </li>
            <li className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="parking" />
                <label className="form-check-label" htmlFor="parking">Free Parking</label>
              </div>
            </li>
            <li className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="acrion" />
                <label className="form-check-label" htmlFor="acrion">Air Conditioning</label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Fun Things To Do Section */}
      <div className="searchBar-single px-3 py-3">
        <div className="searchBar-single-title d-flex mb-3">
          <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Fun Things To Do</h6>
        </div>
        <div className="searchBar-single-wrap">
          <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
            <li className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="beach" />
                <label className="form-check-label" htmlFor="beach">Beach</label>
              </div>
            </li>
            <li className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="ftns" />
                <label className="form-check-label" htmlFor="ftns">Fitness Center</label>
              </div>
            </li>
            <li className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="cylc" />
                <label className="form-check-label" htmlFor="cylc">Cycling</label>
              </div>
            </li>
            <li className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="anms" />
                <label className="form-check-label" htmlFor="anms">Animation Show</label>
              </div>
            </li>
            <li className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="shpc" />
                <label className="form-check-label" htmlFor="shpc">Shopping Center</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Amenities;
