import React, { useEffect, useRef, useState } from "react";
import AirplaneHead from "/airplaneHead.png";
import { toast } from "react-toastify";

const SeatReservation = ({
  setCurrentActiveForm,
  numberOfPassengers,
  setNumberOfPassengers,
  selectedSeats,
  setSelectedSeats,
  reservedSeats,
}) => {
  const seats = {
    A: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    B: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    C: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    D: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    E: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    F: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  };

  const [bookedSeats, setBookedSeats] = useState(reservedSeats);

  const handleNextClick = () => {
    if (numberOfPassengers === 0) {
      toast.warn("Please select at least one seat to proceed", {
        position: "top-right",
        autoClose: 5000,
      });
    } else {
      setCurrentActiveForm(1);
    }
  };

  const handleSeatClick = (row, seat) => {
    if (!bookedSeats.includes(row + seat)) {
      setSelectedSeats((prevSelectedSeats) => ({
        ...prevSelectedSeats,
        [row]: prevSelectedSeats[row]?.includes(seat)
          ? prevSelectedSeats[row].filter((s) => s !== seat)
          : [...(prevSelectedSeats[row] || []), seat],
      }));
    }
  };

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setContainerSize({ width: clientWidth, height: clientHeight });
      }
    };

    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);

    return () => {
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      const { width } = containerSize;
      if (width) {
        imageRef.current.style.width = width >= 768 ? `${width}px` : "auto";
        imageRef.current.style.height = width < 768 ? `${containerRef.current.clientHeight}px` : "auto";
      }
    }
  }, [containerSize]);

  useEffect(() => {
    setNumberOfPassengers(
      Object.values(selectedSeats).reduce((total, seats) => total + seats.length, 0)
    );
  }, [selectedSeats, setNumberOfPassengers]);

  const renderSeats = (row) => {
    return seats[row].map((seat) => (
      <div
        key={seat}
        className={`seatContainer ${
          selectedSeats[row]?.includes(seat)
            ? "selectedSeats"
            : bookedSeats.includes(row + seat)
            ? "bookedSeats"
            : "seatsHover"
        }`}
        onClick={() => handleSeatClick(row, seat)}
      >
        <p className="text-[15px]">{row}{seat}</p>
      </div>
    ));
  };

  const numPassengersText = `${Object.values(selectedSeats).reduce(
    (total, seats) => total + seats.length,
    0
  )} Passenger(s)`;

  return (
    <div className="my-5 bg-white border border-gray-200 rounded-2xl p-5">
      <p className="mb-5 text-4xl">Seat Booking</p>
      <p className="mb-2">{numPassengersText}</p>
      <div className="flex flex-col-reverse md:flex-row mt-5 -ml-3">
        <div
          ref={containerRef}
          className="flex flex-row md:flex-col gap-1 sm:gap-4 w-fit h-fit p-5 bg-[#f3f5f8] rounded-b-[15px] md:rounded-s-[15px] md:w-auto"
        >
          {Object.keys(seats).map((row) => (
            <div key={row} className="md:flex-row gap-1">
              {renderSeats(row)}
            </div>
          ))}
        </div>

        <div className="w-[150vw] hidden md:block mt-[0vw] ">
          <img
            ref={imageRef}
            src={AirplaneHead}
            alt="Airplane Head"
            className="h-[80vw] w-80 rotate-[270deg] md:rotate-0"
            style={{ height: `${containerSize.height + 160}px` }}
          />
        </div>
      </div>
      <button
        className="bg-blue-300 text-white px-5 md:px-10 py-2 rounded-full hover:bg-blue-500 duration-300 mt-2 md:mr-10"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default SeatReservation;




