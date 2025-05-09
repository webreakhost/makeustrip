import React from 'react'
// import CarInfo from './Carinfor'
import Carinfor from './Carinfor'
import { useLocation } from "react-router-dom";

const Cardetails = () => {
    const location = useLocation();
  const car = location.state?.car;

  return (
    <section className='pt-3 gray-simple'>
        <div className='container'>
            <div className='row'>
                <Carinfor car={car}/>

            </div>
        </div>
    </section>
  )
}

export default Cardetails
