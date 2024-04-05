import CardProduct from "../components/CardProduct";
import FilterCar from "../components/FilterCar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import { Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";


import ImageCar from "../assets/nissan.png";

import Apple from "../assets/appstore.png";

import Google from "../assets/googleplay.png";

// Import the string from the .env with URL of the API/server - http://localhost:5005
const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  const [cars, setCars] = useState([]);

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
        <h1 className="ms-4 ps-5">Drive Your <span style={{color: '#ec6749'}}>Dreams</span> !</h1>
        {/* <h2 className="ps-5 ms-5 ms-5">WheelsAway</h2> */}
        <p className="pt-3 ps-5 ms-2">Explore Worldwide Options: Download Our App Today!</p>
        <div className="pt-4 ps-5">

            <Image className="stores" src={Apple} />
            <Image className="stores" src={Google} />
        </div>
     
        <Image className="floating-car" src={ImageCar} />
      </section>
      <section className="filter-section">
        <FilterCar />
      </section>

      <section className="featured-cars">
        <h2> Explore our Top Rated Cars</h2>
      
      <Container fluid className="px-5 mt-5">
        <Row gap={4}>
          {cars?.map((car, index) => (
            <Col key={index} xs={12} md={4} lg={3} xl={3} className="mb-4">
              <Link className="custom-card-link" to={`/details/${car._id}`}>
                <CardProduct car={car}  />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
