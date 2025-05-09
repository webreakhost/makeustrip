import React from 'react'

const Dasborad = () => {
  return (
    // <div className="row align-items-center justify-content-center" style={{ backgroundColor: rgb('0, 49, 73') }}>
    <div
  className="row align-items-center justify-content-center"
  
>
    <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
        <button
            className="btn btn-dark fw-medium full-width d-block d-lg-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDashboard"
            aria-controls="offcanvasDashboard"
        >
            <i className="fa-solid fa-gauge me-2"></i>Dashboard Navigation
        </button>
        <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasDashboard"
            aria-labelledby="offcanvasScrollingLabel"
        >
            <div className="offcanvas-header gray-simple">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                    Offcanvas with body scrolling
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body p-0">
                <ul className="user-Dashboard-longmenu">
                    <li className="active">
                        <a href="user-profile">
                            <i className="fa-regular fa-id-card me-2"></i>My Profile
                        </a>
                    </li>
                    <li>
                        <a href="my-bookings">
                            <i className="fa-solid fa-ticket me-2"></i>My Booking
                        </a>
                    </li>
                    <li>
                        <a href="travelers">
                            <i className="fa-solid fa-user-group me-2"></i>Travelers
                        </a>
                    </li>
                    <li>
                        <a href="payment-detail">
                            <i className="fa-solid fa-wallet me-2"></i>Payment Details
                        </a>
                    </li>
                    
                    
                                   
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default Dasborad
