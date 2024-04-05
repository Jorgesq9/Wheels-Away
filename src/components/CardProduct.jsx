/* eslint-disable react/prop-types */
import { useState } from 'react';
import { TbManualGearbox } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import {
  Card, Carousel, Row, Col, Placeholder,
} from 'react-bootstrap';

function CardProduct({
  car
}) {
  const [ready, setReady] = useState(false);

  setTimeout(() => {
    if (!ready) setReady(true);
  }, 500);


  if (!ready) {
    return (
      <Card style={{ width: '18rem' }} className="text-start">
        <Placeholder as={Card.Image} animation="glow">
          <Placeholder className="placeholder-image" xs={6} />
        </Placeholder>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} />
            {' '}
            <Placeholder xs={4} />
            {' '}
            <Placeholder xs={4} />
            {' '}
            <Placeholder xs={6} />
            {' '}
            <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="w-100">
      <Carousel
        interval={null}
        indicators
        className="custom-carousel-product"
      >
        {car.images.map((imageUrl, imageId) => (
          // eslint-disable-next-line react/no-array-index-key
          <Carousel.Item key={imageId}>
            <Card.Img variant="top" src={imageUrl} />
          </Carousel.Item>
        ))}
      </Carousel>

      <Card.Body>
        <Row>
          <Col>
          <Card.Text className='rating'> <span className='icon-rating'><FaStar /></span>  {car.rating}</Card.Text></Col>
        </Row>
        <Row className="align-items-center card-title-content pt-2">
          <Col>
            <Card.Title className="custom-card-title ">{car.make} {car.model}</Card.Title>
          </Col>
        </Row>
        <Row className="align-items-center card-title-content pt-3">
          <Col>
            <Card.Text className="custom-text"><FaRegUser /> {car.passengers} passengers</Card.Text>
          </Col>
          <Col>
            <Card.Text className="custom-text"><GiCarDoor /> {car.doors} doors</Card.Text>
          </Col>
        </Row>
        <Row className="align-items-center card-title-content pt-2">
          <Col>
            <Card.Text className="custom-text">{car.year}</Card.Text>
          </Col>
          <Col>
            <Card.Text className="custom-text"><TbManualGearbox /> {car.transmission} </Card.Text>
          </Col>
        </Row>
        <Row className="align-items-space-between card-title-content pt-3">
          <Col>
            <Card.Text className="custom-price">€{car.pricePerDay} <span>/day</span></Card.Text>
          </Col>
          <Col>
            <button className='btn-booking'>Rent Now</button>
          </Col>
        </Row>
      
      </Card.Body>
    </Card>
  );
}

export default CardProduct;