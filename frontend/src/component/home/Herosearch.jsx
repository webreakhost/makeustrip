


// import React from 'react';
// import FlightsTab from '../card/FlightsTab';
// import ToursTab from '../card/ToursTab';
// import CabsTab from '../card/CabsTab';
// import HotelsTab from '../card/HotelsTab';

// const HeroSearch = () => {
//   return (
//     <div className="search-explore-wrap lg:px-10">
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-12 col-lg-12 col-md-12">
//             <div className="search-wrap with-label overio">
//               <div className="row">
//                 <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//                   <div className="fliore">
//                     <div className="rounded-top-3 d-inline-flex overflow-hidden">
//                       <ul
//                         className="nav nav-tabs simple-tabs medium border-0 justify-content-center"
//                         id="tour-pills-tab"
//                         role="tablist"
//                       >
//                         <li className="nav-item">
//                           <a
//                             className="nav-link active"
//                             data-bs-toggle="tab"
//                             href="/hotels"
//                           >
//                             <i className="fa-solid fa-hotel me-2"></i>Hotels
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a
//                             className="nav-link"
//                             data-bs-toggle="tab"
//                             href="/flights"
//                           >
//                             <i className="fa-solid fa-jet-fighter me-2"></i>
//                             Flights
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a
//                             className="nav-link"
//                             data-bs-toggle="tab"
//                             href="/tours"
//                           >
//                             <i className="fa-solid fa-globe me-2"></i>Tour
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a
//                             className="nav-link"
//                             data-bs-toggle="tab"
//                             href="/cabs"
//                           >
//                             <i className="fa-solid fa-car me-2"></i>Cab
//                           </a>
//                         </li>
//                       </ul>
//                     </div>

//                     <div className="tab-content bg-white rounded-bottom-3 shadow-wrap p-3">
                      
//                       <HotelsTab/>
                      
//                       <FlightsTab/>
//                       <ToursTab/>
//                       <CabsTab/>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSearch;






import React, { useState } from 'react';
import FlightsTab from '../card/FlightsTab';
import ToursTab from '../card/ToursTab';
import CabsTab from '../card/CabsTab';
import HotelsTab from '../card/HotelsTab';

const HeroSearch = () => {
  const [activeTab, setActiveTab] = useState('hotels');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'hotels':
        return <HotelsTab />;
      case 'flights':
        return <FlightsTab />;
      case 'tours':
        return <ToursTab />;
      case 'cabs':
        return <CabsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="search-explore-wrap lg:px-10 py-0 bg-gray-100">
      <div className="container ">
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="search-wrap with-label overio">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="fliore">
                    <div className="rounded-top-3 d-inline-flex overflow-hidden">
                      <ul
                        className="nav nav-tabs simple-tabs medium border-0 justify-content-center"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <button
                            className={`nav-link ${activeTab === 'hotels' ? 'active' : ''}`}
                            onClick={() => setActiveTab('hotels')}
                          >
                            <i className="fa-solid fa-hotel me-2"></i>Hotels
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link ${activeTab === 'flights' ? 'active' : ''}`}
                            onClick={() => setActiveTab('flights')}
                          >
                            <i className="fa-solid fa-jet-fighter me-2"></i>Flights
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link ${activeTab === 'tours' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tours')}
                          >
                            <i className="fa-solid fa-globe me-2"></i>Tour
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link ${activeTab === 'cabs' ? 'active' : ''}`}
                            onClick={() => setActiveTab('cabs')}
                          >
                            <i className="fa-solid fa-car me-2"></i>Cab
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content bg-white rounded-bottom-3 shadow-wrap p-3">
                      {renderTabContent()}
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

export default HeroSearch;




// import React, { useState } from 'react';
// import FlightsTab from '../card/FlightsTab';
// import ToursTab from '../card/ToursTab';
// import CabsTab from '../card/CabsTab';
// import HotelsTab from '../card/HotelsTab';

// const HeroSearch = () => {
//   const [activeTab, setActiveTab] = useState('hotels');

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'hotels':
//         return <HotelsTab />;
//       case 'flights':
//         return <FlightsTab />;
//       case 'tours':
//         return <ToursTab />;
//       case 'cabs':
//         return <CabsTab />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="search-explore-wrap bg-gray-100 py-2 px-2 lg:px-4">
//       <div className="container mx-auto">
//         <div className="search-wrap with-label">
//           <div className="fliore">
//             <div className="rounded-t-3 d-inline-flex overflow-hidden">
//               <ul className="nav nav-tabs simple-tabs medium border-0 justify-center space-x-2">
//                 <li className="nav-item">
//                   <button
//                     className={`nav-link ${activeTab === 'hotels' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('hotels')}
//                   >
//                     <i className="fa-solid fa-hotel me-2"></i>Hotels
//                   </button>
//                 </li>
//                 <li className="nav-item">
//                   <button
//                     className={`nav-link ${activeTab === 'flights' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('flights')}
//                   >
//                     <i className="fa-solid fa-jet-fighter me-2"></i>Flights
//                   </button>
//                 </li>
//                 <li className="nav-item">
//                   <button
//                     className={`nav-link ${activeTab === 'tours' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('tours')}
//                   >
//                     <i className="fa-solid fa-globe me-2"></i>Tour
//                   </button>
//                 </li>
//                 <li className="nav-item">
//                   <button
//                     className={`nav-link ${activeTab === 'cabs' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('cabs')}
//                   >
//                     <i className="fa-solid fa-car me-2"></i>Cab
//                   </button>
//                 </li>
//               </ul>
//             </div>

//             <div className="tab-content bg-white rounded-b-3 shadow p-3 mt-2">
//               {renderTabContent()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSearch;
