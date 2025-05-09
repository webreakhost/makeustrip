import React from 'react'

const Filter = () => {
    return (
        <div className="filter-searchBar-head border-bottom">
            <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
                <div className="searchBar-headerfirst">
                    <h6 className="fw-bold fs-5 m-0">Filters</h6>
                    <p className="text-md text-muted m-0">Showing 180 Hotels</p>
                </div>
                <div className="searchBar-headerlast text-end">
                    <a href="#" class="text-md fw-medium text-primary active">Clear All</a>
                </div>
            </div>
        </div>
    )
}

export default Filter
