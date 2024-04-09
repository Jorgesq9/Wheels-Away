import Modal from "react-bootstrap/Modal";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import {
  Card,
  Image,
  Form,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { TbManualGearbox } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import SignUpModal from "./SignUpModal";
import { Link, useNavigate } from "react-router-dom";


const CarModal = (props) => {
  const [car, setCarDetails] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const navigate = useNavigate();
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const { user } = useContext(AuthContext);
  const [finalPrice, setFinalPrice] = useState(0);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    if (props.id !== null) {
      axios
        .get(`${API_URL}/api/cars/${props.id}`)
        .then((response) => {
          setCarDetails(response.data);
          console.log(car);
        })
        .catch((err) => console.log(err));
    }
  }, [props.id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newReservation = {
      car: props.id,
      startDate,
      endDate,
      totalPrice: finalPrice,
      user: user._id,
    };

    const authToken = localStorage.getItem("authToken");
    console.log(startDate);
    axios
      .post(`${API_URL}/api/rentals`, newReservation, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log("Reservation successfully", response.data);
        navigate("/reservations")
      })
      .catch((err) => {
        console.log("Error creating a reservation", err);
      });
  };

  useEffect(() => {
    if (car !== null) {
      const day = 1000 * 60 * 60 * 24;

      const start = new Date(startDate);
      const end = new Date(endDate);

      const timeStart = start.getTime(); // Marca de tiempo Unix de la fecha de inicio
      const timeFinish = end.getTime(); // Marca de tiempo Unix de la fecha de fin

      const differenceInTime = timeFinish - timeStart;
      const differenceInDays = Math.round(differenceInTime / day);
      setFinalPrice(differenceInDays * car.pricePerDay);
    }
  }, [endDate]);

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter "
      centered
      className="car-modal"
    >
      <Modal.Body>
        <div className="d-flex card-detail">
          <Container>
            <Row>
              <Col xs sm md="6" lg="6" xl="6" xxl="6" className="px-0 mx-0">
                {car && (
                  <Card className="w-100 card-car">
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
                            <FaRegUser className="me-1"/> {car.passengers}{" "}
                          </p>
                          <p className="custom-text-label me-1">
                            <GiCarDoor className="me-1"/> {car.doors}{" "}
                          </p>
                          <p className="custom-text-label">
                            <TbManualGearbox className="me-1"/> {car.transmission}{" "}
                          </p>
                        </Col>
                      </Row>
                    </Card.Body>
                    <Image src={car.images[0]} />
                    <Card.Body>
                      <Row className="align-items-space-between card-title-content ">
                        <Col>
                          <Card.Text className="custom-text-km">
                            <FaCheck className="me-1"/> Unlimited km{" "}
                          </Card.Text>
                          <Card.Text className="custom-price">
                            {" "}
                            <span className="pe-1">€</span>
                            {car.pricePerDay} <span className="ms-1">/day</span>
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                )}
              </Col>
              <Col
                xs
                sm
                md="6"
                lg="6"
                xl="6"
                xxl="6"
                className="px-0 mx-0 form-detail"
              >
                <Form onSubmit={handleSubmit} className="form-content">
                  <h4 className="pb-4">Rent your Car</h4>
                  <Form.Group controlId="startDate" className="pb-3">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="endDate" className="pb-3">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </Form.Group>
                  {finalPrice !== 0 && (
                    <>
                      <h6 className="pt-2">Your final price</h6>
                      <p className="pb-2">{finalPrice} €</p>
                    </>
                  )}
                  {!user ? (
                    <>
                      <span className="text-small ">
                        To make a reservation you need to be registered
                      </span>
          
                      <Link
                        className="btn-general mt-2"
                        onClick={props.onLogin} // Ya no necesitas la lógica de apertura aquí
                      >
                        Login
                      </Link>


                      <SignUpModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </>
                  ) : (
                    <>
                      <Button variant="primary" type="submit" onClick={props.onHide}>
                        Reserve
                      </Button>
                    </>
                  )}
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CarModal;
