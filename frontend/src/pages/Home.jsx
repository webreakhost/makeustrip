import React from 'react'
import Herobanner from '../component/home/Herobanner'
import Herosearch from '../component/home/Herosearch'
import Toursoffer from '../component/home/Toursoffer'
import Popularat from '../component/home/Popularat'

import VideoHelp from '../component/home/Vidiohelp'
import Review from '../component/home/Review'
import Exprience from '../component/home/Exprience'
import Calltoaction from '../component/home/Calltoaction'
import Hoteldet from '../component/hotel/Hoteldet'
import Hoteldethome from '../component/home/Hoteldethome'
import Herobannermob from '../component/home/Herobannermob'

const Home = () => {
  return (
    <div>
        {/* <Herobanner/> */}
        <div className="hidden md:block">
        <Herobanner />
      </div>

      {/* Mobile HeroBanner1 */}
      <div className="block md:hidden">
        <Herobannermob />
      </div>
        <Herosearch/>
        {/* <div className='gray-simple '> */}
          <Toursoffer/>

        {/* </div> */}
        {/* <Toursoffer/> */}
        <div className='gray-simple mt-5'>
        <Popularat/>

        </div>
        
        
        {/* <Hoteldet/> */}
        
        <Hoteldethome/>
        
        <Review/>
        <Exprience/>
        <Calltoaction/>
      
    </div>
  )
}

export default Home





