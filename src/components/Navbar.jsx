import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo-wheelsaway.png";
import SignUpModal from "./SignUpModal";
import ProfileModal from "./ProfileModal";
import { useTranslation} from 'react-i18next';

const locales = {
  en: { title: "English" },
  de: { title: "German" },
  es: { title: "Español" },
};
function OffcanvasNav(props) {
  const { t, i18n } = useTranslation();
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const { userData } = useContext(AuthContext);
  const [modalShow, setModalShow] = useState(false);
  const [modalShowPro, setModalShowPro] = useState(false);

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
                      {t('modals.login')}
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
                      title={<>{t('nav.welcome')} {userData.name}</>}
                      id={`offcanvasNavbarDropdown-expand-md`}
                    >
                      <NavDropdown.Item
                        className=""
                        onClick={() => {
                          setModalShowPro(true);
                        }}
                      >
                        {t('nav.profile')}
                      </NavDropdown.Item>

                      <ProfileModal
                        show={modalShowPro}
                        onHide={() => setModalShowPro(false)}
                      />
                      <NavDropdown.Item href="/reservations">
                      {t('nav.reservations')}
                      </NavDropdown.Item>
                      <Link
                        className="btn-general ms-3 mt-3"
                        onClick={() => {
                          logOutUser();
                          setModalShow(false);
                        }}
                      >
                        {t('nav.logout')}
                      </Link>
                    </NavDropdown>
                  </>
                )}
                <NavDropdown title={t('nav.languages')}>
                {Object.keys(locales).map((locale) => (
                  <NavDropdown.Item style={{
                    fontWeight:
                      i18n.resolvedLanguage === locale
                        ? "bold"
                        : "normal",
                  }} key={locale} onClick={() => i18n.changeLanguage(locale)}>{locales[locale].title}</NavDropdown.Item>
                ))}
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasNav;
