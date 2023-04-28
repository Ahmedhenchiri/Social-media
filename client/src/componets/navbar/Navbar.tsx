import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocaleStorge } from "../../Context/LocalStorageContext";


const Navba = () => {
  const { myData, logout } = useLocaleStorge();


  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Social-media</Navbar.Brand>
        <Nav className="me-auto">
          {myData ? (
            <>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/login" onClick={logout}>
                {" "}
                Log Out <i className="fa-solid fa-right-to-bracket "></i>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navba;
