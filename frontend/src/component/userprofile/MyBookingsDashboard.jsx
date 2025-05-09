import React, { useState } from 'react';
import { Offcanvas, Button, ProgressBar } from 'react-bootstrap';

const MyBookingsDashboard = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(true);
  const handleCloseMenu = () => setShowMenu(false);

  return (
    <div className="container my-4">
      {/* Offcanvas Navigation Menu */}
      <Button className="d-block d-lg-none mb-3" variant="primary" onClick={handleShowMenu}>
        Open Menu
      </Button>

      <Offcanvas show={showMenu} onHide={handleCloseMenu} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            <li className="py-2">My Profile</li>
            <li className="py-2">Travelers</li>
            <li className="py-2">Payment Details</li>
            <li className="py-2">My Bookings</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="row">
        {/* Sidebar Menu */}
        <div className="col-lg-4 d-none d-lg-block">
          <div className="card p-3">
            <h4>Menu</h4>
            <ul className="list-unstyled">
              <li className="py-2">My Profile</li>
              <li className="py-2">Travelers</li>
              <li className="py-2">Payment Details</li>
              <li className="py-2">My Bookings</li>
            </ul>
          </div>
        </div>

        {/* User Profile Card */}
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="User Profile"
                className="rounded-circle mb-3"
              />
              <h5>John Doe</h5>
              <p className="text-muted">San Francisco, USA</p>
              <ProgressBar now={70} label="70% Profile Completed" className="mb-3" />
              <Button variant="warning">Upgrade to Pro</Button>
            </div>
          </div>

          {/* Booking Management Section */}
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <button className="nav-link active">All Bookings</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">Processing</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">Cancelled</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">Completed</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="border p-3 mb-3">
                <h6>Flight: San Francisco (SFO) → New York (JFK)</h6>
                <p>Booking ID: #12345 | Class: Economy</p>
                <p>Departure: 10:00 AM | Arrival: 2:00 PM</p>
                <Button variant="primary">Manage Booking</Button>
              </div>
              <div className="border p-3">
                <h6>Flight: Los Angeles (LAX) → Chicago (ORD)</h6>
                <p>Booking ID: #67890 | Class: Business</p>
                <p>Departure: 1:00 PM | Arrival: 5:00 PM</p>
                <Button variant="primary">Manage Booking</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsDashboard;
