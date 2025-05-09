

// import React from 'react';

// const CabsTab = () => {
//   return (
//     <div>
//       <div className="row gy-3 gx-md-3 gx-sm-2">
//         {/* Left Section */}
//         <div className="col-xl-8 col-lg-7 col-md-12">
//           <div className="row gy-3 gx-md-3 gx-sm-2">
//             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
//               <div className="form-group hdd-arrow mb-0">
//                 <select className="pickup form-control fw-bold">
//                   <option value="">Select</option>
//                   <option value="ny">New York</option>
//                   <option value="sd">San Diego</option>
//                   <option value="sj">San Jose</option>
//                   <option value="ph">Philadelphia</option>
//                   <option value="nl">Nashville</option>
//                   <option value="sf">San Francisco</option>
//                   <option value="hu">Houston</option>
//                   <option value="sa">San Antonio</option>
//                 </select>
//               </div>
//             </div>
//             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//               <div className="form-group hdd-arrow mb-0">
//                 <select className="drop form-control fw-bold">
//                   <option value="">Select</option>
//                   <option value="ny">New York</option>
//                   <option value="sd">San Diego</option>
//                   <option value="sj">San Jose</option>
//                   <option value="ph">Philadelphia</option>
//                   <option value="nl">Nashville</option>
//                   <option value="sf">San Francisco</option>
//                   <option value="hu">Houston</option>
//                   <option value="sa">San Antonio</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="col-xl-4 col-lg-5 col-md-12">
//           <div className="row gy-3 gx-md-3 gx-sm-2">
//             <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
//               <div className="form-group mb-0">
//                 <input
//                   type="text"
//                   className="form-control choosedate fw-bold"
//                   placeholder="Choose Pickup Date"
//                   readOnly
//                 />
//               </div>
//             </div>
//             <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
//               <div className="form-group mb-0">
//                 <button
//                   type="button"
//                   className="btn btn-primary full-width fw-medium"
//                 >
//                   <i className="fa-solid fa-magnifying-glass me-2"></i>
//                   Search
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CabsTab;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";

// const CabsTab = () => {
//   const [location, setLocation] = useState("");
//   const [pickUpDate, setPickUpDate] = useState("");
//   const [dropOffDate, setDropOffDate] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleSearch = async () => {
//     if (!location || !pickUpDate || !dropOffDate) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     if (new Date(pickUpDate) >= new Date(dropOffDate)) {
//       alert("Drop-off date must be after pick-up date.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.get(`${BACKENDURL}/api/v1/cars/searchcar`, {
//         params: { location, pickUpDate, dropOffDate },
//       });

//       navigate(`/cars/${location}`, {
//         state: { cabs: response.data.data, pickUpDate, dropOffDate },
//       });
//     } catch (error) {
//       console.error("Error searching cabs:", error);
//       setError("An error occurred while searching for cabs. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="row gy-3 gx-md-3 gx-sm-2">
//       <div className="col-xl-8 col-lg-7 col-md-12">
//         <div className="row gy-3 gx-md-3 gx-sm-2">
//           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//             <input
//               type="text"
//               className="pickup form-control fw-bold"
//               placeholder="Enter Pickup Location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />
//           </div>
//           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//             <input
//               type="date"
//               className="form-control fw-bold"
//               value={pickUpDate}
//               onChange={(e) => setPickUpDate(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="col-xl-4 col-lg-5 col-md-12">
//         <div className="row gy-3 gx-md-3 gx-sm-2">
//           <div className="col-md-8">
//             <input
//               type="date"
//               className="form-control fw-bold"
//               value={dropOffDate}
//               onChange={(e) => setDropOffDate(e.target.value)}
//             />
//           </div>
//           <div className="col-md-4">
//             <button
//               type="button"
//               className="btn btn-primary full-width fw-medium"
//               onClick={handleSearch}
//             >
//               <i className="fa-solid fa-magnifying-glass me-2"></i>
//               Search
//             </button>
//           </div>
//         </div>
//         {loading && <p>Loading...</p>}
//         {error && <p className="text-danger">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default CabsTab;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";

const CabsTab = () => {
  const [location, setLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!location || !pickUpDate || !dropOffDate) {
      setError("Please fill in all fields.");
      return;
    }

    if (new Date(pickUpDate) >= new Date(dropOffDate)) {
      setError("Drop-off date must be after pick-up date.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`${BACKENDURL}/api/v1/cars/searchcar`, {
        params: { 
          location: location.trim(),
          pickUpDate: pickUpDate.trim(),
          dropOffDate: dropOffDate.trim()
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 && response.data.data.length > 0) {
        navigate(`/cars/${location}`, {
          state: { cabs: response.data.data, pickUpDate, dropOffDate },
        });
      } else {
        setError("No cars available for the selected criteria.");
      }
    } catch (error) {
      console.error("Error searching cabs:", error);
      if (error.response) {
        // If the server returned an error response
        setError(
          error.response.data.message ||
            "An error occurred while searching for cars. Please try again."
        );
      } else {
        // If there is a network error
        setError("Network error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row gy-3 gx-md-3 gx-sm-2">
      <div className="col-xl-8 col-lg-7 col-md-12">
        <div className="row gy-3 gx-md-3 gx-sm-2">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <input
              type="text"
              className="pickup form-control fw-bold"
              placeholder="Enter Pickup Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <input
              type="date"
              className="form-control fw-bold"
              value={pickUpDate}
              onChange={(e) => setPickUpDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-5 col-md-12">
        <div className="row gy-3 gx-md-3 gx-sm-2">
          <div className="col-md-8">
            <input
              type="date"
              className="form-control fw-bold"
              value={dropOffDate}
              onChange={(e) => setDropOffDate(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-primary full-width fw-medium"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? "Searching..." : <><i className="fa-solid fa-magnifying-glass me-2"></i>Search</>}
            </button>
          </div>
        </div>
        {error && <p className="text-danger mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default CabsTab;
