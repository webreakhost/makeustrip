



import React from 'react';


const Roomdetails = () => {
  return (
    <div>
      <section className="pt-3 gray-simple">
        <div className="container">
          <div className="row">
            {/* Breadcrumb */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#" className="text-primary">Home</a></li>
                  <li className="breadcrumb-item"><a href="#" className="text-primary">Hotel in Denver, USA</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Royal Plaza on Scotts</li>
                </ol>
              </nav>
            </div>

            {/* Gallery & Info */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card border-0 p-3 mb-4">
                <div className="crd-heaader d-md-flex align-items-center justify-content-between">
                  <div className="crd-heaader-first">
                    <div className="d-inline-flex align-items-center mb-1">
                      <span className="label bg-light-success text-success">Health Protected</span>
                      <div className="d-inline-block ms-2">
                        <i className="fa fa-star text-warning text-xs"></i>
                        <i className="fa fa-star text-warning text-xs"></i>
                        <i className="fa fa-star text-warning text-xs"></i>
                        <i className="fa fa-star text-warning text-xs"></i>
                        <i className="fa fa-star text-warning text-xs"></i>
                      </div>
                    </div>
                    <div className="d-block">
                      <h4 className="mb-0">Royal Plaza on Scotts</h4>
                      <p className="text-md m-0">
                        <i className="fa-solid fa-location-dot me-2"></i>577 Jalan Sultan Road Singapore, 245652 Singapore. 
                        <a href="#" className="text-primary fw-medium ms-2">Show on Map</a>
                      </p>
                    </div>
                  </div>
                  <div className="crd-heaader-last my-md-0 my-2">
                    <div className="drix-wrap d-flex align-items-center">
                      <div className="drix-first pe-2">
                        <div className="text-dark fw-semibold fs-4">US$107</div>
                        <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                          <span className="label bg-success text-light">15% Off</span>
                        </div>
                      </div>
                      <div className="drix-last">
                        <button type="button" className="btn btn-primary fw-semibold">Select Rooms</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery Images */}
                <div className="galleryGrid typeGrid_3 mt-2">
                  {['hotel-1', 'hotel-2', 'hotel-3', 'hotel-4', 'hotel-5', 'hotel-6', 'hotel-7'].map((image, index) => (
                    <div className="galleryGrid__item" key={index}>
                      <a href={`/assets/img/hotel/${image}.jpg`} data-lightbox="roadtrip">
                        <img src={`/assets/img/hotel/${image}.jpg`} alt="image" className="rounded-2 img-fluid" />
                      </a>
                    </div>
                  ))}
                  <div className="galleryGrid__item position-relative">
                    <a href="/assets/img/hotel/hotel-7.jpg" data-lightbox="roadtrip">
                      <img src="/assets/img/hotel/hotel-7.jpg" alt="image" className="rounded-2 img-fluid" />
                    </a>
                    <div className="position-absolute end-0 bottom-0 mb-3 me-3">
                      <a href="/assets/img/hotel/hotel-7.jpg" data-lightbox="roadtrip" className="btn btn-md btn-whites fw-medium text-dark">
                        <i className="fa-solid fa-caret-right me-1"></i>16 More Photos
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Top Attractions */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="row align-items-center justify-content-between gx-4">
                {['Top Attractions', 'Nearest Airport & Metro', 'Cafe & Bars'].map((category, index) => (
                  <div className="col-xl-4 col-lg-4 col-md-4" key={index}>
                    <div className="card p-3 mb-4">
                      <div className="nearestServ-wrap">
                        <div className="nearestServ-head d-flex mb-1">
                          <h6 className="fs-6 fw-semibold text-primary mb-1"><i className={`fa-brands ${index === 0 ? 'fa-servicestack' : (index === 1 ? 'fa-jet-fighter' : 'fa-martini-glass-empty')} me-2`}></i>{category}</h6>
                        </div>
                        <div className="nearestServ-caps">
                          <ul className="row align-items-start g-2 p-0 m-0">
                            <li className="col-12 text-muted-2">Sample item 1 (170m)</li>
                            <li className="col-12 text-muted-2">Sample item 2 (250m)</li>
                            <li className="col-12 text-muted-2">Sample item 3 (80m)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Login Alert */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="d-flex align-items-center justify-content-start py-3 px-3 rounded-2 bg-success mb-4">
                <p className="text-light fw-semibold m-0">
                  <i className="fa-solid fa-gift text-warning me-2"></i>
                  <a href="#" className="text-white text-decoration-underline">Login</a> or 
                  <a href="#" className="text-white text-decoration-underline">Register</a> to earn upto 100 coins (approx 1.72 US$) after check-out.
                </p>
              </div>
            </div>

            {/* Rooms Details */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Roomdetails;






