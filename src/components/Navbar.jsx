import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo-wheelsaway.png";
import SignUpModal from "./SignUpModal";

function OffcanvasExample(props) {
  const location = useLocation();
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const { userData } = useContext(AuthContext);
  const [defaultValueTap, setDefaultValueTap] = useState();
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar
        key="md"
        expand="md"
        className=""
        style={{ backgroundColor: `rgba(255, 255, 255, ${props.opacity})` }}
      >
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
                    <Nav.Link
                      className="btn-nav"
                      onClick={() => {
                        setModalShow(true);
                      }}
                    >
                      Login
                    </Nav.Link>

                    <SignUpModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </>
                )}
                {isLoggedIn && userData && (
                  <>
                    <NavDropdown
                      title={
                        <>
                          Welcome {userData.name}
                        </>
                      }
                      id={`offcanvasNavbarDropdown-expand-md`}
                    >
                      

                      <NavDropdown.Item href="/profile">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/reservations">
                        Reservations
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <Link className="" onClick={() => {
                        logOutUser()
                        setModalShow(false)
                      }}>
                        Log Out
                      </Link>
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
