



// import React, { useState, useEffect, useCallback } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";

// const RoomDetails = () => {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const [rooms, setRooms] = useState([]);
//   const [hotelName, setHotelName] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`${BACKENDURL}/api/v1/rooms/hotel/${name}`);
//         setRooms(response.data.rooms || []);
//         setHotelName(response.data.hotelName || "Hotel");
//         setError("");
//       } catch (error) {
//         console.error("Error fetching room details:", error);
//         setError("Failed to fetch room details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRooms();
//   }, [name]);

//   const handleBookRoom = useCallback(
//     (room) => {
//       navigate("/roombook", { state: { room, hotelName } });
//     },
//     [navigate, hotelName]
//   );

//   if (loading) return <p className="text-center py-5">Loading room details...</p>;
//   if (error) return <p className="text-center text-danger py-5">{error}</p>;

//   return (
//     <div className="container -mt-14">
//       <h2 className="fw-bold mb-8">{hotelName} - Room Details</h2>
//       <div className="row g-4">
//         {rooms.length > 0 ? (
//           rooms.map((room) => {
//             const taxAmount = (room.price * 0.1).toFixed(2);
//             const imageUrl =
//               room.images && room.images.length > 0
//                 ? `${BACKENDURL}/${room.images[0]}`
//                 : "/default-room.jpg";

