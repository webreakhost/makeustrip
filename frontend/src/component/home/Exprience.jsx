

import React from "react";

const Exprience = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-between">

            {/* Image Section */}
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="position-relative">
                <img
                  src="/assets/img/img-2.webp"
                  className="img-fluid rounded-3 w-100"
                  style={{ aspectRatio: "4/4", objectFit: "cover" }}
                  alt="Experience"
                />

                {/* Floating Client and Rating Box */}
                <div className="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-2">
                  <div className="bg-body d-flex rounded-3 p-3 shadow-sm">
                    
                    {/* Avatar Group */}
                    <div className="me-4">
                      <h6 className="fw-normal mb-2">Client</h6>
                      {/* <ul className="d-flex avatar-group list-unstyled mb-0 gap-1">
                        {["team-1", "team-2", "team-3", "team-4"].map((img, i) => (
                          <li key={i} className="avatar avatar-md">
                            <img
                              className="avatar-img rounded-circle"
                              src={`/assets/img/${img}.webp`}
                              alt="avatar"
                              width="30"
                              height="30"
                            />
                          </li>
                        ))}
                        <li className="avatar avatar-md">
                          <div className="avatar-img bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                            <span className="text-white small">1K+</span>
                          </div>
                        </li>
                      </ul> */}

<ul className="d-flex avatar-group list-unstyled mb-0 gap-1">
  {["team-1", "team-2", "team-3", "team-4"].map((img, i) => (
    <li key={i} className="avatar">
      <img
        className="avatar-img rounded-circle"
        src={`/assets/img/${img}.webp`}
        alt="avatar"
        width="20"
        height="20"
      />
    </li>
  ))}
  <li className="avatar">
    <div
      className="avatar-img bg-primary rounded-circle d-flex align-items-center justify-content-center"
      style={{ width: "24px", height: "24px", fontSize: "9px" }}
    >
      <span className="text-white small">1K+</span>
    </div>
  </li>
</ul>


                    </div>

                    {/* Rating Section */}
                    <div>
                      <h6 className="fw-normal mb-2">Rating</h6>
                      <h6 className="m-0">
                        4.5<i className="fa-solid fa-star text-warning ms-2"></i>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="col-xl-5 col-lg-6 col-md-6 mt-4 mt-md-0">
              <div>
                <h5 className="text-primary text-uppercase fw-semibold mb-2">Make MY Memories</h5>
                <h2 className="fw-bold lh-base mb-3">Our Attractive Experience And Services For You!</h2>
                <p className="text-muted fs-6">
                  Traveling creates unforgettable memories—waking up to a sunrise over the mountains, the salty breeze of an untouched beach, or the laughter of new friends in a foreign land. Travel isn’t just about places; it’s about experiences that shape us and leave footprints on our hearts.
                </p>

                {/* <div className="d-flex flex-wrap gap-3 mt-4 text-red-700">
                  {[
                    { value: "33", label: "Year Experience" },
                    { value: "78", label: "Destination Collaboration" },
                    { value: "25K", label: "Happy Customers" },
                  ].map((item, i) => (
                    <div key={i} className="text-center p-3 rounded gray-simple flex-fill" style={{ minWidth: "120px" }}>
                      <h6 className="fw-bold fs-3 m-0">{item.value}</h6>
                      <p className="m-0 text-sm text-muted">{item.label}</p>
                    </div>
                  ))}
                </div> */}
                <div className="d-flex flex-wrap gap-3 mt-4">
  {[
    { value: "33", label: "Year Experience" },
    { value: "78", label: "Destination Collaboration" },
    { value: "25K", label: "Happy Customers" },
  ].map((item, i) => (
    <div
      key={i}
      className="text-center p-3 rounded flex-fill bg-red-700 text-white"
      style={{ minWidth: "120px" }}
    >
      <h6 className="fw-bold fs-3 m-0 text-white">{item.value}</h6>
      <p className="m-0 text-sm text-white">{item.label}</p>
    </div>
  ))}
</div>


              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Exprience;
