/* eslint-disable react/prop-types */
import { useState } from 'react';
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
      <Card style={{ width: '18rem' }}>
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
        className="custom-carousel"
      >
        {car.images.map((imageUrl, imageId) => (
          // eslint-disable-next-line react/no-array-index-key
          <Carousel.Item key={imageId}>
            <Card.Img variant="top" src={imageUrl} />
          </Carousel.Item>
        ))}
      </Carousel>

      <Card.Body>
        <Row className="align-items-center card-title-content">
          <Col>
            <Card.Title className="custom-card-title ">{car.make}</Card.Title>
          </Col>
          <Col xs="auto " md="auto " lg="auto" className="align-self-baseline ">
            <Card.Text className="custom-card-rating">
              {' '}
              {car.model}
            </Card.Text>
          </Col>
        </Row>
        <Card.Text className="text-card mt-1">
          {' '}
          {car.year}
        </Card.Text>
        <Card.Text className="text-card">
          {' '}
          {car.licesePlate}
        </Card.Text>
        <Card.Text className="text-card-special mt-2">
          <span className="text-price">
            €
            {car.pricePerDay}
          </span>
          {' '}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;