



import React from "react";

const Footer = () => {
  return (
    <footer className="footer skin-dark-footer">
      <div className="container">
        <div className="row">

          {/* Logo & About Section */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <div className="mb-3">
                <img src="/footerlogo.png" className="img-fluid" width="180" alt="Footer Logo" />
              </div>
              <p>Your trusted travel partner! We offer seamless bookings, budget-friendly packages & unforgettable journeys. Explore hassle-free today!</p>
              <div className="foot-socials">
                <ul className="d-flex gap-3 list-unstyled">
                  <li><a href="https://www.facebook.com/makeustrips/"><i className="fa-brands fa-facebook"></i></a></li>
                       <li><a href="https://www.linkedin.com/company/makeustrip/"><i className="fa-brands fa-linkedin"></i></a></li>
                       {/* <li><a href=""><i className="fa-brands fa-youtube"></i></a></li> */}
                       <li><a href="https://www.instagram.com/makeus.trip/"><i className="fa-brands fa-instagram"></i></a></li>
                       {/* <li><a href="#"><i className="fa-brands fa-google-plus"></i></a></li> */}
                       <li><a href="https://twitter.com/makeustrip"><i className="fa-brands fa-twitter"></i></a></li>
                      <li><a href="https://in.pinterest.com/makeustrip"><i className="fa-brands fa-pinterest"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h4 className="widget-title">Navigation</h4>
              <ul className="footer-menu">
                <li><a href="/term-of-service/">Terms of Services</a></li>
                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                <li><a href="#">Refund & Cancellation</a></li>
                <li><a href="#">Trust, Safety & Security</a></li>
                <li><a href="/cookies">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Company Section */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h4 className="widget-title">Company</h4>
              <ul className="footer-menu">
                <li><a href="/about-us/">About Us</a></li>
                <li><a href="/contact-us/">Contact Us</a></li>
                <li><a href="https://affiliateformarketing.com/">Affiliate Program</a></li>
                <li><a href="/classic-blog/">Blog</a></li>
              </ul>
            </div>
          </div>

          {/* Payment & Partners Section */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h4 className="widget-title">Payment Methods</h4>
              <img src="/assets/img/payment.png" className="img-fluid mb-3" alt="Payment Methods" />
              <h5 className="widget-title mt-3 text-gray-500">Our Partners</h5>
              
              <div className="d-flex gap-3">
  <img src="/assets/img/mytrip.png" className="img-fluid" alt="MyTrip" style={{ width: "100px", height: "auto" }} />
  <img src="/assets/img/tripadv.png" className="img-fluid" alt="TripAdvisor" style={{ width: "100px", height: "auto" }} />
  {/* <img src="/assets/img/goibibo.png" className="img-fluid" alt="Goibibo" style={{ width: "100px", height: "auto" }} /> */}
</div>

            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom border-top">
        <div className="container">
          <div className="row align-items-center justify-content-between">

            <div className="col-md-6 text-center text-md-start">
              <a href="https://www.webreakglobal.com/">
                <p className="mb-0">© 2025 Makeustrip | Developed by WebReak Global</p>
              </a>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <ul className="d-flex justify-content-center justify-content-md-end list-unstyled m-0">
                <li><a href="/term-of-service/">Terms of Service</a></li>
                <li className="ms-3"><a href="/privacy-policy/">Privacy Policy</a></li>
                <li className="ms-3"><a href="/cookies/">Cookies</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
