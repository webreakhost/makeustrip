



// import React from 'react';

// // Reusable component for an individual attraction card
// const AttractionCard = ({ imageSrc, cityName, thingsToDo }) => {
//   return (
//     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
//       <div className="pop-touritem">
//         <a href="#" className="card rounded-3 border br-dashed m-0">
//           <div className="flight-thumb-wrapper p-2 pb-0">
//             <div className="popFlights-item-overHidden rounded-3">
//               <img src={imageSrc} className="img-fluid" alt={cityName} />
//             </div>
//           </div>
//           <div className="touritem-middle position-relative p-3">
//             <div className="touritem-flexxer">
//               <div className="explot">
//                 <h4 className="city fs-6 m-0 fw-bold">
//                   <span>{cityName}</span>
//                 </h4>
//                 <div className="rates">
//                   <div className="rat-reviews">
//                     <span>{thingsToDo} Things To Do</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// };

// const Popularat = () => {
//   const attractions = [
//     { imageSrc: '/assets/img/attr/attr-7.webp', cityName: 'New Delhi', thingsToDo: 260 },
//     { imageSrc: '/assets/img/attr/attr-5.webp', cityName: 'Mumbai', thingsToDo: 240 },
//     { imageSrc: '/assets/img/attr/attr-6.webp', cityName: 'Jaipur', thingsToDo: 312 },
//     { imageSrc: '/assets/img/attr/attr-8.webp', cityName: 'Goa', thingsToDo: 220 },
//     { imageSrc: '/assets/img/attr/attr-9.webp', cityName: 'Agra', thingsToDo: 180 },
//     { imageSrc: '/assets/img/attr/attr-10.webp', cityName: 'Udaipur', thingsToDo: 612 },
//     { imageSrc: '/assets/img/attr/attr-1.webp', cityName: 'Kolkata', thingsToDo: 145 },
//     { imageSrc: '/assets/img/attr/attr-2.webp', cityName: 'Varanashi', thingsToDo: 310 },
//   ];

//   return (
//     <div>
//       <section>
//         <div className="container">
//           {/* Section Heading */}
//           <div className="row align-items-center justify-content-center">
//             <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
//               <div className="secHeading-wrap text-center mb-5">
//                 <h3 className='text-4xl text-red-600'>Best Tour and Travel Destination Near Me </h3>
//                 <p>Looking for the perfect getaway near you? Explore breathtaking destinations just a short trip away! Whether it's scenic hill stations, serene beaches, or historical landmarks, find the best travel spots that suit your adventure. Discover hidden gems, enjoy local culture, and make unforgettable memories with Make Us Trip!</p>
//               </div>
//             </div>
//           </div>

//           {/* Attraction Cards */}
//           <div className="row justify-content-center gy-4 gx-xl-3 gx-lg-4 gx-4">
//             {attractions.map((attraction, index) => (
//               <AttractionCard
//                 key={index}
//                 imageSrc={attraction.imageSrc}
//                 cityName={attraction.cityName}
//                 thingsToDo={attraction.thingsToDo}
//               />
//             ))}
//           </div>

//           {/* Explore More Button */}
//           <div className="row align-items-center justify-content-center">
//             <div className="col-xl-12 col-lg-12 col-md-12">
//               <div className="text-center position-relative mt-5">
//                 <button type="button" className="btn btn-light-primary fw-medium px-5">
//                   Explore More<i className="fa-solid fa-arrow-trend-up ms-2"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Popularat;



import React from 'react';

// Reusable component for an individual attraction card
const AttractionCard = ({ imageSrc, cityName, thingsToDo }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
      <div className="pop-touritem">
        <a href="#" className="card rounded-3 border br-dashed m-0">
          <div className="flight-thumb-wrapper p-2 pb-0">
            <div className="popFlights-item-overHidden rounded-3">
              <img
                src={imageSrc}
                width="350"
                height="220"
                className="img-fluid"
                loading="lazy"
                alt={`Tour image of ${cityName}`}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="touritem-middle position-relative p-3">
            <div className="touritem-flexxer">
              <div className="explot">
                <h4 className="city fs-6 m-0 fw-bold">
                  <span>{cityName}</span>
                </h4>
                <div className="rates">
                  <div className="rat-reviews">
                    <span>{thingsToDo} Things To Do</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const Popularat = () => {
  const attractions = [
    { imageSrc: '/assets/img/attr/attr-7.webp', cityName: 'New Delhi', thingsToDo: 260 },
    { imageSrc: '/assets/img/attr/attr-5.webp', cityName: 'Mumbai', thingsToDo: 240 },
    { imageSrc: '/assets/img/attr/attr-6.webp', cityName: 'Jaipur', thingsToDo: 312 },
    { imageSrc: '/assets/img/attr/attr-8.webp', cityName: 'Goa', thingsToDo: 220 },
    { imageSrc: '/assets/img/attr/attr-9.webp', cityName: 'Agra', thingsToDo: 180 },
    { imageSrc: '/assets/img/attr/attr-10.webp', cityName: 'Udaipur', thingsToDo: 612 },
    { imageSrc: '/assets/img/attr/attr-1.webp', cityName: 'Kolkata', thingsToDo: 145 },
    { imageSrc: '/assets/img/attr/attr-2.webp', cityName: 'Varanashi', thingsToDo: 310 },
  ];

  return (
    <section>
      <div className="container">
        {/* Section Heading */}
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
            <div className="secHeading-wrap text-center mb-8">
              <h3 className="text-4xl text-red-700 -mt-5">
                Best Tour and Travel Destination Near Me
              </h3>
              <p>
                Looking for the perfect getaway near you? Explore breathtaking destinations just a short trip away! Whether it's scenic hill stations, serene beaches, or historical landmarks, find the best travel spots that suit your adventure. Discover hidden gems, enjoy local culture, and make unforgettable memories with Make Us Trip!
              </p>
            </div>
          </div>
        </div>

        {/* Attraction Cards */}
        <div className="row justify-content-center gy-4 gx-xl-3 gx-lg-4 gx-4">
          {attractions.map((attraction, index) => (
            <AttractionCard
              key={index}
              imageSrc={attraction.imageSrc}
              cityName={attraction.cityName}
              thingsToDo={attraction.thingsToDo}
            />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="text-center position-relative mt-5">
              <button type="button" className="btn btn-light-primary fw-medium px-5">
                Explore More<i className="fa-solid fa-arrow-trend-up ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popularat;

