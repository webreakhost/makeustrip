import React from 'react';

const Rental = () => {
  const rentalProperties = [
    {
      id: 1,
      imgSrc: "/assets/img/property/img-8.webp",
      type: "House",
      name: "Pagoda Partners Realty",
      details: ["3 Beds", "2 Baths", "2100 sqft"],
      discount: "15% Off",
      price: "$492",
      rating: 4.6,
      reviews: 142,
    },
    {
      id: 2,
      imgSrc: "/assets/img/property/img-1.webp",
      type: "House",
      name: "Strive Partners Realty",
      details: ["3 Beds", "2 Baths", "2100 sqft"],
      discount: "15% Off",
      price: "$492",
      rating: 4.6,
      reviews: 142,
    },
    {
      id: 3,
      imgSrc: "/assets/img/property/img-2.webp",
      type: "Villa",
      name: "Larkspur Partners Realty",
      details: ["3 Beds", "2 Baths", "2100 sqft"],
      discount: "15% Off",
      price: "$492",
      rating: 4.6,
      reviews: 142,
    },
    {
      id: 4,
      imgSrc: "/assets/img/property/img-3.webp",
      type: "Apartment",
      name: "Agile Real Estate Group",
      details: ["3 Beds", "2 Baths", "2100 sqft"],
      discount: "15% Off",
      price: "$492",
      rating: 4.6,
      reviews: 142,
    },
  ];

  return (
    <div>
      <section className="py-0">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-3">
            <div className="col-8">
              <div className="upside-heading">
                <h5 className="fw-bold fs-6 m-0">Featured Rental In Australia</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="text-end grpx-btn">
                <a href="#" className="btn btn-light-primary btn-md fw-medium">
                  More <i className="fa-solid fa-arrow-trend-up ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="row justify-content-center gy-4 gx-3">
            {rentalProperties.map((property) => (
              <div key={property.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <a href="#" className="card rounded-3 border br-dashed m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={property.imgSrc} className="img-fluid" alt={property.name} />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <div className="d-flex align-items-start justify-content-start flex-column">
                          <span className="city-destination label text-success bg-light-success mb-1">
                            {property.type}
                          </span>
                          <h4 className="city fs-6 m-0 fw-bold">
                            <span>{property.name}</span>
                          </h4>
                        </div>
                        <div className="detail ellipsis-container mt-3">
                          {property.details.map((detail, index) => (
                            <span key={index} className="ellipsis">
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flight-footer">
                        <div className="epocsic">
                          <span className="label d-inline-flex bg-light-danger text-danger mb-1">
                            {property.discount}
                          </span>
                          <h5 className="fs-5 low-price m-0">
                            <span className="tag-span">From</span> <span className="price">{property.price}</span>
                          </h5>
                        </div>
                        <div className="rates">
                          <div className="star-rates">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`fa-solid fa-star ${i < Math.round(property.rating) ? "active" : ""}`}
                              ></i>
                            ))}
                          </div>
                          <div className="rat-reviews">
                            <strong>{property.rating}</strong>
                            <span>({property.reviews} Reviews)</span>
                          </div>
                        </div>
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

export default Rental;
