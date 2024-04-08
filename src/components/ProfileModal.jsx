import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Card, Container, Row, Col, Placeholder, Image } from "react-bootstrap";

function ProfileModal(props) {
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
          Driver License
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
                <p className="mb-0">Name</p>
                <h6>{userData.name}</h6>
              </Col>
            </Row>
            <Row className="ms-2">
              <Col>
                <p className="mb-0">Email</p>
                <p className="mb-0">{userData.email}</p>
              </Col>
            </Row>
            <Row className="ms-2">
              <Col>
                <p className="mb-0">Driver License</p>
                <p className="mb-0">{userData.driverLicense}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer >
        <p className="text-center">your have license in from {formatDate(userData.createdAt)}</p>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileModal;
