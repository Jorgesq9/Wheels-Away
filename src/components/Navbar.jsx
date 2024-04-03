import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useLocation } from "react-router-dom";

function OffcanvasExample( props ) {
  const location = useLocation();
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  console.log(user)
  console.log("show the state of logged", isLoggedIn)


  return (
    <>
        <Navbar key="md" expand="md" className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    {isLoggedIn && (
                      <>
                        <h2>{user.name}</h2>
                        <h2>{user.driverLicense}</h2>
                        <h2>{user.photo}</h2>
                        <button className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-400" onClick={logOutUser}>Log Out </button>
                      </>
          )}
          {!isLoggedIn && location.pathname !== "/login" && location.pathname !== "/signup" && (
            <Link to ="/login">
              <button className="px-6 py-1 rounded bg-blue-500 text-white hover:bg-blue-400">Log In</button>
            </Link>
          )}
                    <NavDropdown.Item href="/signup">
                      Sign Up
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/reservations">
                      Reservations
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default OffcanvasExample;