


import React from 'react';

const Offer = () => {
  const offers = [
    {
      imgSrc: "/assets/img/air-4.png",
      discount: "30% Off",
      details: "On Domestic Flight For USA",
      validity: "Valid 31 March 2023",
      bgClass: "bg-light-success",
    },
    {
      imgSrc: "/assets/img/air-2.png",
      discount: "40% Off",
      details: "On International Routes",
      validity: "Valid 31 March 2023",
      bgClass: "bg-light-warning",
    },
    {
      imgSrc: "/assets/img/air-5.png",
      discount: "15% Off",
      details: "On National Routes",
      validity: "Valid 31 March 2023",
      bgClass: "bg-light-info",
    },
  ];

  return (
    <div>
      <section className="pt-4 pb-0 ">
        <div className="container bg-gray-100">
          <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4 ">
            {offers.map((offer, index) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="pop-touritems mb-4">
                  <a href="#" className="card rounded-3 br-dashed border-2 m-0">
                    <div className="offers-container d-flex align-items-center justify-content-start p-2">
                      <div className="offers-flex position-relative">
                        <div
                          className={`offers-pic ${offer.bgClass} p-3 rounded-3 d-flex align-items-center justify-content-center h-100`}
                        >
                          <img
                            src={offer.imgSrc}
                            className="img-fluid rounded"
                            width="70"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="offers-captions ps-3">
                        <h4 className="city fs-4 m-0 fw-bold">
                          <span>{offer.discount}</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">{offer.details}</span>
                        </p>
                        <div className="booking-wrapes d-flex align-items-center justify-content-between">
                          <p className="fs-5 low-price m-0">
                            <span className="tag-span">{offer.validity}</span>
                          </p>
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

export default Offer;

