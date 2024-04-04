import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { Card, Carousel, Form, Button } from 'react-bootstrap';

const API_URL = import.meta.env.VITE_API_URL;

const DetailPage = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`${API_URL}/api/cars/${id}`)
      .then(response => {
        setCarDetails(response.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const totalPrice = calculateTotalPrice(startDate, endDate, carDetails.pricePerDay);
    const newReservation = {
      car: id,
      startDate,
      endDate,
      totalPrice,
      user: user._id, 
    };

   
    const authToken = localStorage.getItem('authToken'); 

    axios.post(`${API_URL}/api/rentals`, newReservation, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then(response => {
      console.log("Reservation successfully", response.data);
      
    })
    .catch(err => {
      console.log("Error creating a reservation", err);
      
    });
  };

  
  const calculateTotalPrice = (startDate, endDate, pricePerDay) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end - start;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays * pricePerDay;
  };

  return (
    <Card className="w-100">
      {carDetails && (
        <>
          <Carousel interval={null} indicators className="custom-carousel">
            {carDetails.images.map((imageUrl, index) => (
              <Carousel.Item key={index}>
                <Card.Img variant="top" src={imageUrl} />
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Body>
            <Card.Title>{carDetails.make} {carDetails.model}</Card.Title>
            <Card.Text>{carDetails.year}</Card.Text>
            <Card.Text>€{carDetails.pricePerDay} / day</Card.Text>

            {/* Aquí comienza el formulario de reserva */}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="endDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Reserve
              </Button>
            </Form>
          </Card.Body>
        </>
      )}
    </Card>
  );
};

export default DetailPage;