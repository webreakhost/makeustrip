import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  FiHome,
  FiTag,
  FiUsers,
  FiList,
  FiGlobe,
  FiMessageCircle,
  FiPlusCircle,
  FiSettings,
} from "react-icons/fi"; // Correct icons for sections
// Ensure this is correctly imported
// import { FiPlusCircle } from "react-icons/fi";
import Dashboard from "./Dashboard";



const Adminhome = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // To get the current path

  const [isOpen, setIsOpen] = useState(false); 

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  const isAdminPage = location.pathname === "/admin-panel"; // Check if it's the admin home page

  return (
    <div
      className={`flex flex-col md:flex-row h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`w-full md:w-64 ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        } shadow-md md:h-full md:flex-shrink-0`}
      >
        {/* <div className="p-4">
          <h1 className="text-xl font-bold flex items-center gap-2 text-gray-800 dark:text-white">
            <FiHome className="text-blue-500" />
            Geotrip Admin
          </h1>
        </div> */}
        <nav className="mt-0 space-y-1">
          <NavLink
            to="/admin-panel/dashboard"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiHome className="text-blue-500" />
            Dashboard
          </NavLink>
          
          <NavLink
            to="/admin-panel/clients"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiUsers className="text-yellow-500" />
            Clients
          </NavLink>
          <NavLink
            to="/admin-panel/ticketlist"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiList className="text-orange-500" />
            Ticket List
          </NavLink>

          <NavLink
            to="/admin/cancelled-ticket"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiList className="text-orange-500" />
            Cancelled-ticket
          </NavLink>
          
          <NavLink
            to="/admin-panel/add-airline"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiPlusCircle className="text-teal-500" />
            Add Airlines
          </NavLink>
          <NavLink
            to="/admin-panel/add-flight"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiPlusCircle className="text-indigo-500" />
            Add Flight
          </NavLink>

          


<div className="relative">
      {/* Parent Link */}
      <div
        onClick={() => setIsOpen(!isOpen)} // Toggle Dropdown
        className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300 cursor-pointer"
      >
        <FiPlusCircle className="text-teal-500" />
        <span>Add hotel</span>
      </div>

      {/* Dropdown Links */}
      {isOpen && (
        <div className="absolute left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
          <NavLink
            to="/admin-panel/add-hotel"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Add Hotel
          </NavLink>
          <NavLink
            to="/admin-panel/add-room"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Add Room
          </NavLink>
        </div>
      )}
    </div>

          <NavLink
            to="/admin-panel/add-car"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiPlusCircle className="text-teal-500" />
            Add Car
          </NavLink>

          <NavLink
            to="/admin-panel/add-rental"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiPlusCircle className="text-teal-500" />
            Add rental
          </NavLink>
          <NavLink
            to="/admin-panel/usersupport"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiSettings className="text-gray-500" />
            User support
          </NavLink>

          

          {/* rolechange */}
          <div className="p-3">
            <button
              className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300"
              onClick={handleDarkModeToggle}
            >
              <span>Dark Mode</span>
              <input
                type="checkbox"
                className="form-checkbox"
                checked={darkMode}
                onChange={handleDarkModeToggle}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-6 overflow-y-auto ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        }`}
      >
        {isAdminPage ? <Dashboard/> : <Outlet />}
      </div>
    </div>
  );
};

export default Adminhome;