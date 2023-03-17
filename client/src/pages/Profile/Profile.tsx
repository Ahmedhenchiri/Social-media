import React, { useState } from 'react'
import { useLocaleStorge } from '../../Context/LocalStorageContext'

const Profile = () => {
  const {myData} = useLocaleStorge()



 
//  console.log("🚀 ~ file: Profile.tsx:8 ~ Profile ~ imageUrl:", imageUrl)

  return (
    <div>Profile</div>
  )
}

export default Profile