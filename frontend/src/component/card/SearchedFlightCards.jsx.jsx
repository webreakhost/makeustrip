import React from "react";

const SearchedFlightCards = ({ flight }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formattedDate = `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}`;

    return formattedDate;
  };

  const calcDuration = (departTime, arriveTime) => {
    const [departHour, departMinute] = departTime.split(":").map(Number);
    const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);

    const departTotalMinutes = departHour * 60 + departMinute;
    let arriveTotalMinutes = arriveHour * 60 + arriveMinute;

    if (arriveTotalMinutes < departTotalMinutes) {
      arriveTotalMinutes += 24 * 60;
    }

    const durationMinutes = arriveTotalMinutes - departTotalMinutes;
    const durationHour = Math.floor(durationMinutes / 60);
    const durationMinute = durationMinutes % 60;

    return `${durationHour}h ${durationMinute}m`;
  };

  return (
    // relative w-full p-4 border rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 max-w-6xl   mx-auto cursor-pointer hover:shadow-lg transition duration-150
    <div className="relative w-full p-4 border rounded-lg flex flex-col md:flex-row justify-between items-center gap-2 md:gap-8 max-w-full  sm:max-w-6xl mx-auto cursor-pointer hover:shadow-lg transition duration-150 px-14 sm:px-3">
      {/* Airline Logo and Name */}
      <div className="flex items-center gap-4 w-full md:w-1/4">
        <div className="h-[60px] w-[60px] bg-transparent flex justify-center items-center rounded-md">
          <img
            className="object-contain h-full"
            src={flight.airline.airlineLogo}
            alt={`${flight.airline.name} Logo`}
          />
        </div>
        <div>
          <p className="text-base font-semibold">{flight.airline.airlineName}</p>
        </div>
      </div>

      {/* Flight Time Details */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full md:w-2/4 text-center">
        <div>
          <p className="text-lg font-medium">{flight.from}</p>
          <p className="text-xl font-bold mt-1">{flight.departTime}</p>
          <p className="text-sm text-gray-500">{formatDate(flight.departDate)}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-300"></div>
          <div className="w-8 h-[1px] border border-blue-400 border-dashed"></div>
          <span className="text-sm bg-blue-100 text-blue-500 px-2 py-1 rounded-full">
            {calcDuration(flight.departTime, flight.arriveTime)}
          </span>
          <div className="w-8 h-[1px] border border-blue-400 border-dashed"></div>
          <div className="w-3 h-3 rounded-full bg-blue-300"></div>
        </div>

        <div>
          <p className="text-lg font-medium">{flight.to}</p>
          <p className="text-xl font-bold mt-1">{flight.arriveTime}</p>
          <p className="text-sm text-gray-500">{formatDate(flight.arriveDate)}</p>
        </div>
      </div>

      {/* Pricing and Booking */}
      <div className="flex flex-col items-center md:items-end w-full md:w-1/4">
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-xl font-bold">₹ {flight.price}</p>
        </div>
        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition w-full md:w-auto">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SearchedFlightCards;