//             return (
//               <div key={room._id} className="col-xl-12 col-lg-12 col-md-12">
//                 <div className="card mb-4">
//                   <div className="card-header">
//                     <h6 className="fw-semibold mb-0">{room.type}</h6>
//                   </div>
//                   <div className="card-body">
//                     <div className="row align-items-start">
//                       {/* Room Image */}
//                       <div className="col-xl-3 col-lg-4 col-md-4">
//                         <div className="roomavls-groups">
//                           <div className="roomavls-thumb mb-2">
//                             <img
//                               src={imageUrl}
//                               loading="lazy"
//                               className="img-fluid rounded-2 col-xl-12 w-full"
//                               alt={room.type}
//                             />
//                           </div>
//                           <div className="roomavls-caps">
//                             <div className="roomavls-escols d-flex align-items-start mb-2">
//                               <span className="label bg-light-purple text-purple me-2">{room.bedType}</span>
//                               <span className="label bg-light-purple text-purple">{room.sleeps} Sleeps</span>
//                             </div>
//                             <ul className="row align-items-center gx-2 gy-1 mb-0 p-0">
//                               {room.amenities?.slice(0, 4).map((amenity, index) => (
//                                 <li key={index} className="col-6">
//                                   <span className="text-muted-2 text-md">
//                                     <i className="fa-solid fa-circle-check me-2"></i>
//                                     {amenity}
//                                   </span>
//                                 </li>
//                               ))}
//                               {room.amenities?.length > 4 && (
//                                 <li className="col-12">
//                                   <a href="#" className="text-primary fw-medium text-md">
//                                     Show More Room Amenities
//                                   </a>
//                                 </li>
//                               )}
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Room Details */}
//                       <div className="col-xl-9 col-lg-8 col-md-8">
//                         <div className="d-block border br-dashed rounded-2 px-3 py-3 mb-3">
//                           <div className="d-flex align-items-sm-end justify-content-between flex-sm-row flex-column">
//                             <div className="typsofrooms-wrap mb-5">
//                               <h6 className="fs-6 fw-semibold mb-2">Room Details</h6>
//                               <ul className="row align-items-center g-1 mb-0 p-0">
//                                 <li className="col-12">
//                                   <span className="text-muted-2 text-md">
//                                     <i className="fa-solid fa-file-alt me-2"></i>
//                                     {room.description}
//                                   </span>
//                                 </li>
//                                 <li className="col-12">
//                                   <span className="text-muted-2 text-md">
//                                     <i className="fa-solid fa-ban-smoking me-2"></i>
//                                     {room.isRefundable ? "Refundable" : "Non-Refundable"}
//                                   </span>
//                                 </li>
//                                 <li className="col-12">
//                                   <span className="text-success text-md">
//                                     <i className="fa-solid fa-circle-check me-2"></i>
//                                     {room.availability ? "Available" : "Unavailable"}
//                                   </span>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="typsofrooms-action col-auto">
//                               <div className="text-dark fw-semibold fs-4">₹{room.price}</div>
//                               <div className="text-muted-2 text-sm">
//                                 After tax ₹{(+room.price + +taxAmount).toFixed(2)}
//                               </div>
//                               <div className="mt-3 d-flex flex-column align-items-start align-items-md-end">
//                                 <button
//                                   className="btn btn-sm btn-light-primary rounded-1 fw-medium px-4 mb-2"
//                                   onClick={() => handleBookRoom(room)}
//                                 >
//                                   Book at This Price
//                                 </button>
//                                 <button className="btn btn-sm btn-primary rounded-1 fw-medium px-4">
//                                   Access Lower Price
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       {/* / Room Details */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p>No rooms available for this hotel.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RoomDetails;



import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";

const RoomDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [hotelName, setHotelName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Function to extract hotel name without random string
  const extractHotelName = (urlName) => {
    const cleanedName = urlName.split("-").slice(0, -1).join(" ").replace(/-/g, " ");
    return cleanedName;
  };

  
  

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const formattedName = extractHotelName(name);
        const response = await axios.get(`${BACKENDURL}/api/v1/rooms/hotel/${formattedName}`);
        setRooms(response.data.rooms || []);
        setHotelName(response.data.hotelName || "Hotel");
        setError("");
      } catch (error) {
        console.error("Error fetching room details:", error);
        setError("Failed to fetch room details.");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [name]);

  const handleBookRoom = useCallback(
    (room) => {
      navigate("/roombook", { state: { room, hotelName } });
    },
    [navigate, hotelName]
  );

  if (loading) return <p className="text-center py-5">Loading room details...</p>;
  if (error) return <p className="text-center text-danger py-5">{error}</p>;

  return (
    <div className="container -mt-14">
      <h2 className="fw-bold mb-8">{hotelName} - Room Details</h2>
      <div className="row g-4">
        {rooms.length > 0 ? (
          rooms.map((room) => {
            const taxAmount = (room.price * 0.1).toFixed(2);
            const imageUrl =
              room.images && room.images.length > 0
                ? `${BACKENDURL}/${room.images[0]}`
                : "/default-room.jpg";

            return (
              <div key={room._id} className="col-xl-12 col-lg-12 col-md-12">
                <div className="card mb-4">
                  <div className="card-header">
                    <h6 className="fw-semibold mb-0">{room.type}</h6>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-start">
                      <div className="col-xl-3 col-lg-4 col-md-4">
                        <div className="roomavls-groups">
                          <div className="roomavls-thumb mb-2">
                            <img
                              src={imageUrl}
                              loading="lazy"
                              className="img-fluid rounded-2 col-xl-12 w-full"
                              alt={room.type}
                            />
                          </div>
                          <div className="roomavls-caps">
                            <div className="roomavls-escols d-flex align-items-start mb-2">
                              <span className="label bg-light-purple text-purple me-2">{room.bedType}</span>
                              <span className="label bg-light-purple text-purple">{room.sleeps} Sleeps</span>
                            </div>
                            <ul className="row align-items-center gx-2 gy-1 mb-0 p-0">
                              {room.amenities?.slice(0, 4).map((amenity, index) => (
                                <li key={index} className="col-6">
                                  <span className="text-muted-2 text-md">
                                    <i className="fa-solid fa-circle-check me-2"></i>
                                    {amenity}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-9 col-lg-8 col-md-8 ">
                        <div className="d-block border br-dashed rounded-2 px-3 py-3 mb-3 bg-gray-50">
                          <div className="d-flex align-items-sm-end justify-content-between flex-sm-row flex-column">
                            <div className="typsofrooms-wrap mb-5">
                              <h6 className="fs-6 fw-semibold mb-2">Room Details</h6>
                              <ul className="row align-items-center g-1 mb-0 p-0 ">
                                <li className="col-12">
                                  <span className="text-muted-2 text-md text-white">{room.description}</span>
                                </li>
                                <li className="col-12">
                                  <span className="text-muted-2 text-md">{room.isRefundable ? "Refundable" : "Non-Refundable"}</span>
                                </li>
                                {/* <li className="col-12">
  <span className="text-blue-600 text-md">{room.description}</span>
</li>
<li className="col-12">
  <span className="text-white text-md">{room.isRefundable ? "Refundable" : "Non-Refundable"}</span>
</li> */}
                                <li className="col-12">
                                  <span className="text-success text-md">{room.availability ? "Available" : "Unavailable"}</span>
                                </li>
                              </ul>
                            </div>
                            <div className="typsofrooms-action col-auto">
                              <div className="text-dark fw-semibold fs-4">₹{room.price}</div>
                              <div className="text-muted-2 text-sm">After tax ₹{(+room.price + +taxAmount).toFixed(2)}</div>
                              <div className="mt-3 d-flex flex-column align-items-start align-items-md-end">
                                <button
                                  className="btn btn-sm btn-light-primary rounded-1 fw-medium px-4 mb-2"
                                  onClick={() => handleBookRoom(room)}
                                >
                                  Book at This Price
                                </button>
                                <button className="btn btn-sm btn-primary rounded-1 fw-medium px-4">
                                  Access Lower Price
                                </button>
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
          })
        ) : (
          <p>No rooms available for this hotel.</p>
        )}
      </div>
    </div>
  );
};

export default RoomDetails;
