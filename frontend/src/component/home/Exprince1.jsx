



import React from "react";
import { FaStar } from "react-icons/fa"; // Import star icon

const Experience1 = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Section - Image */}
        <div className="relative w-full lg:w-1/2">
          <img
            src="/makeustripaboutus.png"
            alt="Experience"
            className="w-full "
          />
          
          {/* Floating Client Reviews & Rating */}
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
            
            {/* Avatar Group */}
            <div>
              <h6 className="text-sm font-medium">Clients</h6>
              <div className="flex space-x-1">
                <img src="/img2.jpg" alt="avatar" className="w-8 h-8 rounded-full border" />
                <img src="/img3.jpg" alt="avatar" className="w-8 h-8 rounded-full border" />
                <img src="/img3.jpg" alt="avatar" className="w-8 h-8 rounded-full border" />
                <img src="/img2.jpg" alt="avatar" className="w-8 h-8 rounded-full border" />
                <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-xs">
                  1K+
                </div>
              </div>
            </div>

            {/* Rating */}
            <div>
              <h6 className="text-sm font-medium">Rating</h6>
              <p className="text-lg font-bold text-yellow-500 flex items-center">
                4.5 <FaStar className="ml-1" />
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-full lg:w-1/2 space-y-4">
          <p className="text-blue-500 font-semibold uppercase text-sm">About Us</p>
          <h2 className="text-2xl font-bold text-gray-800">
            Discover the Best Travel Experience
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Make Us Trip offers holiday packages that fit different budgets and travel needs. Our team handles travel planning, hotel bookings, and ticket reservations. We work 24/7 to create smooth travel experiences. Whether you're planning a honeymoon, family vacation, or adventure tour, we take care of every detail for a stress-free trip.
          </p>

          {/* Statistics */}
          <div className="flex flex-wrap gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md text-center w-32">
              <h6 className="text-2xl font-bold text-gray-900">33</h6>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center w-32">
              <h6 className="text-2xl font-bold text-gray-900">78</h6>
              <p className="text-gray-500 text-sm">Destinations</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center w-32">
              <h6 className="text-2xl font-bold text-gray-900">25K</h6>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience1;
