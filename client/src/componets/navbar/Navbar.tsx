import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Navba = () => {
  return (
    <div>
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Social-media</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/login">login</Nav.Link>
        <Nav.Link href="/register">register</Nav.Link>
       

      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navba