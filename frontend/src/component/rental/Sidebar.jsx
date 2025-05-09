import React from 'react'
import Filter from './Filter'
import Bedtype from './Bedtype'
import Rating from './Rating'
import Amenities from './Aminities'

const Sidebar = () => {
  return (
    <div class="col-xl-3 col-lg-4 col-md-12">
		<div class="filter-searchBar bg-white rounded-3">
            <Filter/>
            <div class="filter-searchBar-body">
                <Bedtype/>
                <Rating/>
                <Amenities/>
            </div>
        </div>
    </div>
    
  )
}

export default Sidebar
