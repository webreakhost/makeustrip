import React from 'react'
import Sidebar from './Sidebar'
import Navfilter from './Navfilter'
import Rentallist from './Rentallist'
import RentalList1 from './RentalList1'

const Searchlist = () => {
  return (
   
        <section className='gray-simple'>
            <div className='container'>
                <div className='row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4'>

                    <Sidebar/>
                    <div class="col-xl-9 col-lg-8 col-md-12">
                        <Navfilter/>
                        <div class="row align-items-center g-4 mt-2">
                            <RentalList1/>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
      
    
  )
}

export default Searchlist
