import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import api from '../../api/Api';
import Modal from '../../componets/custom/Modal/Modal'

const  Home = () => {
 const [data,setData] = useState<any>([]) 
 
 const getAllData = async () => {
  try{
  const response = await api.get("/post/")
  console.log("🚀 ~ file: home.tsx:13 ~ getAllData ~ response:", response.data)
  
  setData(response.data)
}catch(error){
  console.log(error)
}
 }
 useEffect(()=>{
  getAllData()
 },[])

  return (
      <div>
        
      <Modal />
      </div>
  )
}

export default Home