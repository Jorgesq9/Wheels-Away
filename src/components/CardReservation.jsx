/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, Container, Row, Col, Placeholder, Image } from "react-bootstrap";
import { TbManualGearbox } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";

function CardReservation({ reservation }) {
  const [ready, setReady] = useState(false);
  function formatDate(dateString) {
    const date = new Date(dateString);
    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
      return "Fecha inválida";
    }
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Intl.DateTimeFormat("es-ES", options).format(date);
  }
  setTimeout(() => {
    if (!ready) setReady(true);
  }, 500);

  console.log(reservation);
  if (!ready) {
    return (
      <Card style={{ width: "18rem" }}>
        <Placeholder as={Card.Image} animation="glow">
          <Placeholder className="placeholder-image" xs={6} />
        </Placeholder>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="w-100 mb-3">
      <Card.Body className="pb-0">
        <Container>
          <Row className="card-title-content d-flex">
            <Col xs sm md="5" lg="5" xl="5" xxl="5">
              <Image className="w-100" src={reservation.car.images[0]}></Image>
            </Col>
            <Col xs sm md="7" lg="7" xl="7" xxl="7">
              <Card.Body>
                <Row className="align-items-center card-title-content pt-2">
                  <Col>
                    <Card.Title className="custom-card-title ">
                      {reservation.car.make} {reservation.car.model}
                    </Card.Title>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex">
                    <Card.Text className="custom-text-label me-1 mt-1 mb-0">
                      <FaRegUser /> {reservation.car.passengers}{" "}
                    </Card.Text>
                    <Card.Text className="custom-text-label me-1 mt-1 mb-0">
                      <GiCarDoor /> {reservation.car.doors}{" "}
                    </Card.Text>
                    <Card.Text className="custom-text-label mt-1 mb-0">
                      <TbManualGearbox /> {reservation.car.transmission}{" "}
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="">
                  <Col className="d-flex">
                    <Card.Text className="custom-text-label me-1 mt-1 mb-0 bolder-type">
                      Booking start
                     
                    </Card.Text>
                    <Card.Text className="custom-text-label me-1 mt-1 mb-0 bolder-type ">
                      Booking End
                      
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="">
                  <Col className="d-flex">
                    <Card.Text className="custom-text-label me-3 mt-2 mb-0">
                     
                      {formatDate(reservation.startDate)}{" "}
                    </Card.Text>
                    <Card.Text className="custom-text-label me-1 mt-2 mb-0">
                    
                      {formatDate(reservation.endDate)}
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="">
                  <Col className="d-flex">
                    <Card.Text className="custom-text-label me-1 mt-1 mb-0">
                      Price
                      {" "}
                      <span className="reservation-price ms-1 me-1">{reservation.totalPrice}</span> €
                    </Card.Text>
                  </Col>
                </Row>
                
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default CardReservation;
