import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function ProfileModal(props) {
  const { t, i18n } = useTranslation();
  const { user, userData } = useContext(AuthContext);
  function formatDate(dateString) {
    const date = new Date(dateString);
    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
      return "Fecha inválida";
    }
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Intl.DateTimeFormat("es-ES", options).format(date);
  }

  return (
    <Modal
      {...props}
      size="lg"
      className="modal-profile"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="title-modal">
        {t("modals.license")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="d-flex" xs="4" sm="4" md="4" lg="4" xl="4" xxl="4">
            <img className="user-dropdown" src={userData.photo} />
          </Col>
          <Col className="" xs="8" sm="8" md="8" lg="8" xl="8" xxl="8">
            <Row className="ms-2">
              <Col className="">
                <p className="mb-0">{t("modals.name")}</p>
                <h6>{userData.name}</h6>
              </Col>
            </Row>
            <Row className="ms-2">
              <Col>
                <p className="mb-0">{t("modals.email")}</p>
                <p className="mb-0">{userData.email}</p>
              </Col>
            </Row>
            <Row className="ms-2">
              <Col>
                <p className="mb-0">{t("modals.license")}</p>
                <p className="mb-0">{userData.driverLicense}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer >
        <p className="text-center">{t("modals.created")} {formatDate(userData.createdAt)}</p>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileModal;
