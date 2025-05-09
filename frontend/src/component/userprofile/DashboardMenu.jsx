import React from 'react';
// import './DashboardMenu.css'; // Import your CSS file here for styling

const DashboardMenu = () => {
    return (
        <div className="dashboard-menus  d-none d-lg-block -mt-10" style={{ backgroundColor: 'rgb(0, 49, 73)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <ul className="user-Dashboard-menu">
                            <li className="active">
                                <a href="user-profile">
                                    <i className="fa-regular fa-id-card me-2"></i>
                                    My Profile
                                </a>
                            </li>
                            <li>
                                <a href="my-bookings">
                                    <i className="fa-solid fa-ticket me-2"></i>
                                    My Booking
                                </a>
                            </li>
                            <li>
                                <a href="travelers">
                                    <i className="fa-solid fa-user-group me-2"></i>
                                    Travelers
                                </a>
                            </li>
                            <li>
                                <a href="payment-detail">
                                    <i className="fa-solid fa-wallet me-2"></i>
                                    Payment Details
                                </a>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardMenu;
