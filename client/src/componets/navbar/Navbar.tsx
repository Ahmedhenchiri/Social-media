import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Navba = () => {
  return (
    <div>
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/">Social-media</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navba