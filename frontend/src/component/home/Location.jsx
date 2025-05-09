




import React from 'react';

// Reusable component for individual location cards
const LocationCard = ({ imageSrc, cityName, hotels, rentals }) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
      <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
        <div className="destination-card-wraps position-relative">
          <div className="destination-card-thumbs">
            <div className="destinations-pics">
              <a href="#">
                <img src={imageSrc} className="img-fluid" alt={cityName} />
              </a>
            </div>
          </div>
          <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
            <div className="exploterr-text">
              <h3 className="text-light fw-bold mb-1">{cityName}</h3>
              <p className="detail ellipsis-container text-light">
                <span className="ellipsis-item__normal">{hotels} hotels</span>
                <span className="separate ellipsis-item__normal"></span>
                <span className="ellipsis-item">{rentals} Rental</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Location component
const Location = () => {
  const locations = [
    { imageSrc: '/assets/img/city/ct-7.png', cityName: 'New York', hotels: 10, rentals: 5 },
    { imageSrc: '/assets/img/city/ct-2.png', cityName: 'Los Angeles', hotels: 12, rentals: 4 },
    { imageSrc: '/assets/img/city/ct-3.png', cityName: 'San Diego', hotels: 8, rentals: 6 },
    { imageSrc: '/assets/img/city/ct-4.png', cityName: 'San Francisco', hotels: 32, rentals: 12 },
    { imageSrc: '/assets/img/city/ct-5.png', cityName: 'Houston', hotels: 22, rentals: 16 },
    { imageSrc: '/assets/img/city/ct-6.png', cityName: 'San Jose', hotels: 25, rentals: 15 },
    { imageSrc: '/assets/img/city/ct-1.png', cityName: 'Denver', hotels: 29, rentals: 14 },
    { imageSrc: '/assets/img/city/ct-10.png', cityName: 'California', hotels: 22, rentals: 12 },
  ];

  return (
    <div>
      <section className="gray-simple">
        <div className="container">
          {/* Section Heading */}
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
              <div className="secHeading-wrap text-center mb-5">
                <h2>Popular Location To Stay</h2>
                <p>Cicero famously orated against his political opponent in Mumbai.</p>
              </div>
            </div>
          </div>

          {/* Location Cards */}
          <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-3">
            {locations.map((location, index) => (
              <LocationCard
                key={index}
                imageSrc={location.imageSrc}
                cityName={location.cityName}
                hotels={location.hotels}
                rentals={location.rentals}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
