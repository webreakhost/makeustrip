

// // import React from 'react';
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";

// const Gallerybanner = () => {

//   const { name } = useParams(); // Get hotel ID from URL params
//   // cont {name} = useParams(); // Get hotel name from URL params
//   const navigate = useNavigate(); // Navigation function from React Router
//   const [rooms, setRooms] = useState([]);
//   const [hotelName, setHotelName] = useState("");
//   const [hotelCity, setHotelCity] = useState("");

//   const extractHotelName = (urlName) => {
//     const cleanedName = urlName.split("-").slice(0, -1).join(" ").replace(/-/g, " ");
//     return cleanedName;
//   };


//   useEffect(() => {
//     // Fetch rooms by hotel ID
//     const formattedName = extractHotelName(name);
//     axios
//       .get(`${BACKENDURL}/api/v1/rooms/hotel/${formattedName}`) // Correct API endpoint
//       .then((response) => {
//         setRooms(response.data.rooms); // Rooms array from backend
//         setHotelName(response.data.hotelName || "Hotel"); // Dynamic hotel name
//         // console.log(response.data)
//         console.log(response.data)
//         setHotelCity(response.data.city || "Delhi");
//       })
//       .catch((error) => {
//         console.error("Error fetching room details:", error);
//       });
//   }, [name]);

//   return (
//     <div>
//       <section className="pt-3 gray-simple">
//         <div className="container">
//           <div className="row">
//             {/* Breadcrumb */}
//             <div className="col-xl-12 col-lg-12 col-md-12">

//               <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     {/* <a href="" className="text-primary">
//                       Hotels in {hotelCity}, IND
//                     </a> */}
//                   </li>


//                 </ol>
//               </nav>
//             </div>

//             {/* Gallery & Info */}
//             <div className="col-xl-12 col-lg-12 col-md-12">
//               <div className="card border-0 p-3 mb-4">
//                 <div className="crd-heaader d-md-flex align-items-center justify-content-between">
//                   <div className="crd-heaader-first">
//                     <div className="d-inline-flex align-items-center mb-1 gap-3">
//                       <span className="label bg-light-success text-success">{hotelName}</span>
//                       <span className="text-muted">
//                         <i className="fa-solid fa-location-dot me-1"></i>{hotelCity}
//                         <a href="#" className="text-primary fw-medium ms-2">Show on Map</a>
//                       </span>
//                     </div>
//                     <div className="d-block flex">

//                       <div className="d-inline-block ms-2">
//                         <i className="fa fa-star text-warning text-xs"></i>
//                         <i className="fa fa-star text-warning text-xs"></i>
//                         <i className="fa fa-star text-warning text-xs"></i>
//                         <i className="fa fa-star text-warning text-xs"></i>
//                         <i className="fa fa-star text-warning text-xs"></i>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="crd-heaader-last my-md-0 my-2">
//                     <div className="drix-wrap d-flex align-items-center">

//                       <div className="drix-last">
//                         <button type="button" className="btn btn-primary fw-semibold">Select Rooms</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Gallery Images */}
//                 <div className="galleryGrid typeGrid_3 mt-2">
//                   {['hotel-1', 'hotel-2', 'hotel-3', 'hotel-4', 'hotel-5', 'hotel-6', 'hotel-7'].map((image, index) => (
//                     <div className="galleryGrid__item" key={index}>
//                       <a href={`/assets/img/hotel/${image}.webp`} data-lightbox="roadtrip">
//                         <img src={`/assets/img/hotel/${image}.webp`} alt={`Hotel ${index + 1}`} className="rounded-2 img-fluid" />
//                       </a>
//                     </div>
//                   ))}

//                 </div>


//                 {/* second garry  */}

              

//               </div>
//             </div>

           

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Gallerybanner;



// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";

// const Gallerybanner = () => {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const [rooms, setRooms] = useState([]);
//   const [hotelName, setHotelName] = useState("");
//   const [hotelCity, setHotelCity] = useState("");

