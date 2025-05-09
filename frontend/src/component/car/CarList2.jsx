




import React, { useState } from "react";
import CarCard2 from "./CarCard2";

const CarList2 = ({ cars }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 9; // Show 9 cars per page

  // Calculate total pages
  const totalPages = Math.ceil(cars.length / carsPerPage);

  // Get current cars to display
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Handle page change
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      {/* Cars List */}
      {currentCars.map((car, index) => (
        <div
          key={index}
          className="w-full max-w-7xl bg-white border border-gray-300 rounded-lg shadow-md p-4"
        >
          <CarCard2 car={car} />
        </div>
      ))}

      {/* Pagination Section */}
      {cars.length > carsPerPage && (
        <div className="flex items-center gap-2 mt-6">
          {/* Previous Button */}
          <button
            onClick={() => paginate(currentPage - 1)}
            className={`px-4 py-2 rounded-lg border bg-gray-200 hover:bg-gray-300 transition ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => paginate(currentPage + 1)}
            className={`px-4 py-2 rounded-lg border bg-gray-200 hover:bg-gray-300 transition ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CarList2;
