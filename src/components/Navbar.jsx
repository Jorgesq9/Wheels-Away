import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Logo from "../assets/Logo-wheelsaway.png";

function OffcanvasExample(props) {
  const location = useLocation();
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const { userData } = useContext(AuthContext);
  console.log("show the state of logged", userData);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 200; // Ajusta este valor según tu preferencia para la transición
      const newOpacity = Math.min(scrollPosition / maxScroll, 1); // Limita la opacidad a 1
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Navbar key="md" expand="md" className="mb-3" style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}>
        <Container fluid>
          <Navbar.Brand href="/">
            <Image className="logo-image" src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                WheelsAway
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {!isLoggedIn && !userData && (
                  <>
                    <Nav.Link href="/login" className="btn-nav">Login</Nav.Link>

                    <Nav.Link href="/signup" className="btn-nav mx-3">Sign Up</Nav.Link>
                  </>
                )}
                {isLoggedIn && userData && (
                  <>
                    <NavDropdown
                      title={
                        <Image
                          className="user-dropdown"
                          src={userData.photo}
                          roundedCircle
                        />
                      }
                      id={`offcanvasNavbarDropdown-expand-md`}
                    >
                      <p>Welcome {userData.name}</p>

                      <NavDropdown.Item href="/profile">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/reservations">
                        Reservations
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <button
                        className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-400"
                        onClick={logOutUser}
                      >
                        Log Out{" "}
                      </button>
                    </NavDropdown>
                  </>
                )}
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
