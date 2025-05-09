

// import React, { useState } from "react";

// const BookTicketBox = ({
//   formData = {
//     from: "",
//     to: "",
//     departDate: "",
//     returnDate: "",
//   }, // Initialize default formData
//   handleFormDataChange, // Ensure this function properly updates the state in the parent component
//   handleFlightSearch,
// }) => {
//   const [isReturn, setIsReturn] = useState(true); // State to track if return is selected

//   const handleTripTypeChange = (type) => {
//     setIsReturn(type === "return");
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     handleFormDataChange({ ...formData, [name]: value });
//   };

//   return (
//     <div
      
//       className="image-cover hero-header bg-white"
//          style={{
//            backgroundImage: "url(/assets/img/banner-7.jpg)",
//            backgroundRepeat: "no-repeat",
//         }} 
//     >


//       {/* Header Section */}
//       <div className="head text-center mb-5 -mt-[10vw] sm:mt-[0vw]">
//         <h1 className="text-[8vw] sm:text-[35px] md:text-[50px] font-bold text-gray-900 mb-1">
//           A World Of Luxury Awaits For You
//         </h1>
//         <h3 className="text-[4vw] sm:text-[20px] md:text-[25px] font-semibold text-gray-900">
//           We Provide Our Best Facilities For You
//         </h3>
//       </div>

//       <div className="bg-white bg-opacity-90 p-3 pb-10 rounded-lg shadow-lg w-[90vw] md:w-[85vw] lg:w-[90vw]">
//         {/* Buttons for One Way and Return */}
//         <div className="flex gap-2 mb-5 justify-center">
//           <button
//             className={`px-4 py-2 rounded-lg ${!isReturn ? "bg-orange-500" : "bg-orange-50"} hover:bg-orange-300`}
//             onClick={() => handleTripTypeChange("oneWay")}
//           >
//             One Way
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg ${isReturn ? "bg-orange-500" : "bg-orange-50"} hover:bg-orange-300`}
//             onClick={() => handleTripTypeChange("return")}
//           >
//             Return
//           </button>
//         </div>

//         {/* Form Inputs - All in one row */}
//         <div className="row gy-3 gx-lg-2 gx-3 d-flex align-items-center justify-content-between">
//           {/* From City */}
//           <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6 position-relative">
//             <div className="form-group hdd-arrow mb-0">
//               <label htmlFor="from" className="form-label fw-bold text-lg">From City</label>
//               <input
//                 type="text"
//                 name="from"                
//                 className="leaving form-control fw-bold bg-gray-50 text-lg rounded-lg"
//                 value={formData.from}
//                 onChange={handleInputChange}
//                 placeholder="Enter city name"
//               />
//             </div>
//           </div>

//           {/* To City */}
//           <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
//             <div className="form-group hdd-arrow mb-0">
//               <label htmlFor="to" className="form-label fw-bold text-lg">To City</label>
//               <input
//                 type="text"
//                 name="to"
//                 className="goingto form-control fw-bold bg-gray-50 text-lg rounded-lg"
//                 value={formData.to}
//                 onChange={handleInputChange}
//                 placeholder="Enter city name"
//               />
//             </div>
//           </div>

//           {/* Departure Date */}
//           <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
//             <div className="form-group mb-0">
//               <label htmlFor="departDate" className="form-label fw-bold text-lg">Departure Date</label>
//               <input
//                 name="departDate"
//                 className="form-control fw-bold choosedate bg-gray-50 text-lg rounded-lg"
//                 type="date"
//                 value={formData.departDate}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           {/* Return Date (if applicable) */}
//           {isReturn && (
//             <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
//               <div className="form-group mb-0">
//                 <label htmlFor="returnDate" className="form-label fw-bold text-lg">Return Date</label>
//                 <input
//                   name="returnDate"
//                   className="form-control fw-bold choosedate bg-gray-50 text-lg rounded-lg"
//                   type="date"
//                   value={formData.returnDate}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//           )}
//           {/* Search Button */}
//           <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 -mb-7">
//             <div className="form-group mb-0">
//               <button
//                 type="button"
//                 className="btn btn-primary full-width fw-medium text-white px-4 py-3 rounded-lg"
//                 onClick={handleFlightSearch}
//               >
//                 <i className="fa-solid fa-magnifying-glass me-2"></i>Search
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookTicketBox;





import React, { useState } from "react";

const BookTicketBox = ({
  formData = {
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
  },
  handleFormDataChange,
  handleFlightSearch,
}) => {
  const [isReturn, setIsReturn] = useState(true);

  const handleTripTypeChange = (type) => {
    setIsReturn(type === "return");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleFormDataChange({ ...formData, [name]: value });
  };

  return (
    <div
      className="image-cover hero-header bg-white"
      style={{
        backgroundImage: "url(/assets/img/banner-7.jpg)",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header Section */}
      <div className="head text-center mb-5 -mt-[10vw] sm:mt-[0vw]">
        <h1 className="text-[8vw] sm:text-[35px] md:text-[50px] font-bold text-gray-900 mb-1">
          A World Of Luxury Awaits For You
        </h1>
        <h3 className="text-[4vw] sm:text-[20px] md:text-[25px] font-semibold text-gray-900">
          We Provide Our Best Facilities For You
        </h3>
      </div>

      <div className="bg-white bg-opacity-90 p-3 pb-10 rounded-lg shadow-lg w-[90vw] md:w-[85vw] lg:w-[90vw]">
        {/* Buttons for One Way and Return */}
        <div className="flex gap-2 mb-3 justify-center">
          <button
            className={`px-4 py-2 rounded-lg ${!isReturn ? "bg-orange-500" : "bg-orange-50"} hover:bg-orange-300`}
            onClick={() => handleTripTypeChange("oneWay")}
          >
            One Way
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${isReturn ? "bg-orange-500" : "bg-orange-50"} hover:bg-orange-300`}
            onClick={() => handleTripTypeChange("return")}
          >
            Return
          </button>
        </div>

        {/* Form Inputs */}
        <div className="row gy-3 gx-lg-2 gx-3 d-flex align-items-center justify-content-between flex-wrap">
          {/* From City */}
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <label className="form-label fw-bold text-lg">From City</label>
            <input
              type="text"
              name="from"
              className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
              value={formData.from}
              onChange={handleInputChange}
              placeholder="Enter city name"
            />
          </div>

          {/* To City */}
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <label className="form-label fw-bold text-lg">To City</label>
            <input
              type="text"
              name="to"
              className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
              value={formData.to}
              onChange={handleInputChange}
              placeholder="Enter city name"
            />
          </div>

          {/* Departure Date */}
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <label className="form-label fw-bold text-lg">Departure Date</label>
            <input
              name="departDate"
              className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
              type="date"
              value={formData.departDate}
              onChange={handleInputChange}
            />
          </div>

          {/* Return Date (if applicable) */}
          {isReturn && (
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <label className="form-label fw-bold text-lg">Return Date</label>
              <input
                name="returnDate"
                className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
                type="date"
                value={formData.returnDate}
                onChange={handleInputChange}
              />
            </div>
          )}

          {/* Search Button - Adjusted for Mobile */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mt-5 md:mt-0">
            <button
              type="button"
              className="btn btn-primary full-width fw-medium text-white w-full px-4 py-3 rounded-lg"
              onClick={handleFlightSearch}
            >
              <i className="fa-solid fa-magnifying-glass me-2"></i>Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTicketBox;
