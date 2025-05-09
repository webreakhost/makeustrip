



import React from 'react';

const Populardom = () => {
  const routes = [
    {
      imgSrc: "/assets/img/destination/tr-1.webp",
      from: "Delhi",
      to: "Mumbai",
      type: "Round-trip",
      duration: "3 days",
      price: "₹10,999",
    },
    {
      imgSrc: "/assets/img/destination/tr-2.webp",
      from: "Bangalore",
      to: "Hyderabad",
      type: "Round-trip",
      duration: "2 days",
      price: "₹8,499",
    },
    {
      imgSrc: "/assets/img/destination/tr-3.webp",
      from: "Kolkata",
      to: "Chennai",
      type: "Round-trip",
      duration: "4 days",
      price: "₹12,299",
    },
    {
      imgSrc: "/assets/img/destination/tr-6.webp",
      from: "Ahmedabad",
      to: "Jaipur",
      type: "Round-trip",
      duration: "2 days",
      price: "₹7,999",
    },
  ];

  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-3">
            <div className="col-8">
              <div className="upside-heading">
                <h5 className="fw-bold fs-6 m-0">Explore Top Domestic Routes</h5>
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
            {routes.map((route, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                key={index}
              >
                <div className="pop-touritem">
                  <a
                    href="flight-search.html"
                    className="card rounded-3 border br-dashed h-100 m-0"
                  >
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img
                          src={route.imgSrc}
                          className="img-fluid"
                          alt="Flight Destination"
                        />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>{route.from}</span>
                          <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.3"
                                d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <span>{route.to}</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">
                            {route.type}
                          </span>
                          <span className="separate ellipsis-item__normal"></span>
                          <span className="ellipsis-item">{route.duration}</span>
                        </p>
                      </div>
                      <div className="flight-foots">
                        <h5 className="fs-5 low-price m-0">
                          <span className="tag-span">From</span>{" "}
                          <span className="price">{route.price}</span>
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Populardom;
