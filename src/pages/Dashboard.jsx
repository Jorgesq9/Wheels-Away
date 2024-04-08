import CardProduct from "../components/CardProduct";
import FilterCar from "../components/FilterCar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Container, Image, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiWorld } from "react-icons/bi";
import { GiLoveMystery } from "react-icons/gi";
import ImageCar from "../assets/nissan.png";
import { FaCar } from "react-icons/fa";
import Apple from "../assets/appstore.png";

import Google from "../assets/googleplay.png";
import CarModal from "../components/CarModal";

// Import the string from the .env with URL of the API/server - http://localhost:5005
const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  const [cars, setCars] = useState([]);
  const [id, setId] = useState(null);
  const [availableCars, setAvailableCars] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const sliceCars = cars.slice(0,8);

  const getAllCars = () => {
    axios
      .get(`${API_URL}/api/cars`)
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <>
      <section className="header px-5">
        <h1 className="ms-3 ps-5 text-head">
          Drive Your <span style={{ color: "#ff5c3d" }}>Dreams</span> !
        </h1>
        {/* <h2 className="ps-5 ms-5 ms-5">WheelsAway</h2> */}
        <p className="pt-3 ps-5 ms-3">
          Explore Worldwide Options: Download Our App Today!
        </p>
        <div className="pt-4 ps-5">
          <Image className="stores" src={Apple} />
          <Image className="stores" src={Google} />
        </div>

        <Image className="floating-car" src={ImageCar} />
      </section>
      <section className="filter-section">
        <Container>
          <Row className=" d-flex justify-content-center">
            <Col className=" d-flex justify-content-center">
              <FilterCar setAvailableCars={setAvailableCars} />
            </Col>
          </Row>
          <Row className={availableCars !== null ? 'pt-5': 'pt-0'}>
            {availableCars?.map((car, index) => (
              <Col
                key={index}
                xs={12}
                md={6}
                lg={4}
                xl={3}
                className="mb-3 px-2"
              >
                <Link
                  className="custom-card-link"
                  key={index + 1}
                  onClick={() => {
                    setModalShow(true);
                    setId(car._id);
                  }}
                >
                  <CardProduct car={car} />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="brand pt-4 pb-2">
        <h2>RENT FIRST CLASS.</h2>
        <h2>PAY ECONOMY</h2>
        <p className="pt-2">
          Premium car rental at affordable rates. Worldwide.{" "}
        </p>
      </section>
      <section className="info-section pt-5 pb-5 bg-white">
        <Container>
          <Row>
            <Col   xs="12"
                sm="12"
                md="4"
                lg="4"
                xl="4"
                xxl="4">
              <p className="title-info">
                <BiWorld className="me-2"/>
                Global reach
              </p>
              <p className="text-inf">2,000+ SIXT stations in over 105 countries</p>
            </Col>
            <Col xs="12"
                sm="12"
                md="4"
                lg="4"
                xl="4"
                xxl="4">
              <p className="title-info">
                <FaCar className="me-2"/>
                Distinctive fleet
              </p>
              <p className="text-inf">From high-end convertibles to premium SUVs</p>
            </Col>
            <Col xs="12"
                sm="12"
                md="4"
                lg="4"
                xl="4"
                xxl="4">
              <p className="title-info">
                <GiLoveMystery className="me-2"/>
                Exceptional service
              </p>
              <p className="text-inf">Stress-free, trustworthy, no hidden costs</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="featured-cars">
        <h2 className="text-center pt-5"> Explore our Top Rated Cars</h2>

        <Container  className="px-5 mt-5">
          <Row gap={2}>
            {sliceCars?.map((car, index) => (
                <>
                  <Col
                    key={index}
                    xs={12}
                    md={6}
                    lg={4}
                    xl={3}
                    className="mb-3 px-2"
                  >
                    <CardProduct key={index} car={car} />
                  </Col>
                </>
              ))}
          </Row>
        </Container>
      </section>

      <CarModal show={modalShow} id={id} onHide={() => setModalShow(false)} />
    </>
  );
}

export default HomePage;
