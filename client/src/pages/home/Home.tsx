import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import api from '../../api/Api';
import Modal from '../../componets/custom/Modal/Modal'
import Post from '../../componets/Post/Post';

const  Home = () => {
  return (
      <div> 
      <Modal />
      <Post />
      </div>
  )
}

export default Home