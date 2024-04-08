import React, { useState, useContext,useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  Card, Image, Row, Col,
} from 'react-bootstrap';
import axios from "axios";
const API_URL = "http://localhost:5005";
import { AuthContext } from "../context/auth.context";
import { TbManualGearbox } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function LoginModal(props) {
  const [car, setCarDetails] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { user } = useContext(AuthContext);

  console.log(props.carId)
  useEffect(() => {
    axios
      .get(`${API_URL}/api/cars/${props.carId}`)
      .then((response) => {
        setCarDetails(response.data);
      })
      .catch((err) => console.log(err));
  }, [props.carId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const totalPrice = calculateTotalPrice(
      startDate,
      endDate,
      carDetails.pricePerDay
    );
    const newReservation = {
      car: id,
      startDate,
      endDate,
      totalPrice,
      user: user._id,
    };

    const authToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/rentals`, newReservation, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log("Reservation successfully", response.data);
      })
      .catch((err) => {
        console.log("Error creating a reservation", err);
      });
  };

  const calculateTotalPrice = (startDate, endDate, pricePerDay) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end - start;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays * pricePerDay;
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="d-flex mt-5 pt-5 ">
        {car && (
          <Card className="w-100">
            <Card.Body>
              <Row className="align-items-center card-title-content pt-2">
                <Col>
                  <Card.Title className="custom-card-title ">
                    {car.make} {car.model}
                  </Card.Title>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex">
                  <p className="custom-text-label me-1">
                    <FaRegUser /> {car.passengers}{" "}
                  </p>
                  <p className="custom-text-label me-1">
                    <GiCarDoor /> {car.doors}{" "}
                  </p>
                  <p className="custom-text-label">
                    <TbManualGearbox /> {car.transmission}{" "}
                  </p>
                </Col>
              </Row>
            </Card.Body>
            <Image src={car.images[0]} />
            <Card.Body>
              <Row className="align-items-space-between card-title-content ">
                <Col>
                  <Card.Text className="custom-text-km">
                    <FaCheck /> Unlimited km{" "}
                  </Card.Text>
                  <Card.Text className="custom-price">
                    {" "}
                    <span className="pe-1">€</span>
                    {car.pricePerDay} <span>/day</span>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Reserve
          </Button>
        </Form>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
