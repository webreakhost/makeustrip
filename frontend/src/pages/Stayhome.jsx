import React from 'react'
import Bannerstay from '../component/stay/Bannerstay'
import Offer from '../component/flight/Offer'
import Populardest from '../component/flight/Populardest'
import Populardom from '../component/flight/Populardom'
import Head from '../component/Head'

const Stayhome = () => {
  return (
    <>
     <Head
        title="Comfortable & Affordable Stays - Book Now | Make Us Trip"
        description="Discover comfortable, affordable stays for your next trip. Book homestays, guesthouses, hostels, and villas at the best prices with Make Us Trip."
        keywords="Stay Booking, Guesthouse, Hostel, Villa, Homestay, Affordable Stay, Make Us Trip Stay, Travel Accommodation"
        image="https://www.makeustrip.in/staybanner.png"
        url="https://www.makeustrip.in/stay"
      />
      <div>
        <Bannerstay/>
        <div className='py-8'>
        <Offer/>

        </div>
        
        <Populardest/>
        <Populardom/>
      
    </div>
    </>
    
  )
}

export default Stayhome
