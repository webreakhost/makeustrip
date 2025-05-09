import React, { useContext } from 'react'
// import
import { authContext } from "../../context/authContext";

const Usercard = () => {
    const {user} = useContext(authContext)
  return (
    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card rounded-2 me-xl-5 mb-4">
                            <div className="card-top bg-primary position-relative">
                                <div className="position-absolute end-0 top-0 mt-4 me-3">
                                    <a href="my-bookings" className="square--40 circle bg-light-dark text-light">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    </a>
                                </div>
                                <div className="py-5 px-3">
                                    <div className="crd-thumbimg text-center">
                                        <div className="p-2 d-flex align-items-center justify-content-center brd">
                                            <img
                                                src="/assets/img/team-1.jpg"
                                                className="img-fluid circle"
                                                width="120"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="crd-capser text-center">
                                        <h5 className="mb-0 text-light fw-semibold">{user.name}</h5>
                                        <span className="text-light opacity-75 fw-medium text-md">
                                            <i className="fa-solid fa-location-dot me-2"></i>Delhi, India
                                        </span>
                                    </div>
                                </div>
                            </div> 

                            {/* Profile Completion */}
                            <div className="card-middle mt-5 mb-4 px-4">
                                <div className="revs-wraps mb-3">
                                    <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Complete Your Profile</span>
                                        <span className="text-dark fw-semibold text-md">75%</span>
                                    </div>
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Example"
                                        aria-valuenow="87"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ height: "7px" }}
                                    >
                                        <div className="progress-bar bg-success" style={{ width: "87%" }}></div>
                                    </div>
                                </div>
                                {/* <div className="crd-upgrades">
                                    <button className="btn btn-light-primary fw-medium full-width rounded-2" type="button">
                                        <i className="fa-solid fa-sun me-2"></i>Upgrade Pro
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div> 
  )
}

export default Usercard
