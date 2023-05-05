import { Button, Form, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocaleStorge } from "../../Context/LocalStorageContext";

const Navba = () => {
  const { myData, logout } = useLocaleStorge();
  const Data = myData ? JSON.parse(myData) : {};
  const image = Data.image;

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Social-media</Navbar.Brand>
        <Nav className="me-auto">
          {myData ? (
            <>
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/profile">
                <NavDropdown
                  style={{ position: "absolute", right: 95, top: 1 ,}}
                  id="basic-nav-dropdown"
                  title={
                    <img
                      src={image}
                      alt="no image"
                      style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                      }}
                    />
                  }
                
                >
                  <NavDropdown.Item href="/profile">
                    <img
                      src={image}
                      alt="no image"
                      style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                      }}
                    />
                    {"  "}
                    {Data.name}
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item href="/login" onClick={logout}>
                    Log Out <i className="fa-solid fa-right-to-bracket "></i>
                  </NavDropdown.Item>
                
                </NavDropdown>
                <Form className="d-flex">
               <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
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
