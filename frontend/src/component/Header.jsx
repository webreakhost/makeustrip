
import React from 'react';
import { NavLink, useLocation, } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from '../pages/Login';
import Currency from './Currency';
import Country from './Country';
// import { AuthContextProvider } from '../context/authContext';
import { authContext } from '../context/authContext';
import { useContext } from 'react';
import AccountDropdown from './userprofile/AccountDropdown';




// SkqQGUBOM7pWq44o-pass 
const Header = () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const isUserLoggedIn = localStorage.getItem("token") !== "null";
  const { user, token } = useContext(authContext);

  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const [showModal, setShowModal] = useState(false);
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // const [showSignupModal, setShowSignupModal] = useState(false);

  const profilePic = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";
  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div className="header header-transparent theme">
    <div className={`header theme ${isHomePage ? 'header-transparent' : 'bg-red-600'} lg:px-10`}>
    
      <div className="container">
        <nav id="navigation" className="navigation navigation-landscape">
          <div className="nav-header">

            <a className="nav-brand static-show mt-1" href="/">
              {isHomePage &&  !isScrolled? (
                <img src="/translogo.png" className="mt-1" alt="Home Page Logo" style={{ height: "auto", width: "160px" }} />
              ) : (
                <img
                  src="/makeuslogored.png"
                  // src='colouredlogo.png'
                  className="logo mt-1 rounded-md"
                  alt="Scrolled or Non-Home Logo"
                  style={{
                    width: "160px",
                    height: "auto",
                    borderRadius: "30px",
                    backgroundColor: !isHomePage || isScrolled ? "#cd2c22" : "transparent", // Red background if not home OR scrolled
                  }}
                />
              )}
            </a>


            <a className="nav-brand mob-show" href="/">
              {/* /assets/img/logo.png */}
              <img src="/whiteback.png" className="logo" alt="Logo" style={{
                width: "170px",
                height: "32px",

              }} />
            </a>
            <div className="nav-toggle"></div>
            <div className="mobile_nav">
              <ul>
               
                <li>
                  {isUserLoggedIn ? (
                    <div>
                      <AccountDropdown />
                    </div>
                  ) :
                    <a href="#" onClick={() => setShowModal(true)} className="bg-light-primary text-primary rounded" data-bs-toggle="modal" data-bs-target="#login">
                      <i className="fa-regular fa-circle-user fs-6"></i>
                    </a>

                  }

                </li>
              </ul>
            </div>
          </div>
          <div className="nav-menus-wrapper" style={{ transitionProperty: 'none' }}>
            <ul className="nav-menu">
              <li>
                <a href="JavaScript:Void(0);">
                  Home<span className="submenu-indicator"></span>
                </a>

              </li>
              <li>
                <a href="JavaScript:Void(0);">
                  Listing<span className="submenu-indicator"></span>
                </a>

                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="JavaScript:Void(0);">
                      Hotel<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="/hotel-list/">Hotel list</a></li>

                      {/* <li><a href="hotel-details">Hotel Detail 01</a></li> */}

                    </ul>
                  </li>
                  <li>
                    <a href="JavaScript:Void(0);">
                      Flight<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="/flight-list/">Flight List</a></li>
                      
                    </ul>
                  </li>
                  <li>
                    <a href="JavaScript:Void(0);">
                      Rental<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="/property-list/">Rental List</a></li>

                      {/* <li><a href="rental-detail.html">Rental Detail</a></li> */}
                    </ul>
                  </li>
                  <li>
                    <a href="JavaScript:Void(0);">
                      Cars<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="/car-list/">Car List</a></li>

                      {/* <li><a href="car-detail.html">Car Detail</a></li> */}
                    </ul>
                  </li>

                </ul>
              </li>
              <li>
                <a href="JavaScript:Void(0);">
                  Pages<span className="submenu-indicator"></span>
                </a>

                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="JavaScript:Void(0);">
                      Blog<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="/classic-blog/">Classic Blog</a></li>

                    </ul>
                  </li>

                  <li><a href="/about-us/">About Us</a></li>

                  <li>
                    <a href="/contact-us/">
                      Contact Us<span className="submenu-indicator"></span>
                    </a>

                  </li>
                </ul>
              </li>

              <li>
                <a href="JavaScript:Void(0);">
                  Menu<span className="submenu-indicator"></span>
                </a>

                <ul className="nav-dropdown nav-submenu xxl-menu">
                  <li>
                    <a href="/stay">
                      <div className="mega-advance-menu">
                        <div className="mega-first square--50 rounded-2 gray-simple text-success fs-4">
                          {/* <i className="fa-solid fa-hotel"></i> */}
                          <img src="/stayicon.png" alt="" />
                        </div>
                        <div className="mega-last ps-2">
                          <h6 className="mb-0 ft-bold fs-13">Stay</h6>
                          <p className="m-0 fs-10 text-muted">Top Rated Rentals</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/flight/">
                      <div className="mega-advance-menu">
                        <div className="mega-first square--50 rounded-2 gray-simple text-success fs-4">
                          {/* <i className="fa-solid fa-plane-departure"></i> */}
                          <img src="/flighticon.png" alt="" />
                        </div>
                        <div className="mega-last ps-2">
                          <h6 className="mb-0 ft-bold fs-13">Flight</h6>
                          <p className="m-0 fs-10 text-muted">Top Rated Flights</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="/hotel/">
                      <div className="mega-advance-menu">
                        <div className="mega-first square--50 rounded-2 gray-simple text-warning fs-4"><i
                          className="fa-solid  text-green-700"></i>
                          {/* <MdHotel className='text-green-700' /> */}
                          <img src="/hotelicon.png" alt="" />
                        </div>
                        <div className="mega-last ps-2">
                          <h6 className="lh-base fs-6 font--bold m-0">Hotel</h6>
                          <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/car/">
                      <div className="mega-advance-menu">
                        <div className="mega-first square--50 rounded-2 gray-simple text-seagreen fs-4"><i
                          className="fa-brands "></i>
                          {/* <FaTaxi /> */}
                          <img src="/cabicon.png" alt="" />
                        </div>

                        <div className="mega-last ps-2">
                          <h6 className="lh-base fs-6 font--bold m-0">Cabs</h6>
                          <p className="text-sm-muted m-0">Book your Cabs</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li><a href="about-us">About Us</a></li> */}
            </ul>
             {/* <ul className="nav-menu nav-menu-social align-to-right " >  */}
             <ul className="nav-menu nav-menu-social align-to-right">
  
              
              {/* Sign In / Register */}

              <li className="list-buttons light">
                {isUserLoggedIn ? (
                  <div>
                    <AccountDropdown />
                  </div>
                ) :

                  <a href="/#" onClick={() => setShowModal(true)}>
                    <i className="fa-regular fa-circle-user fs-6 me-2"></i>
                    Sign In / Register
                  </a>
                }
              </li>
            </ul>
            {/* <Login/> */}
            <Login showModal={showModal} setShowModal={setShowModal} />

          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;







