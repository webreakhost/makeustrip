import React from 'react';

const FilterBar = () => {
  return (
    <div className="col-xl-8 col-lg-8 col-md-12">
      <div className="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap">
       
        <div className="flsx-first me-2">
          <div className="bg-white rounded py-2 px-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="mapoption" />
              <label className="form-check-label ms-1" htmlFor="mapoption">Map</label>
            </div>
          </div>
        </div>

        {/* Filter Button */}
        <div className="flex-first me-2">
          <button
            className="btn btn-filter btn-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <i className="fa-solid fa-filter me-1"></i>
            <span className="d-none d-md-block">Filter</span>
          </button>
        </div>

        {/* Tabs for Filters */}
        <div className="flsx-first mt-sm-0 mt-2">
          <ul
            className="nav nav-pills nav-fill p-1 small lights blukker bg-primary rounded-3 shadow-sm"
            id="filtersblocks"
            role="tablist"
          >
            {/* Trending Tab */}
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active rounded-3"
                id="trending"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Our Trending
              </button>
            </li>

            {/* Most Popular Tab */}
            <li className="nav-item" role="presentation">
              <button
                className="nav-link rounded-3"
                id="mostpopular"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Most Popular
              </button>
            </li>

            {/* Lowest Price Tab */}
            <li className="nav-item" role="presentation">
              <button
                className="nav-link rounded-3"
                id="lowprice"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Lowest Price
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
