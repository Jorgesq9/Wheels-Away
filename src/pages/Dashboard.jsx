
import CardProduct from '../components/CardProduct';
import FilterCar from '../components/FilterCar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from "axios";

// Import the string from the .env with URL of the API/server - http://localhost:5005
const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {

    const [cars, setCars] = useState([]);


    const getAllCars = () => {
      axios
      .get(`${API_URL}/api/cars`)
      .then((response) => {
        setCars(response.data)
      })
      .catch((error) => console.log(error))
    }

    useEffect(() => {
      getAllCars()
    }, [])

    return (
        <>
            <FilterCar />

            <section className="featured-cars">
                <h2> Cars</h2>
                <div className="cars-list">
                    {/* Render car components here */}
                </div>
            </section>
            <Container fluid className="px-5">
            <Row gap={4}>
                {cars?.map((car) => (
                    <Col key={car.id} xs={12} md={4} lg={3} xl={3}>
                    <Link className="custom-card-link" to={`/details/${car._id}`}>
                        <CardProduct
                        car={car}
                        />
                    </Link>
                    </Col>
                ))}
            </Row>
      </Container>

            <Footer/>
        </>
    );
}

export default HomePage;

