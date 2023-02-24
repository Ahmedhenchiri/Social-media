import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { LocalStorageContext } from '../../Context/LocalStorageContext';


const Navba = () => {
  const {myData} = useContext(LocalStorageContext)
  console.log("🚀 ~ file: Navbar.tsx:11 ~ Navba ~ myData:", myData)
  return (
    <div>
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/">Social-media</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/register"> Log Out <i className="fa-solid fa-right-to-bracket " ></i></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navba