import React from "react";

// Reusable HotelCard Component
const HotelCard = ({ imgSrc, name, location, distance, price, oldPrice, rating, reviews, discount }) => {
  return (
    <div className="carousel-cell">
      <div className="pop-touritem">
        <a href="#" className="card rounded-3 border br-dashed m-0">
          <div className="flight-thumb-wrapper">
            <div className="popFlights-item-overHidden">
              <img src={imgSrc} className="img-fluid" alt={name} />
            </div>
          </div>
          <div className="touritem-middle position-relative p-3">
            <div className="touritem-flexxer">
              <h4 className="city fs-6 m-0 fw-bold">
                <span>{name}</span>
              </h4>
              <p className="detail ellipsis-container">
                <span className="ellipsis-item__normal">{location}</span>
                <span className="separate ellipsis-item__normal"></span>
                <span className="ellipsis-item">{distance}</span>
              </p>
              <div className="touritem-centrio mt-4">
                <div className="d-block position-relative">
                  <span className="label bg-light-success text-success">
                    Free Cancellation Till 10 Aug 23
                  </span>
                </div>
                <div className="aments-lists mt-2">
                  <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                    <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center">
                      <i className="fa-solid fa-check text-success me-1"></i>Cooling
                    </li>
                    <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center">
                      <i className="fa-solid fa-check text-success me-1"></i>Pet Allow
                    </li>
                    <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center">
                      <i className="fa-solid fa-check text-success me-1"></i>Free WiFi
                    </li>
                    <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center">
                      <i className="fa-solid fa-check text-success me-1"></i>Food
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="trsms-foots mt-4">
              <div className="flts-flex d-flex align-items-end justify-content-between">
                <div className="flts-flex-strat">
                  <div className="d-flex align-items-center justify-content-start">
                    <span className="label bg-seegreen text-light">{discount} Off</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="text-dark fw-bold fs-4">${price}</div>
                    <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">
                      ${oldPrice}
                    </div>
                  </div>
                  <div className="d-flex align-items-start flex-column">
                    <div className="text-muted-2 text-sm">Per Night</div>
                  </div>
                </div>
                <div className="flts-flex-end">
                  <div className="row align-items-center justify-content-end gx-2">
                    <div className="col-auto text-start text-md-end">
                      <div className="text-md text-dark fw-medium">Exceptional</div>
                      <div className="text-md text-muted-2">{reviews} reviews</div>
                    </div>
                    <div className="col-auto">
                      <div className="square--40 rounded-2 bg-primary text-light">{rating}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};




import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Popularhotel = () => {
  // Sample data for hotels
  const hotels = [
    {
      imgSrc: "/assets/img/hotel/hotel-8.webp",
      name: "Value Hotel Balestier",
      location: "Delhi",
      distance: "3.5 Km From Delhi",
      price: 59,
      oldPrice: 79,
      rating: 4.8,
      reviews: 3014,
      discount: "15%",
    },
    {
      imgSrc: "/assets/img/hotel/hotel-5.webp",
      name: "Mercure Singapore Tyrwhitt",
      location: "Delhi",
      distance: "3.5 Km From Delhi",
      price: 59,
      oldPrice: 79,
      rating: 4.8,
      reviews: 3014,
      discount: "15%",
    },
    {
      imgSrc: "/assets/img/hotel/hotel-4.webp",
      name: "Hotel Calmo Chinatown",
      location: "Delhi",
      distance: "3.5 Km From Delhi",
      price: 59,
      oldPrice: 79,
      rating: 4.8,
      reviews: 3014,
      discount: "15%",
    },
    {
      imgSrc: "/assets/img/hotel/hotel-8.webp",
      name: "Value Hotel Balestier",
      location: "Delhi",
      distance: "3.5 Km From Delhi",
      price: 59,
      oldPrice: 79,
      rating: 4.8,
      reviews: 3014,
      discount: "15%",
    },
    {
      imgSrc: "/assets/img/hotel/hotel-4.webp",
      name: "Hotel Calmo Chinatown",
      location: "Delhi",
      distance: "3.5 Km From Delhi",
      price: 59,
      oldPrice: 79,
      rating: 4.8,
      reviews: 3014,
      discount: "15%",
    },
    {
      imgSrc: "/assets/img/hotel/hotel-5.webp",
      name: "Hotel Calmo Chinatown",
      location: "Delhi",
      distance: "3.5 Km From Delhi",
      price: 59,
      oldPrice: 79,
      rating: 4.8,
      reviews: 3014,
      discount: "15%",
    },
    {
        imgSrc: "/assets/img/hotel/hotel-6.webp",
        name: "Hotel Calmo Chinatown",
        location: "Delhi",
        distance: "3.5 Km From Delhi",
        price: 59,
        oldPrice: 79,
        rating: 4.8,
        reviews: 3014,
        discount: "15%",
      },
      {
        imgSrc: "/assets/img/hotel/hotel-7.webp",
        name: "Hotel Calmo Chinatown",
        location: "Delhi",
        distance: "3.5 Km From Delhi",
        price: 59,
        oldPrice: 79,
        rating: 4.8,
        reviews: 3014,
        discount: "15%",
      },
  ];

  return (
    <div>
      <section className="py-0">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-3">
            <div className="col-8">
              <div className="upside-heading">
                <h5 className="fw-bold fs-6 m-0">Explore Top Hotels & Resorts</h5>
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
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 p-0">
              {/* Swiper Carousel */}
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={3} // Display 3 hotels at a time
                breakpoints={{
                  640: { slidesPerView: 1 }, // For smaller screens
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {hotels.map((hotel, index) => (
                  <SwiperSlide key={index}>
                    <HotelCard {...hotel} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Popularhotel;
