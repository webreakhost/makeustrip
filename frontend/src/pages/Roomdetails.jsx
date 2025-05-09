import React from 'react'
import RoomDetails from '../component/room/RoomDetails'
import Hoteldetailban from '../component/hotel/Hoteldetailban'
import Service from '../component/hotel/Service'
import Nearestservice from '../component/hotel/Nearestservice'
import GuestReview from '../component/hotel/Guestreview'
import Faq from '../component/hotel/Faq'
import Gallerybanner from '../component/room/Gallerybanner'
// import Roomdetails from '../component/hotel/Roomdetails'

const Roomdetails = () => {
  return (
    
      <section class="pt-3 gray-simple">
			<div class="container">
				<div class="row">
        <Gallerybanner/>
        <RoomDetails/>
        <Service/>
        <Nearestservice/>
        <GuestReview/>
        <Faq/>

        </div>
        </div>
        {/* </div> */}
        </section>

       
        
      
  
  )
}

export default Roomdetails
