



import React from 'react';

const Filtersidebar = ({
  hotels,
  priceRange,
  handlePriceChange,
  selectedRating,
  handleRatingChange,
  selectedAmenities,
  handleAmenityChange
}) => {
  const allAmenities = ["wifi", "cooling", "parking", "food", "Pet Allow"];

  return (
    <div className="col-xl-3 col-lg-4 col-md-12 hidden md:block">
      
      <div className="filter-searchBar bg-white rounded-xl  p-6 mt-5">
        <div className="filter-searchBar-head border-bottom">
          <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
            <div className="searchBar-headerfirst">
              <h6 className="fw-bold fs-5 m-0">Filters</h6>
              <p className="text-md text-muted m-0">Showing {hotels.length} Hotels</p>
            </div>
            <div className="searchBar-headerlast text-end">
              <a href="#" className="text-md fw-medium text-primary active">Clear All</a>
            </div>
          </div>
        </div>

        <div className="filter-searchBar-body">
        <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Bed Type</h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                {[
                  { id: 'doublebed', label: '1 Double Bed' },
                  { id: '2bed', label: '2 Beds' },
                  { id: 'singlebed', label: '1 Single Bed' },
                  { id: '3beds', label: '3 Beds' },
                  { id: 'kingbed', label: 'King Bed' },
                ].map(bed => (
                  <li className="col-6" key={bed.id}>
                    <input type="checkbox" className="btn-check" id={bed.id} />
                    <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor={bed.id}>
                      {bed.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Pricing Range */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Pricing Range in ₹</h6>
            </div>
            <div className="searchBar-single-wrap">
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-full"
              />
              <p className="mt-2">₹{priceRange[0]} - ₹{priceRange[1]}</p>
            </div>
          </div>

          {/* Customer Ratings */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Customer Ratings</h6>
            </div>
            <div className="searchBar-single-wrap">
              <select className="form-select" value={selectedRating || ""} onChange={handleRatingChange}>
                <option value="">All Ratings</option>
                <option value="4.5">4.5+</option>
                <option value="4">4+</option>
                <option value="3.5">3.5+</option>
                <option value="3">3+</option>
              </select>
            </div>
          </div>

          {/* Amenities */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Amenities</h6>
            </div>
            <div className="searchBar-single-wrap">
              {allAmenities.map((amenity) => (
                <div className="form-check" key={amenity}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={amenity}
                    id={amenity}
                    checked={selectedAmenities.includes(amenity)}
                    onChange={handleAmenityChange}
                  />
                  <label className="form-check-label" htmlFor={amenity}>{amenity}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtersidebar;
