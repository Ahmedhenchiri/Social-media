import React, { useState } from 'react'
import { useLocaleStorge } from '../../Context/LocalStorageContext'
import "./Profile.css"
const Profile = () => {
  const {myData} = useLocaleStorge()
  const Data = JSON.parse(myData);
  console.log("🚀 ~ file: Profile.tsx:7 ~ Profile ~ Data:", Data)
 





 


  return (
    <div>
    <div className="image">
    <svg viewBox="0 0 100 100" width="200" height="200">
    <circle cx="50" cy="50" r="50" />
    <clipPath id="circle-mask">
    <circle cx="50" cy="50" r="50" />
    </clipPath>
    <image className='profile' xlinkHref={Data.image} width="100" height="100" clipPath="url(#circle-mask)" />
    </svg>
    <h1>{Data.name}</h1>
    <h1>{Data.email}</h1>
    {/* <h1>{Data.posts}</h1> */}
    
    </div>
    </div>
  )
}

export default Profile