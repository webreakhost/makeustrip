import React from 'react'
import SidebarFilter from './Sidebarfilter'
import Flightlist2 from './Flightlist2'

const Flightlist = () => {
  return (
    <div>
      <section className='gray-simple'>
        <div className='container'>
            <div className='row flex justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4'>                
                <SidebarFilter/>
                <Flightlist2/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Flightlist
