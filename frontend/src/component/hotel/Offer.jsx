import React from 'react';

const Offer = () => {
  const offers = [
    {
      bgColor: 'bg-light-success',
      textColor: 'text-success',
      imgSrc: '/assets/img/flt-3.png',
      discount: '$899 off',
      description: 'On Domestic Flights',
      code: 'LOG125F',
      linkColor: 'text-success',
      borderColor: 'border-success'
    },
    {
      bgColor: 'bg-light-purple',
      textColor: 'text-purple',
      imgSrc: '/assets/img/goibibo.png',
      discount: '$899 off',
      description: 'On Domestic Flights',
      code: 'INT285',
      linkColor: 'text-purple',
      borderColor: 'border-purple'
    },
    {
      bgColor: 'bg-light-danger',
      textColor: 'text-danger',
      imgSrc: '/assets/img/flt-2.png',
      discount: '$899 off',
      description: 'On Domestic Flights',
      code: 'LOG125F',
      linkColor: 'text-danger',
      borderColor: 'border-danger'
    },
    {
      bgColor: 'bg-light-warning',
      textColor: 'text-warning',
      imgSrc: '/assets/img/flt-1.png',
      discount: '$899 off',
      description: 'On Domestic Flights',
      code: 'LOG125F',
      linkColor: 'text-warning',
      borderColor: 'border-warning'
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
          {offers.map((offer, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="pop-touritems">
                <div className={`card ${offer.bgColor} rounded-3 p-4 m-0`}>
                  <div className="card-body py-3 px-1">
                    <div className="position-relative">
                      <div className="offers-pic">
                        <img
                          src={offer.imgSrc}
                          className="img-fluid rounded"
                          width="150"
                          alt="Offer"
                        />
                      </div>
                    </div>
                    <div className="position-relative py-4 my-1">
                      <span className="mb-1 text-dark fw-medium">Flat</span>
                      <h4 className={`mb-1 ${offer.textColor}`}>{offer.discount}</h4>
                      <h6 className="fw-normal fw-medium">{offer.description}</h6>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        className={`bg-light border-2 ${offer.borderColor} br-dashed rounded-2 px-3 py-2`}
                      >
                        <h5 className={`fw-bold user-select-all ${offer.textColor} mb-0`}>{offer.code}</h5>
                      </div>
                      <a href="#" className={`nav-link ${offer.linkColor}`}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
