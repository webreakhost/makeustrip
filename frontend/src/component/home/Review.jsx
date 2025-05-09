





import React from "react";

const Review = () => {
  const reviews = [
    {
      name: "Aman Diwakar",
      country: "India",
      img: "/assets/img/team-1.webp",
      stars: 4,
      review: "Make Us Trip made my vacation stress-free! The itinerary was well-planned, the hotels were excellent, and the customer service was outstanding. Highly recommend!.",
    },
    {
      name: "Kunal M. Thakur",
      country: "India",
      img: "/assets/img/team-2.webp",
      stars: 4,
      review: "Had an amazing travel experience with Make Us Trip! From hassle-free booking to seamless execution, everything was perfect. Can’t wait for my next trip!",
    },
    {
      name: "Divya Talwar",
      country: "India",
      img: "/assets/img/team-3.webp",
      stars: 4,
      review: "Best travel platform! Got great deals on flights and hotels. The customer support was super helpful, making my journey smooth and enjoyable. 10/10 experience",
    },
    {
      name: "Karan Maheshwari",
      country: "India",
      img: "/assets/img/team-4.webp",
      stars: 4,
      review: "Loved the trip! The team ensured every detail was taken care of, from transport to sightseeing. A truly memorable experience with Make Us Trip!",
    },
    {
      name: "Ritika Mathur",
      country: "India",
      img: "/assets/img/team-5.webp",
      stars: 4,
      review: "Highly professional and reliable travel service! The trip was perfectly organized, and I explored some breathtaking destinations without any worries. Will book again!",
    },
  ];

  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <span key={i} className="me-1 text-xs text-warning">
        <i className="fa-solid fa-star"></i>
      </span>
    ));
  };

  return (
    <div>
      <section
        className="gray-simple bg-cover"
        style={{
          background: "url(/assets/img/reviewbg.png) no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
              <div className="secHeading-wrap text-center mb-5">
                <h5 className="text-4xl text-red-700">Your Travel Stories with Make Us Trip</h5>
                <p className="text-2xl mt-2">
                  Hear from Our Happy Travelers! At Make Us Trip, we believe every journey should be memorable, hassle-free, and filled with joy.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-4 g-3">
            {reviews.map((review, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card border rounded-3">
                  <div className="card-body">
                    <div className="position-absolute top-0 end-0 mt-3 me-3">
                      <span className="square--40 circle text-primary bg-light-primary">
                        <i className="fa-solid fa-quote-right"></i>
                      </span>
                    </div>
                    <div className="d-flex align-items-center flex-thumbes">
                      <div className="revws-pic">
                        <img
                          src={review.img}
                          className="img-fluid rounded-2"
                          width="80"
                          height="80"
                          loading="lazy"
                          alt={`Photo of ${review.name}`}
                        />
                      </div>
                      <div className="revws-caps ps-3">
                        <h6 className="fw-bold fs-6 m-0">{review.name}</h6>
                        <p className="text-muted-2 text-md m-0">{review.country}</p>
                        <div className="d-flex align-items-center justify-content-start">
                          {renderStars(review.stars)}
                        </div>
                      </div>
                    </div>
                    <div className="revws-desc mt-3">
                      <p className="m-0 text-md">{review.review}</p>
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

export default Review;
