import React from 'react';

const Galleryinfo = ({rental}) => {
    if (!rental) return null;

    return (
        <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="card border-0 p-3 mb-4">
                <div className="crd-heaader d-md-flex align-items-center justify-content-between mb-3">
                    <div className="crd-heaader-first">
                        <div className="d-inline-flex align-items-center mb-1">
                            <span className="label fw-medium bg-light-success text-success">{rental.category}</span>
                        </div>
                        <div className="d-block">
                            <h4 className="mb-0">{rental.title}</h4>
                            <div className="explotter">
                                <p className="detail ellipsis-container fw-semibold">
                                    <span className="ellipsis-item__normal">3 Beds</span>
                                    <span className="separate ellipsis-item__normal"></span>
                                    <span className="ellipsis-item">2 Baths</span>
                                    <span className="separate ellipsis-item__normal"></span>
                                    <span className="ellipsis-item">2200 SqFt</span>
                                    <span className="separate ellipsis-item__normal"></span>
                                    <span className="ellipsis-item">2022</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="crd-heaader-last my-md-0 my-2">
                        <div className="drix-wrap d-flex flex-column align-items-md-end align-items-start text-end">
                            <div className="drix-first d-flex align-items-center text-end mb-2">
                                <a href="#" className="bg-light-info text-info rounded-1 fw-medium text-sm px-3 py-2 lh-base">
                                    <i className="fa-solid fa-bookmark me-2"></i>Bookmark
                                </a>
                                <a href="#" className="bg-light-danger text-danger rounded-1 fw-medium text-sm px-3 py-2 lh-base ms-2">
                                    <i className="fa-solid fa-share-nodes me-2"></i>Share
                                </a>
                            </div>
                            <div className="drix-last">
                                <span className="label bg-light-success text-success">Free Cancellation within a week</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="crd-body">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-8 col-lg-7 col-md-12">
                            <div className="galleryGrid typeGrid_2 mb-lg-0 mb-3">
                                <div className="galleryGrid__item relative d-flex">
                                    <a href="assets/img/property/img-2.webp" data-lightbox="roadtrip">
                                        <img src="assets/img/property/img-2.webp" alt="image" className="rounded-2 img-fluid" />
                                    </a>
                                </div>

                                <div className="galleryGrid__item position-relative">
                                    <a href="assets/img/property/img-3.webp" data-lightbox="roadtrip">
                                        <img src="assets/img/property/img-3.webp" alt="image" className="rounded-2 img-fluid" />
                                    </a>
                                    <div className="position-absolute end-0 bottom-0 mb-3 me-3">
                                        <a href="assets/img/property/img-4.webp" data-lightbox="roadtrip" className="btn btn-md btn-whites fw-medium text-dark">
                                            <i className="fa-solid fa-caret-right me-1"></i>16 More Photos
                                        </a>
                                    </div>
                                </div>
                                <div className="galleryGrid__item">
                                    <a href="assets/img/property/img-4.webp" data-lightbox="roadtrip">
                                        <img src="assets/img/property/img-4.webp" alt="image" className="rounded-2 img-fluid" />
                                    </a>
                                </div>
                                <div className="galleryGrid__item">
                                    <a href="assets/img/property/img-5.webp" data-lightbox="roadtrip">
                                        <img src="assets/img/property/img-5.webp" alt="image" className="rounded-2 img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="card border br-dashed">
                                <div className="card-header">
                                    <div className="crd-heady102 d-flex align-items-center justify-content-start">
                                        <div className="square--30 circle bg-light-primary text-primary flex-shrink-0">
                                            <i className="fa-solid fa-percent"></i>
                                        </div>
                                        <div className="crd-heady102Title lh-1 ps-2">
                                            <span className="text-sm fw-semibold text-dark text-uppercase lh-1 mb-0">
                                                Login not to get upto 20% lower price
                                            </span>
                                        </div>
                                    </div>
                                    <div className="crd-heady103">
                                        <a href="#" className="btn btn-primary btn-sm px-4 fw-semibold text-uppercase">
                                            Login
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-block mb-3">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="text-dark fw-bold fs-3 me-2">{rental.discountedPrice}
</div>
                                            <div className="text-muted-2 fw-medium text-decoration-line-through me-2">{rental.originalPrice}</div>
                                            <div className="text-warning fw-semibold">{rental.discount}%</div>
                                        </div>
                                        <div className="d-flex align-items-start justify-content-start">
                                            <div className="text-muted-2 text-md">inclusive of all taxes</div>
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <div className="form-group">
                                            <label className="form-label">Your name</label>
                                            <input type="text" className="form-control" defaultValue="Enter Your Name" />
                                        </div>

                                        <div className="form-group mb-4">
                                            <label className="form-label">Mobile number</label>
                                            <input type="text" className="form-control" defaultValue="Contact Number" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="crd-heady102 d-flex align-items-center justify-content-start">
                                                    <div className="square--30 circle bg-light-success text-success">
                                                        <i className="fa-solid fa-percent"></i>
                                                    </div>
                                                    <div className="crd-heady102Title lh-1 ps-2">
                                                        <span className="text-sm fw-semibold text-dark text-uppercase lh-1 mb-0">
                                                            oyofestive40 coupon applied
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="crd-heady103">
                                                    <span className="text-dark fw-semibold text-uppercase">{rental.discountedPrice}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group mb-2">
                                            <button type="button" className="btn btn-primary full-width fw-medium">
                                                <a href="/contact-us">
                                                Contact Agents
                                                </a>
                                                
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer bg-white">
                                    <div className="row align-items-center justify-content-start gx-2">
                                        <div className="col-auto">
                                            <div className="square--40 rounded-2 bg-seegreen text-light">4.8</div>
                                        </div>
                                        <div className="col-auto text-start">
                                            <div className="text-md text-dark fw-medium">Exceptional</div>
                                            <div className="text-md text-muted-2">3,014 reviews</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Galleryinfo;




