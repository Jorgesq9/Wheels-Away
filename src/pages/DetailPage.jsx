import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { Card, Image, Form, Button, Row, Col, Container } from "react-bootstrap";
import { TbManualGearbox } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const API_URL = import.meta.env.VITE_API_URL;

const DetailPage = ({ setOpacity }) => {
  const { id } = useParams();
  const [car, setCarDetails] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { user } = useContext(AuthContext);
  const [finalPrice, setFinalPrice] = useState(null);

  useEffect(() => {
    setOpacity(1000);
    axios
      .get(`${API_URL}/api/cars/${id}`)
      .then((response) => {
        setCarDetails(response.data);
        console.log(car)
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const totalPrice = calculateTotalPrice(
      startDate,
      endDate,
      car.pricePerDay
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


  useEffect(() => {
   console.log(calculateTotalPrice())
   const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end - start;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    // setFinalPrice(differenceInDays * car.pricePerDay);

  },[startDate,endDate])
  const calculateTotalPrice = (startDate, endDate, pricePerDay) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end - start;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays * pricePerDay;
  };

  return (
    <>
     
      <div className="d-flex card-detail mx-5">
      <Container >

      
      <Row > 
        <Col xs sm md="6" lg="6" xl="6" xxl="6" className="px-0 mx-0"> 
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
                  <Card.Text className="custom-text-label me-1">
                    <FaRegUser /> {car.passengers}{" "}
                  </Card.Text>
                  <Card.Text className="custom-text-label me-1">
                    <GiCarDoor /> {car.doors}{" "}
                  </Card.Text>
                  <Card.Text className="custom-text-label">
                    <TbManualGearbox /> {car.transmission}{" "}
                  </Card.Text>
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
        </Col>
        <Col  xs sm md="6" lg="6" xl="6" xxl="6" className="px-0 mx-0 form-detail">
          
        <Form
          onSubmit={handleSubmit}
          className="form-content"
        >
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
          {calculateTotalPrice()}
          <Button variant="primary" type="submit">
            Reserve
          </Button>
        </Form>
        </Col>
       </Row>
      </Container>

      </div>
    </>
  );
};

export default DetailPage;
