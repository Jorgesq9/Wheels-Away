import React from "react";
import Error from "../assets/404.svg";
import {
  Card,
  Image,
  Form,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
const ErrorPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="h-100 text-center pt-5 ">
            <Image className="image-error h-25 w-25"  src={Error} />
            <h4 className="mt-5">Sorry, we couldn't find the page you are looking for</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ErrorPage;
