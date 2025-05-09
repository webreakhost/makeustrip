



import React, { useState } from "react";
import BookTicketBox from "../component/flight/BookTicketBox";
import SearchedFlightCards from "../component/card/SearchedFlightCards.jsx";
import { toast } from "react-toastify";
import { BACKENDURL } from "../Config/Config";
import { Link, NavLink } from "react-router-dom";
import Offer from '../component/flight/Offer';
import Populardom from '../component/flight/Populardom';
import Populardest from '../component/flight/Populardest';
import Googleios from '../component/flight/Googleios';
import Rental from '../component/flight/Rental';
import PopularRoute from '../component/flight/Popularroute';
import Calltoaction from '../component/home/Calltoaction';
// import Head from '../component/common/Head';
import Head from "../component/Head.jsx";

const Flighthome = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
  });

  const [searchedFlights, setSearchedFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");
  const [selectedAirline, setSelectedAirline] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");

  const handleFormDataChange = (updatedFormData) => {
    setFormData(updatedFormData);
  };

  const handleFlightSearch = async (e) => {
    e.preventDefault();

    if (!formData.from || !formData.to) {
      setSearchStatus("Enter flight details to search flights");
      return;
    }

    try {
      const response = await fetch(`${BACKENDURL}/api/v1/flights/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.status === false) {
        toast.error(data.message);
        setSearchedFlights([]);
        setFilteredFlights([]);
        setSearchStatus("No flights found for the selected route");
      } else {
        setSearchedFlights(data);
        setFilteredFlights(data);
        setSearchStatus(
          <>
            <b>{data.length}</b> flights found from <b>{formData.from}</b> to <b>{formData.to}</b>
          </>
        );
      }
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  const handleAirlineFilter = (airlineName) => {
    setSelectedAirline(airlineName);
    const filtered = searchedFlights.filter(
      (flight) => flight.airline.airlineName === airlineName
    );
    setFilteredFlights(filtered);
  };

  const handlePriceSort = (order) => {
    const sortedFlights = [...filteredFlights].sort((a, b) => {
      if (order === "low-to-high") return a.price - b.price;
      if (order === "high-to-low") return b.price - a.price;
      return 0;
    });
    setFilteredFlights(sortedFlights);
    setSortByPrice(order);
  };

  return (
    <>
      <Head
        title="Book Flights - Make Us Trip"
        description="Find cheap flight deals with Make Us Trip!"
        keywords="flights, cheap flights, book flights"
        image="https://www.makeustrip.in/flights-page-banner.png"
        url="https://www.makeustrip.in/flights"
      />

      <div>
        <BookTicketBox
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handleFlightSearch={handleFlightSearch}
        />

        <p className="py-5">{searchStatus}</p>

        {searchedFlights.length > 0 && (
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-lg ${sortByPrice === "low-to-high" ? "bg-orange-500" : "bg-orange-50"}`}
                onClick={() => handlePriceSort("low-to-high")}
              >
                Low to High
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${sortByPrice === "high-to-low" ? "bg-orange-500" : "bg-orange-50"}`}
                onClick={() => handlePriceSort("high-to-low")}
              >
                High to Low
              </button>
            </div>

            <div>
              <select
                className="px-4 py-2 rounded-lg"
                value={selectedAirline}
                onChange={(e) => handleAirlineFilter(e.target.value)}
              >
                <option value="">Filter by Airline</option>
                {[...new Set(searchedFlights.map(flight => flight.airline.airlineName))].map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {filteredFlights.length > 0 && (
          <div className="mt-5">
            {filteredFlights.map((flight, index) => (
              <NavLink
                to={`/book/${flight._id}`}
                key={index}
                className="lg:w-full w-fit"
              >
                <SearchedFlightCards flight={flight} />
              </NavLink>
            ))}
          </div>
        )}

        <Offer />
        <Populardom />
        <Populardest />
        <Googleios />
        <Rental />
        <PopularRoute />
        <Calltoaction />
      </div>
    </>
  );
};

export default Flighthome;