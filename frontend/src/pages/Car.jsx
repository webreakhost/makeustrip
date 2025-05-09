import React from 'react'
import Bannercar from '../component/car/Bannercar'
import Caroffer from '../component/car/Caroffer'
import Allcar from '../component/car/Allcar'
import Head from '../component/Head'

const Car = () => {
  return (
    <>
    <Head
        title="Book Affordable Cabs Online | Make Us Trip"
        description="Need a ride? Book reliable and affordable cabs with Make Us Trip. Choose from local, outstation, and airport taxi services at unbeatable prices."
        keywords="Cab Booking, Taxi Services, Outstation Cabs, Airport Taxi, Local Cab, Online Cab Booking, Make Us Trip Cabs"
        image="https://www.makeustrip.in/cabbanner.png"
        url="https://www.makeustrip.in/cab-booking"
      />
      <div>
        <Bannercar/>
        <Caroffer/>
        <Allcar/>
      
    </div>

    </>
    
  )
}

export default Car
