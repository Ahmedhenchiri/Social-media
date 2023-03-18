import React, { useState } from 'react'
import { useLocaleStorge } from '../../Context/LocalStorageContext'

const Profile = () => {
  const {myData} = useLocaleStorge()
  const Data = JSON.parse(myData);
 

  console.log(Data.email);



 


  return (
    <div>Profile</div>
  )
}

export default Profile