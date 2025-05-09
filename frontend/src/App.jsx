// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './component/Header'
// import AppRoutes from './routes/AppRoutes'
// import Footer from './component/Footer'
// import { BrowserRouter as Router } from 'react-router-dom'
// // import Login from './pages/Login'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>

//     <div className=''>
//       {/* <Router> */}
//       {/* <Header/> */}
      
//       <Header/>     

      
      
//       <AppRoutes/>
      
//       <Footer/>

//       {/* </Router> */}
      
//       {/* <Login/> */}
      

//     </div>
      
//     </>
//   )
// }

// export default App




import { useState } from "react";
// import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./component/Footer";
// Removed the import of BrowserRouter here
import { useLocation } from "react-router-dom";

import HeaderSecondary from "./component/HeaderSecondry";

function App() {

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    // <div className="">
    //   {/* Remove the Router here */}
    //   <Header />
    //   <AppRoutes />
    //   <Footer />
    // </div>

    <div className="">
      {isHomePage ? <Header /> : <HeaderSecondary />}
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
