import React from 'react';

const offers = [
  {
    title: "30% Off On Summer Vacation",
    imageUrl: "/assets/img/city/ct-3.webp",
    validUntil: "31 March 2023",
    link: "flight-search.html"
  },
  {
    title: "20% Off On Domestic Holiday",
    imageUrl: "/assets/img/city/ct-3.webp",
    validUntil: "31 July 2023",
    link: "flight-search.html"
  },
  {
    title: "40% Off On Winter Vacation",
    imageUrl: "/assets/img/city/ct-3.webp",
    validUntil: "31 July 2023",
    link: "flight-search.html"
  }
];

const Offer = () => {
  return (
    <div>
      <section className="pt-4 pb-0">
        <div className="container">
          <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
            {offers.map((offer, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="pop-touritems">
                  <a href={offer.link} className="card rounded-3 border m-0">
                    <div className="offers-container row align-items-center">
                      <div className="offers-flex position-relative col-4">
                        <div className="offers-pic p-2">
                          <img src={offer.imageUrl} className="img-fluid rounded" alt={offer.title} />
                        </div>
                      </div>
                      <div className="offers-captions col-8 ps-2">
                        <h4 className="city fs-5 m-0 fw-bold">
                          <span>{offer.title}</span>
                        </h4>
                        <div className="booking-wrapes d-flex align-items-center justify-content-between">
                          <p className="fs-5 low-price m-0">
                            <span className="tag-span">Valid {offer.validUntil}</span>
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
}

export default Offer;

