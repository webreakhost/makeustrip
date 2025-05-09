



import React from 'react';

const destinations = [
  {
    name: 'Delhi',
    img: '/assets/img/city/ct-12.webp',
    stats: {
      hotels: 15,
      flights: 30,
      cars: 20,
      tours: 25,
      activities: 40,
    },
  },
  {
    name: 'Mumbai',
    img: '/assets/img/city/ct-6.webp',
    stats: {
      hotels: 18,
      flights: 35,
      cars: 22,
      tours: 28,
      activities: 42,
    },
  },
  {
    name: 'Jaipur',
    img: '/assets/img/city/ct-8.webp',
    stats: {
      hotels: 12,
      flights: 20,
      cars: 15,
      tours: 18,
      activities: 30,
    },
  },
  {
    name: 'Goa',
    img: '/assets/img/city/ct-9.webp',
    stats: {
      hotels: 20,
      flights: 40,
      cars: 25,
      tours: 35,
      activities: 50,
    },
  },
];

const Populardest = () => {
  return (
    <div>
      <section className="pt-0 pb-5">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-3">
            <div className="col-8">
              <div className="upside-heading">
                <h5 className="fw-bold fs-6 m-0">Browse Popular Destinations</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="text-end grpx-btn">
                <a href="#" className="btn btn-light-primary btn-md fw-medium">
                  More<i className="fa-solid fa-arrow-trend-up ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="row justify-content-center gy-4 gx-3">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
              >
                <div className="cardCities cursor rounded-2">
                  <div className="cardCities-image ratio ratio-4">
                    <img
                      src={destination.img}
                      className="img-fluid object-fit"
                      alt={`${destination.name} image`}
                    />
                  </div>

                  <div className="citiesCard-content d-flex flex-column justify-content-between text-center px-4 py-4">
                    <div className="cardCities-bg"></div>

                    <div className="citiesCard-topcaps">
                      <div className="d-flex align-items-center justify-content-center flex-wrap">
                        <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">
                          {destination.stats.hotels} Hotels
                        </div>
                        <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">
                          {destination.stats.flights} Flights
                        </div>
                        <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">
                          {destination.stats.cars} Cars
                        </div>
                        <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">
                          {destination.stats.tours} Tours
                        </div>
                        <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">
                          {destination.stats.activities} Activities
                        </div>
                      </div>
                    </div>

                    <div className="citiesCard-bottomcaps">
                      <h4 className="text-light fs-3 mb-3">{destination.name}</h4>
                      <button className="btn btn-whitener full-width fw-medium">
                        Discover<i className="fa-solid fa-arrow-trend-up ms-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Populardest;
