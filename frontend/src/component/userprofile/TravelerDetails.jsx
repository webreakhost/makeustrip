import React from "react";

const travelers = [
  {
    id: 1,
    name: "John Doe",
    destination: "Paris, France",
    travelDate: "March 10, 2024",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Emma Smith",
    destination: "Tokyo, Japan",
    travelDate: "April 5, 2024",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    destination: "New York, USA",
    travelDate: "May 15, 2024",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sophia Brown",
    destination: "Dubai, UAE",
    travelDate: "June 20, 2024",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel Wilson",
    destination: "London, UK",
    travelDate: "July 8, 2024",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Olivia Martinez",
    destination: "Sydney, Australia",
    travelDate: "August 12, 2024",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const TravelerDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Traveler Details
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {travelers.map((traveler) => (
          <div
            key={traveler.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center border border-gray-200"
          >
            <img
              src={traveler.image}
              alt={traveler.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">
              {traveler.name}
            </h3>
            <p className="text-gray-500">{traveler.destination}</p>
            <p className="text-sm text-gray-400">📅 {traveler.travelDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelerDetails;
