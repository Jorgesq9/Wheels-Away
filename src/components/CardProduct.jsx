/* eslint-disable react/prop-types */
import { useState } from 'react';
import { TbManualGearbox } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import {
  Card, Image, Row, Col, Placeholder,
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
      <Card style={{ width: '18rem' }} gap="" className="text-start card-car" >
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
    <Card className="w-100 card-car">
     

      <Card.Body>
       
        <Row className="align-items-center card-title-content pt-2">
          <Col>
            <Card.Title className="custom-card-title ">{car.make} {car.model}</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex'>
            <Card.Text className="custom-text-label me-1"><FaRegUser /> {car.passengers} </Card.Text>
            <Card.Text className="custom-text-label me-1"><GiCarDoor /> {car.doors} </Card.Text>
            <Card.Text className="custom-text-label"><TbManualGearbox /> {car.transmission} </Card.Text>
          </Col>
        </Row>
       
        
      
      </Card.Body>
      <Image src={car.images[0]}/>
      <Card.Body>
      <Row className="align-items-space-between card-title-content ">
          <Col>
            <Card.Text className="custom-text-km"><FaCheck /> Unlimited km </Card.Text>
            <Card.Text className="custom-price"> <span className='pe-1'>€</span>{car.pricePerDay} <span>/ day</span></Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;