


import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Herobanner = () => {
  const banners = useMemo(
    () => [
      {
        id: 1,
        title: "Start Your Trip with Make Us Trip",
        description:
          "Take a little break from the work stress of everyday. Discover, plan trips, and explore beautiful destinations.",
        buttonText: "Explore More",
        // background: "/flightbanner.webp",
        background: "/Flight Ticket1.webp",
      },
      {
        id: 3,
        title: "Wander. Explore. Experience.",
        description:
          "Escape the ordinary and explore breathtaking destinations around the world. Find the perfect getaway tailored just for you!",
        buttonText: "Book Now",
        background: "/tourbanner.webp",
      },
      {
        id: 4,
        title: "Your Perfect Trip Starts Here!",
        description:
          "Find exclusive travel deals, flight bookings, and vacation packages to your dream destinations. Let’s make memories together!",
        buttonText: "Discover More",
        background: "/hotelbanner.webp",
      },
      {
        id: 5,
        title: "Adventure is Calling!",
        description:
          "From tropical beaches to snowy peaks, explore destinations that inspire your soul. Where will your next journey take you?",
        buttonText: "Find Your Escape",
        background: "/car image.webp",
      },
    ],
    []
  );

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={banner.id}>
          <div
            className="d-flex align-items-center justify-content-center text-center"
            style={{
              position: "relative",
              width: "100%",
              minHeight: "595px",
              overflow: "hidden",
            }}
          >
            {/* Optimized Image */}
            <img
              src={banner.background}
              alt={banner.title}
              // width="1920"
              // height="595"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
              }}
            />

            {/* Dark Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            ></div>

            {/* Banner Content */}
            <div
              style={{
                position: "relative",
                padding: "20px",
                zIndex: 2,
              }}
            >
              <h1 className="text-5xl text-white">{banner.title}</h1>
              <p className="fs-5 fw-light text-white">{banner.description}</p>
              <p className="mt-5">
                <a className="btn btn-primary px-5" href="flight">
                  {banner.buttonText}
                  <i className="fa-solid fa-arrow-trend-up ms-2"></i>
                </a>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Herobanner;