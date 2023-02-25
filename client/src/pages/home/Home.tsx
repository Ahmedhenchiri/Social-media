import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Modal from '../../componets/custom/Modal/Modal'

const  Home = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);


  // const handleClick =()=>{
  //   const history = useHistory()
  //   history.push('/modal')
  // }
  return (
      <div>
      <Modal />
      </div>
  )
}

export default Home