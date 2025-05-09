import React from 'react'
import DashboardMenu from '../component/userprofile/DashboardMenu'
import ProfileSection from '../component/userprofile/ProfileSection'

const Profile = () => {
  return (
    <div className='mt-5'>
        {/* user profile */}
        <DashboardMenu/>
        <ProfileSection/>
      
    </div>
  )
}

export default Profile
