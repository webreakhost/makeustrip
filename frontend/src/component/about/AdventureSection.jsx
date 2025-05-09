


import React from "react";
import { FaStar, FaShieldAlt, FaClock, FaGlobe } from "react-icons/fa";
// import banner from "/assets/banner.avif"; // Ensure the path is correct
import banner from "/flightbanner.webp"; // Ensure the path is correct 

const AdventureSection = () => {
  return (
    <section className="bg-blue-100 py-12 px-6 lg:px-16">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={banner}
            alt="Adventure Banner"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="bg-white px-4 py-2 text-sm font-medium rounded-full shadow-md inline-block mb-4">
            Why Choose Make Us Trip?
          </span>
          <p className="text-gray-700 text-lg mb-6">
            We offer reliable and cost-effective travel solutions with
            hassle-free services. Our professional team ensures a smooth and
            enjoyable journey.
          </p>

          {/* Features List */}
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-gray-700">
                • <strong>24/7 Support:</strong> Our team is always available
                for bookings, modifications, or emergency help.
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-gray-700">
                • <strong>Affordable Packages:</strong> Get budget-friendly
                deals without sacrificing comfort.
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-gray-700">
                • <strong>Wide Network:</strong> Access top-rated hotels and
                transport options worldwide.
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-gray-700">
                • <strong>Easy Booking:</strong> Quick and simple reservation
                process for hassle-free planning.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-center bg-red-50 p-6 rounded-lg shadow-md">
          <FaGlobe className="text-red-500 text-3xl mb-4" />
          <h3 className="font-bold text-gray-800">300,000+ Experiences</h3>
          <p className="text-sm text-gray-600 text-center">
            Make memories around the world.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-md">
          <FaStar className="text-blue-500 text-3xl mb-4" />
          <h3 className="font-bold text-gray-800">Trusted Reviews</h3>
          <p className="text-sm text-gray-600 text-center">
            4.8 stars from 160,000+ Trustpilot reviews.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center bg-green-50 p-6 rounded-lg shadow-md">
          <FaClock className="text-green-500 text-3xl mb-4" />
          <h3 className="font-bold text-gray-800">Reserve Now, Pay Later</h3>
          <p className="text-sm text-gray-600 text-center">
            Book your spot first, pay later.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center bg-purple-50 p-6 rounded-lg shadow-md">
          <FaShieldAlt className="text-purple-500 text-3xl mb-4" />
          <h3 className="font-bold text-gray-800">Security Assurance</h3>
          <p className="text-sm text-gray-600 text-center">
            Data security through encryption.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdventureSection;
