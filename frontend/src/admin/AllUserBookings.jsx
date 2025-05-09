




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKENDURL } from '../Config/Config';

const AllUserBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get(BACKENDURL + '/api/v1/auth/all-bookings'); // Adjust URL as per your backend
                setBookings(response.data.users);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch bookings');
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    if (loading) return <p className="text-center text-lg text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center mb-6">All Bookings</h1>
            {bookings.map(user => (
                <div key={user._id} className="bg-white shadow-md rounded-lg p-6 mb-4">
                    <h2 className="text-xl font-semibold mb-2">{user.name} <span className="text-gray-600 text-sm">({user.email})</span></h2>
                    <div className="mb-4">
                        <h3 className="text-lg font-medium mb-2">Hotel Bookings</h3>
                        <ul className="list-disc list-inside">
                            {user.hotelBookings.map(booking => (
                                <li key={booking._id} className="card border br-dashed mb-4">
                                {/* <p>{booking._id}</p>
                                {JSON.stringify(booking)}
                                <p>{booking.hotelName}</p> */}
                                <div className="card-header p-6 border-bottom flex flex-col lg:flex-row justify-between items-start lg:items-center">

                                <div className="flex items-center">
                                  <div className="square--50 circle bg-light-danger text-danger flex-shrink-0 text-center flex items-center justify-center">
                                    <i className="fa-solid fa-hotel text-xl"></i>
                                  </div>
              
                                  <div className="ms-4">
                                    <h6 className="card-title text-dark text-lg font-bold mb-1">{booking.hotelName}</h6>
                                    <ul className="nav nav-divider text-sm text-muted">
                                      <li className="nav-item">Booking ID: {booking._id}</li>
                                      <li className="nav-item ms-3">
                                        <span className="text-dark font-medium">{booking.duration}</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
              
              
                                <div className="mt-4 lg:mt-0">
                                  <a href="#" className="btn btn-md btn-light-seegreen font-medium px-6 py-2">
                                    Manage Booking
                                  </a>
                                </div>
                              </div>

                              <div className="card-body p-6">
                  <div className="row g-4">
                    <div className="col-6 lg:col-4">
                      <span className="block text-sm font-medium text-muted">Check-In</span>
                      <h6 className="text-base font-bold">{booking.createdAt}</h6>
                    </div>

                    <div className="col-6 lg:col-4">
                      <span className="block text-sm font-medium text-muted">Check-Out</span>
                      <h6 className="text-base font-bold">{booking.checkOut}</h6>
                    </div>

                    <div className="col-12 lg:col-4">
                      <span className="block text-sm font-medium text-muted">Total Guest</span>
                      <h6 className="text-base font-bold">{booking.guests.length}</h6>

                      
                    </div>

                    <div className="col-12 lg:col-4">
                    <span className="block text-sm font-medium text-muted">Total price</span>
                    <h6 className="text-base font-bold">{booking.transactionDetails.totalPrice}</h6>
                      
                    </div>
                  </div>
                </div>


                                </li>
                                
              
                                
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-medium mb-2">Flight Bookings</h3>
                        <ul className="list-disc list-inside">
                            {user.flightBookings.map(booking => (
                                <li key={booking._id} className="text-gray-700">{JSON.stringify(booking)}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-medium mb-2">Car Bookings</h3>
                        <ul className="list-disc list-inside">
                            {user.carBookings.map(booking => (
                                <li key={booking._id} className="card border br-dashed mb-4">
                                  {/* {JSON.stringify(booking)} */}

<div className="card-header border-b flex flex-col md:flex-row justify-between items-start md:items-center p-4">
                  {/* Icon and Title */}
                  <div className="flex items-center">
                    <div className="square--50 circle bg-light-success text-success flex-shrink-0 text-center flex items-center justify-center">
                      <i className="fa-solid fa-car text-lg"></i>
                    </div>
                    {/* Title */}
                    <div className="ml-3">
                      <h6 className="card-title text-dark text-lg font-bold mb-1">
                        {booking.carName}
                      </h6>
                      <ul className="nav nav-divider text-sm text-muted">
                        <li className="nav-item">Booking ID: {booking._id}</li>
                        <li className="nav-item ml-3">
                          <span className="text-dark font-medium">
                            {Array.isArray(booking.models) ? booking.models.join(", ") : "N/A"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-4 md:mt-0">
                    <a href="#" className="btn btn-md btn-light-seegreen font-medium">
                      Manage Booking
                    </a>
                  </div>
                </div>

                {/* Card body */}
                <div className="card-body p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <span className="block text-sm font-medium text-muted">
                        Pickup Address
                      </span>
                      <h6 className="text-base font-bold">{booking.pickupAddress}</h6>
                    </div>

                    <div>
                      <span className="block text-sm font-medium text-muted">
                        Drop Address
                      </span>
                      <h6 className="text-base font-bold">{booking.dropAddress}</h6>
                    </div>

                    <div>
                      <span className="block text-sm font-medium text-muted">
                        Booked By
                      </span>
                      <h6 className="text-base font-bold">{user.name}</h6>
                    </div>
                  </div>
                </div>


                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllUserBookings;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BACKENDURL } from '../Config/Config';

// const AllUserBookings = () => {
//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBookings = async () => {
//             try {
//                 const response = await axios.get(BACKENDURL + '/api/v1/auth/all-bookings'); // Adjust URL as per your backend
//                 setBookings(response.data.users);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Failed to fetch bookings');
//                 setLoading(false);
//             }
//         };

//         fetchBookings();
//     }, []);

//     if (loading) return <p className="text-center text-lg text-gray-500">Loading...</p>;
//     if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

//     return (
//         <div className="p-4 bg-gray-100 min-h-screen">
//             <h1 className="text-2xl font-bold text-center mb-6">All Bookings</h1>
//             {bookings.map(user => (
//                 <div key={user._id} className="bg-white shadow-md rounded-lg p-6 mb-4">
//                     <h2 className="text-xl font-semibold mb-2">{user.name} <span className="text-gray-600 text-sm">({user.email})</span></h2>
//                     <div className="mb-4">
//                         <h3 className="text-lg font-medium mb-2">Hotel Bookings</h3>
//                         <ul className="list-disc list-inside">
//                             {user.hotelBookings.map(booking => (
//                                 <li key={booking._id} className="text-gray-700">
//                                     <p><strong>Hotel Name:</strong> {booking.hotelName || "N/A"}</p>
//                                     <p><strong>Check-in Date:</strong> {booking.checkInDate || "N/A"}</p>
//                                     <p><strong>Check-out Date:</strong> {booking.checkOutDate || "N/A"}</p>
//                                     <p><strong>Guests:</strong> {booking.guests || "N/A"}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="mb-4">
//                         <h3 className="text-lg font-medium mb-2">Flight Bookings</h3>
//                         <ul className="list-disc list-inside">
//                             {user.flightBookings.map(booking => (
//                                 <li key={booking._id} className="text-gray-700">
//                                     <p><strong>Flight Number:</strong> {booking.flightNumber || "N/A"}</p>
//                                     <p><strong>Departure:</strong> {booking.departure || "N/A"}</p>
//                                     <p><strong>Arrival:</strong> {booking.arrival || "N/A"}</p>
//                                     <p><strong>Date:</strong> {booking.date || "N/A"}</p>
//                                     <p><strong>Passenger:</strong> {booking.passenger ? `${booking.passenger.firstName} ${booking.passenger.lastName}` : "N/A"}</p>
//                                     <p><strong>Passport Number:</strong> {booking.passenger?.passportNumber || "N/A"}</p>
//                                     <p><strong>Phone:</strong> {booking.passenger?.phone || "N/A"}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="mb-4">
//                         <h3 className="text-lg font-medium mb-2">Car Bookings</h3>
//                         <ul className="list-disc list-inside">
//                             {user.carBookings.map(booking => (
//                                 <li key={booking._id} className="text-gray-700">
//                                     <p><strong>Car Model:</strong> {booking.carModel || "N/A"}</p>
//                                     <p><strong>Pickup Location:</strong> {booking.pickupLocation || "N/A"}</p>
//                                     <p><strong>Dropoff Location:</strong> {booking.dropoffLocation || "N/A"}</p>
//                                     <p><strong>Date:</strong> {booking.date || "N/A"}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default AllUserBookings;