//   const extractHotelName = (urlName) => {
//     const cleanedName = urlName.split("-").slice(0, -1).join(" ").replace(/-/g, " ");
//     return cleanedName;
//   };

//   useEffect(() => {
//     const formattedName = extractHotelName(name);
//     axios
//       .get(`${BACKENDURL}/api/v1/rooms/hotel/${formattedName}`)
//       .then((response) => {
//         setRooms(response.data.rooms);
//         setHotelName(response.data.hotelName || "Hotel");
//         setHotelCity(response.data.city || "Delhi");
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching room details:", error);
//       });
//   }, [name]);

//   return (
//     <div>
//       <section className="pt-3 gray-simple">
//         <div className="container">
//           <div className="row">
//             {/* Breadcrumb */}
//             <div className="col-12">
//               <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item"></li>
//                 </ol>
//               </nav>
//             </div>

//             {/* Gallery & Info */}
//             <div className="col-12">
//               <div className="card border-0 p-3 mb-4">
//                 <div className="crd-heaader d-md-flex align-items-center justify-content-between">
//                   <div className="crd-heaader-first">
//                     <div className="d-inline-flex align-items-center mb-1 gap-3">
//                       <span className="label bg-light-success text-success">{hotelName}</span>
//                       <span className="text-muted">
//                         <i className="fa-solid fa-location-dot me-1"></i>{hotelCity}
//                         <a href="#" className="text-primary fw-medium ms-2">Show on Map</a>
//                       </span>
//                     </div>
//                     <div className="d-block flex">
//                       <div className="d-inline-block ms-2">
//                         <i className="fa fa-star text-warning text-xs"></i>
//                         <i className="fa fa-star text-warning text-xs"></i>
//                         <i className="fa fa-star text-warning text-xs"></i>
//                         <i className="fa fa-star text-warning text-xs"></i>
//                         <i className="fa fa-star text-warning text-xs"></i>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="crd-heaader-last my-md-0 my-2">
//                     <div className="drix-wrap d-flex align-items-center">
//                       <div className="drix-last">
//                         <button type="button" className="btn btn-primary fw-semibold">Select Rooms</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Gallery and Hotel Details */}
//                 <div className="row mt-3">
//                   <div className="col-md-8">
//                     <div className="row">
//                       {['hotel-1', 'hotel-2', 'hotel-3', 'hotel-4'].map((image, index) => (
//                         <div className="col-6 mb-3" key={index}>
//                           <a href={`/assets/img/hotel/${image}.webp`} data-lightbox="roadtrip">
//                             <img src={`/assets/img/hotel/${image}.webp`} alt={`Hotel ${index + 1}`} className="rounded-2 img-fluid" />
//                           </a>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="col-md-4">
//                     <div className="card border shadow-sm p-3">
//                       <h5 className="fw-bold mb-2">{hotelName}</h5>
//                       <p className="text-muted mb-2">
//                         <i className="fa-solid fa-location-dot me-2"></i>{hotelCity}
//                       </p>
//                       <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna eu libero pretium.</p>
//                       <button className="btn btn-outline-primary w-100">View More Details</button>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Gallerybanner;





import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";

