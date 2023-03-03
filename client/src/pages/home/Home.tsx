import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import api from '../../api/Api';
import Modal from '../../componets/custom/Modal/Modal'
import Post from '../../componets/Post/Post';

const  Home = () => {
//  const [data,setData] = useState<any>([]) 
//  console.log("🚀 ~ file: home.tsx:9 ~ Home ~ data:", data)

//  const getAllData = async () => {
//   try{
//   const response = await api.get("/post/")  
//   setData(response.data)
// }catch(error){
//   console.log(error)
// }
//  }
//  useEffect(()=>{
//   getAllData()
//  },[])

  return (
      <div>
       
      <Modal />
      <Post />
      </div>
  )
}

export default Home