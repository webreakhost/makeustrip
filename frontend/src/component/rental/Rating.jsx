import React from "react";

const Rating = () => {
  return (
    <div className="searchBar-single px-3 py-3 border-bottom">
      <div className="searchBar-single-title d-flex mb-3">
        <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Customer Ratings</h6>
      </div>
      <div className="searchBar-single-wrap">
        <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
          <li className="col-12">
            <div className="form-check lg">
              <div className="frm-slicing d-flex align-items-center">
                <div className="frm-slicing-first">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="fourfive"
                  />
                  <label className="form-check-label" htmlFor="fourfive"></label>
                </div>
                <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                  <div className="frms-flex d-flex align-items-center">
                    <div className="frm-slicing-ico text-md">
                      <i className="fa fa-star text-warning"></i>
                    </div>
                    <div className="frm-slicing-title ps-1">
                      <span className="text-dark fw-bold">4.5+</span>
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="text-md text-muted-2 opacity-75">16</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="col-12">
            <div className="form-check lg">
              <div className="frm-slicing d-flex align-items-center">
                <div className="frm-slicing-first">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="fourplus"
                  />
                  <label className="form-check-label" htmlFor="fourplus"></label>
                </div>
                <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                  <div className="frms-flex d-flex align-items-center">
                    <div className="frm-slicing-ico text-md">
                      <i className="fa fa-star text-warning"></i>
                    </div>
                    <div className="frm-slicing-title ps-1">
                      <span className="text-dark fw-bold">4+</span>
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="text-md text-muted-2 opacity-75">10</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="col-12">
            <div className="form-check lg">
              <div className="frm-slicing d-flex align-items-center">
                <div className="frm-slicing-first">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="threefive"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="threefive"
                  ></label>
                </div>
                <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                  <div className="frms-flex d-flex align-items-center">
                    <div className="frm-slicing-ico text-md">
                      <i className="fa fa-star text-warning"></i>
                    </div>
                    <div className="frm-slicing-title ps-1">
                      <span className="text-dark fw-bold">3.5+</span>
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="text-md text-muted-2 opacity-75">08</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="col-12">
            <div className="form-check lg">
              <div className="frm-slicing d-flex align-items-center">
                <div className="frm-slicing-first">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="threeplus"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="threeplus"
                  ></label>
                </div>
                <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                  <div className="frms-flex d-flex align-items-center">
                    <div className="frm-slicing-ico text-md">
                      <i className="fa fa-star text-warning"></i>
                    </div>
                    <div className="frm-slicing-title ps-1">
                      <span className="text-dark fw-bold">3+</span>
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="text-md text-muted-2 opacity-75">26</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rating;
