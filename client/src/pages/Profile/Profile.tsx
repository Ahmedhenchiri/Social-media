import { useEffect, useState } from 'react'
import api from '../../api/Api'
import { useLocaleStorge } from '../../Context/LocalStorageContext'
import "./Profile.css"
const Profile = () => {
  const {myData} = useLocaleStorge()
  const [data ,setData]=useState({name:"",image:"",email:""})
  const Data = JSON.parse(myData);
   const id = Data._id


// const getPostUser = async () => {
 
//   try{
//   const response = await api.get(`/post/getAll/${id}`)

//   console.log("🚀 ~ file: Profile.tsx:15 ~ getPostUser ~ response:", response.data)
  
//   }catch(error){
//     console.log(error)
//   }
// }
  useEffect(()=>{
    // getPostUser()
    getOneUser()
  },[])
  const getOneUser=async()=>{
    try{
      const response = await api.get(`/user/getOne/${id}`)
      setData(response.data)

    }catch(error){
      console.log(error)
  }
  }


 


  return (
    <div className='profile'>
    <div className="image">
    <svg viewBox="0 0 100 100" width="200" height="200">
    <circle cx="50" cy="50" r="50" />
    <clipPath id="circle-mask">
    <circle cx="50" cy="50" r="50" />
    </clipPath>
    <image className='pro' xlinkHref={data.image} width="100" height="100" clipPath="url(#circle-mask)" />
    </svg>
    <h1>{data.name}</h1>
    <h1>{data.email}</h1>
 
    
    </div>
    </div>
  )
}

export default Profile