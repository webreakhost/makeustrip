


import React from 'react';

const TourItem = ({ discount, imageSrc, location, tripDetails, priceRange }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
      <div className="pop-touritems">
        <a href="property-list" className="card rounded-3 br-dashed border-2 m-0">
          <div className="offers-container d-flex align-items-center justify-content-start p-2">
            <div className="offers-flex position-relative">
              <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2">
                <span className="label text-light bg-danger fw-medium">{discount}</span>
              </div>
              <div
                className="offers-pic"
                style={{
                  width: '110px',
                  height: '110px',
                  flexShrink: 0,
                }}
              >
                <img
                  src={imageSrc}
                  className="img-fluid rounded"
                  width="110"
                  height="110"
                  loading="lazy"
                  style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                  alt={`Tour image of ${location}`}
                />
              </div>
            </div>
            <div className="offers-captions ps-3">
              <h4 className="city fs-6 m-0 fw-bold">
                <span>{location}</span>
              </h4>
              <p className="detail ellipsis-container">
                {tripDetails.map((detail, index) => (
                  <React.Fragment key={index}>
                    <span className="ellipsis-item__normal">{detail}</span>
                    {index < tripDetails.length - 1 && (
                      <span className="separate ellipsis-item__normal">, </span>
                    )}
                  </React.Fragment>
                ))}
              </p>
              <div className="booking-wrapes d-flex align-items-center justify-content-between">
                <h5 className="fs-5 low-price m-0">
                  <span className="tag-span">From</span>{' '}
                  <span className="price">{priceRange}</span>
                </h5>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const Toursoffer = () => {
  const tours = [
    {
      discount: '20% Off',
      imageSrc: '/assets/img/city/ct-6.webp',
      location: 'Delhi',
      tripDetails: ['Round-trip', '3D/4N', '3 Person'],
      priceRange: '₹20000 - ₹30000',
    },
    {
      discount: '15% Off',
      imageSrc: '/assets/img/city/ct-5.webp',
      location: 'Mumbai',
      tripDetails: ['Round-trip', '3D/4N', '2 Person'],
      priceRange: '₹40000 - ₹50000',
    },
    {
      discount: '30% Off',
      imageSrc: '/assets/img/city/ct-1.webp',
      location: 'Goa',
      tripDetails: ['Round-trip', '3D/4N', '3 Person'],
      priceRange: '₹60000 - ₹70000',
    },
  ];

  return (
    <div>
      <section className="-mt-10 pb-0">
        <div className="container">
          <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-3 g-4">
            {/* <h2 className=" text-4xl text-center mb-4 text-red-700" style={{ color: 'rgb(05, 44, 34)' }}>
              Best Make us Trip Destination in Package
            </h2> */}

<h2 className="text-4xl text-center mb-4 text-red-700">
  Best Make US Trip Destination Package
</h2>
            {tours.map((tour, index) => (
              <TourItem
                key={index}
                discount={tour.discount}
                imageSrc={tour.imageSrc}
                location={tour.location}
                tripDetails={tour.tripDetails}
                priceRange={tour.priceRange}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Toursoffer;
