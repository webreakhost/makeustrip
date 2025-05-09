




import React, { useState, useMemo, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import HotelCard from "./HotelCard";
import Exprience from "../home/Exprience";
import Filtersidebar from "./Filtersidebar";

const HotelCity = () => {
  const { city } = useParams();
  const location = useLocation();
  const allHotels = location.state?.hotels || [];

  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const hotelsPerPage = 9;

  const filteredHotels = useMemo(() => {
    return allHotels.filter((hotel) => {
      const inPriceRange = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
      const matchesRating = selectedRating ? hotel.rating >= selectedRating : true;
      const matchesAmenities =
        selectedAmenities.length === 0 ||
        selectedAmenities.every((amenity) => hotel.amenities.includes(amenity));
      return inPriceRange && matchesRating && matchesAmenities;
    });
  }, [allHotels, priceRange, selectedRating, selectedAmenities]);

  const totalPages = useMemo(() => Math.ceil(filteredHotels.length / hotelsPerPage), [filteredHotels.length]);

  const currentHotels = useMemo(() => {
    const indexOfLastHotel = currentPage * hotelsPerPage;
    const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
    return filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);
  }, [filteredHotels, currentPage]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handlePriceChange = useCallback((e) => {
    setPriceRange([0, parseInt(e.target.value)]);
  }, []);

  const handleRatingChange = useCallback((e) => {
    const val = e.target.value;
    setSelectedRating(val ? Number(val) : null);
  }, []);

  const handleAmenityChange = useCallback((e) => {
    const amenity = e.target.value;
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  }, []);

  return (
    <>
      <div className="container mx-auto -mt-6 flex flex-col md:flex-row bg-gray-50">
        {/* Dynamic Filter Sidebar */}
        {/* <div className="hidden"> */}
          <Filtersidebar
            hotels={allHotels}
            priceRange={priceRange}
            handlePriceChange={handlePriceChange}
            selectedRating={selectedRating}
            handleRatingChange={handleRatingChange}
            selectedAmenities={selectedAmenities}
            handleAmenityChange={handleAmenityChange}
          />
        {/* </div> */}
        

        {/* Hotel Listings */}
        <div className="w-full md:w-4/5 p-4 -mt-8">
          <h1 className="text-4xl font-bold text-gray-500 text-center mt-5 mb-8">Hotels in {city}</h1>
          <h2 className="text-center mb-3 text-2xl font-bold text-red-700">Available Hotels</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {currentHotels.length > 0 ? (
              currentHotels.map((hotel) => (
                <HotelCard key={hotel._id} hotel={hotel} />
              ))
            ) : (
              <p className="text-center text-gray-500">No hotels found. Try adjusting filters.</p>
            )}
          </div>

          {/* Pagination */}
          {filteredHotels.length > hotelsPerPage && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 rounded-l disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 rounded-r disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HotelCity;
