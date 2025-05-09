





import React from 'react';

// Example data structure
const routesData = [
  {
    tabName: 'Flights To Popular Countries',
    key: 'popular-countries',
    destinations: [
      ['France', 'Turkey', 'Japan', 'Italy', 'Poland'],
      ['South Korea', 'Spain', 'Mexico', 'Austria', 'Canada'],
      ['Thailand', 'New York', 'Russia', 'Vietnam', 'Denver'],
      ['Liverpool', 'Indonesia', 'China', 'Armenia', 'Portugal'],
      ['India', 'Malaysia', 'Pakistan', 'Las Vegas', 'Singapore'],
    ],
  },
  {
    tabName: 'Flights To Popular Destinations',
    key: 'popular-destinations',
    destinations: [
      ['Paris', 'Istanbul', 'Tokyo', 'Venice', 'Warsaw'],
      ['Seoul', 'Barcelona', 'Mexico City', 'Vienna', 'Toronto'],
    ],
  },
  // Add more tabs as needed
];

const PopularRoute = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between mb-3">
          <div className="col-8">
            <h5 className="fw-bold fs-6 m-0">All International Routes</h5>
          </div>
          <div className="col-4 text-end">
            <button className="btn btn-light-primary btn-md fw-medium">
              More
              <i className="fa-solid fa-arrow-trend-up ms-2"></i>
            </button>
          </div>
        </div>

        <ul className="nav nav-pills medium mb-3" id="pills-tab" role="tablist">
          {routesData.map((route, index) => (
            <li className="nav-item mb-2" key={route.key}>
              <button
                className={`nav-link ${index === 0 ? 'active' : ''}`}
                id={`pills-${route.key}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${route.key}`}
                type="button"
                role="tab"
                aria-controls={`pills-${route.key}`}
                aria-selected={index === 0}
              >
                {route.tabName}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content pt-2" id="pills-tabContent">
          {routesData.map((route, index) => (
            <div
              key={route.key}
              className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
              id={`pills-${route.key}`}
              role="tabpanel"
              aria-labelledby={`pills-${route.key}-tab`}
            >
              <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">
                {route.destinations.map((column, colIndex) => (
                  <div className="col" key={colIndex}>
                    <ul className="flightsLists-Wraps p-0">
                      {column.map((destination, destIndex) => (
                        <li key={destIndex}>
                          <a href="#" className="text-md text-muted-2">
                            <span>Flight</span> To <span>{destination}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoute;
