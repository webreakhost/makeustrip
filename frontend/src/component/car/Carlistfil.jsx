import React from 'react'
import Filtersidebar from './Filtersidebar'
import Carlist from './Carlist'

const Carlistfil = () => {
  return (
    <section className='gray-simple'>
        <div className='container'>
            <div className='row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4'>
                <Filtersidebar/>
                <Carlist/>

            </div>
        </div>
    </section>
  )
}

export default Carlistfil