const Gallerybanner = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [hotelName, setHotelName] = useState("");
  const [hotelCity, setHotelCity] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);

  const extractHotelName = (urlName) => {
    const cleanedName = urlName.split("-").slice(0, -1).join(" ").replace(/-/g, " ");
    return cleanedName;
  };

  useEffect(() => {
    const formattedName = extractHotelName(name);
    axios
      .get(`${BACKENDURL}/api/v1/rooms/hotel/${formattedName}`)
      .then((response) => {
        setRooms(response.data.rooms);
        setHotelName(response.data.hotelName || "Hotel");
        setHotelCity(response.data.city || "Delhi");

        // Randomly select one room for display
        if (response.data.rooms.length > 0) {
          const randomRoom =
            response.data.rooms[Math.floor(Math.random() * response.data.rooms.length)];
          setSelectedRoom(randomRoom);
        }
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
      });
  }, [name]);

  return (
    <div>
      <section className="pt-3 gray-simple">
        <div className="container">
          <div className="row">
            {/* Gallery and Hotel Info */}

            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"></li>
                </ol>
              </nav>
            </div>
            <div className="crd-heaader d-md-flex align-items-center justify-content-between">
                  <div className="crd-heaader-first">
                    <div className="d-inline-flex align-items-center mb-1 gap-3">
                      <span className="label bg-light-success text-success">{hotelName}</span>
                      <span className="text-muted">
                        <i className="fa-solid fa-location-dot me-1"></i>{hotelCity}
                        <a href="#" className="text-primary fw-medium ms-2">Show on Map</a>
                      </span>
                    </div>
                    <div className="d-block flex">
                      <div className="d-inline-block ms-2">
                        <i className="fa fa-star text-warning text-xs"></i>
                        <i className="fa fa-star text-warning text-xs"></i>
                        <i className="fa fa-star text-warning text-xs"></i>
                        <i className="fa fa-star text-warning text-xs"></i>
                        <i className="fa fa-star text-warning text-xs"></i>
                      </div>
                    </div>
                  </div>

                  {/* <div className="crd-heaader-last my-md-0 my-2">
                    <div className="drix-wrap d-flex align-items-center">
                      <div className="drix-last">
                        <button type="button" className="btn btn-primary fw-semibold">Select Rooms</button>
                      </div>
                    </div>
                  </div> */}
                </div>

            <div className="col-md-8">
              <div className="row">
                {['hotel-1', 'hotel-2', 'hotel-3', 'hotel-4'].map((image, index) => (
                  <div className="col-6 mb-3" key={index}>
                    <a href={`/assets/img/hotel/${image}.webp`} data-lightbox="roadtrip">
                      <img src={`/assets/img/hotel/${image}.webp`} alt={`Hotel ${index + 1}`} className="rounded-2 img-fluid" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Random Room Details */}
            <div className="col-md-4">
              <div className="card border shadow-sm p-3">
                

                {selectedRoom ? (
                  <>
                    <h6 className="fw-semibold">{selectedRoom.type}</h6>
                    <img
                      src={selectedRoom.images && selectedRoom.images.length > 0 
                        ? `${BACKENDURL}/${selectedRoom.images[0]}`
                        : "/default-room.jpg"}
                      className="img-fluid rounded-2 mb-3"
                      alt="Room"
                    />
                    {/* <p>{selectedRoom.description}</p> */}
                    <div className="flex flex-wrap gap-2 mt-3">
                  {selectedRoom.amenities?.slice(0, 4).map((amenity, index) => (
                    <span
                      key={index}
                      className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1"
                    >
                      <i className="fa-solid fa-circle-check text-primary"></i>
                      {amenity}
                     
                    </span>
                   
                  ))}
                   <h4>
                   Room Upgrade, subject to availability</h4>
                </div>
                    {/* <p><strong>Price:</strong> ₹{selectedRoom.price}</p>
                    <p><strong>Sleeps:</strong> {selectedRoom.sleeps}</p>
                    <p><strong>{selectedRoom.isRefundable ? "Refundable" : "Non-Refundable"}</strong></p> */}

<div className="grid grid-cols-2 gap-x-4 text-sm text-gray-700">
                  <p className="font-semibold">Price:</p>
                  <p className="text-right">₹{selectedRoom.price}</p>

                  <p className="font-semibold">Sleeps:</p>
                  <p className="text-right">{selectedRoom.sleeps}</p>

                  <p className="font-semibold">Refundable:</p>
                  <p className="text-right">
                    {selectedRoom.isRefundable ? "Yes" : "No"}
                  </p>
                </div>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => navigate("/roombook", { state: { room: selectedRoom, hotelName } })}
                    >
                      Book Now
                    </button>
                  </>
                ) : (
                  <p>No rooms available for this hotel.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallerybanner;


