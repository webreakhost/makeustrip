import React from 'react'
import Bannerhomeht from '../component/hotel/Bannerhomeht'
import Offer from '../component/hotel/Offer'
import Popularhotel from '../component/hotel/Popularhotel'
import Head from '../component/Head'

const Hotelhome = () => {
  return (
    <>
    <Head
        title="Book Hotels Online - Best Deals on Hotel Rooms | Make Us Trip"
        description="Find and book budget and luxury hotels across India and abroad. Get the best hotel booking deals, reviews, photos, and secure online booking with Make Us Trip."
        keywords="Hotel Booking, Online Hotels, Budget Hotels, Luxury Hotels, Make Us Trip Hotels, Best Hotel Deals, Hotel Rooms, India Hotels, International Hotels"
        image="https://www.makeustrip.in/hotelbooking-banner.png"
        url="https://www.makeustrip.in/hotels"
      />
      <div>
      <Bannerhomeht/>
      <Offer/>
      <Popularhotel/>
     
    </div>

    </>
    
  )
}

export default Hotelhome
