




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../context/authContext';
import { FaUser } from "react-icons/fa";
// import { use } from 'react';

const AccountDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="btn-group account-drop">
      {/* Button to toggle dropdown */}
      <button
        type="button"
        className="btn btn-order-by-filt"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={showDropdown}
      >
        <div className="bg-gray-200 w-12 h-12 flex items-center justify-center rounded-half shadow">
          <FaUser className="text-gray-600 text-2xl" />
        </div>
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="dropdown-menu pull-right animated flipInX show">
          {/* Dropdown Header */}
          <div className="drp_menu_headr d-flex justify-content-between align-items-center">
            {/* <h4>Hi, {user.name}</h4> */}
            <button
              type="button"
              className="btn btn-md fw-medium btn-whites text-dark"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

          {/* Dropdown Items */}
          {/* <div className=''> */}
          <ul className='flex flex-col'>
            <li>
              <a href="/user-profile/">
                <i className="fa-regular fa-id-card me-2 pl-1 lg:pl-0"></i>
                My Profile
                {/* <span className="notti_coun style-1"></span> */}
                
              </a>
            </li>
            <li>
              <a href="/my-bookings/">
                <i className="fa-solid fa-ticket me-2 pl-4 lg:pl-0"></i>
                My Booking
              </a>
            </li>
            <li>
              <a href="/travelers/">
                <i className="fa-solid fa-user-group me-2 pl-0 lg:pl-0"></i>
                Travelers
              </a>
            </li>
            <li>
              <a href="/payment-detail/">
                <i className="fa-solid fa-wallet me-2 pl-10 lg:pl-0"></i>
                Payment Details
              </a>
            </li>
            
            {/* Admin Panel Section */}
            {isAdmin && (
              <li>
                <a href="/admin-panel">
                  <i className="fa-solid fa-tools me-2 pl-5 lg:pl-0"></i>
                  Admin Panel
                </a>
              </li>
            )}
            <li>
              <a onClick={handleLogout}>
                <i className="fa-solid fa-power-off me-2"></i>
                Sign Out
              </a>
            </li>
          </ul>

          </div>
          
        // </div>
      )}
    </div>
  );
};

export default AccountDropdown;



