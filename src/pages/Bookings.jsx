import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import CardReservation from "../components/CardReservation";
import {
  Card,
  Image,
  Form,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import NoBooking from "../assets/noBooking.svg";
import { useTranslation } from "react-i18next";

const API_URL = import.meta.env.VITE_API_URL;

const Bookings = () => {
  const [reservations, setReservations] = useState([]);
  const { t, i18n } = useTranslation();
  const { user } = useContext(AuthContext);

  const getReservations = () => {
    axios
      .get(`${API_URL}/api/rentals/${user._id}`)
      .then((response) => {
        const reservations = response.data;

        console.log(reservations);
        setReservations(reservations);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (user) {
      getReservations();
    }
  }, [user]); 

  if (!reservations.length) {
    return (
      <Container>
        <Row>
          <Col className="w-50 text-center pt-5 h-100 ">
            <Image className="image-error h-25 w-25"  src={NoBooking} />
            <h4 className="mt-5">{t('bookings.notBook')}</h4>
          </Col>
        </Row>
      </Container>

    )
  }

  return (
    <div className="p-5">
      <h1 className="pb-3">{t('bookings.booking')}</h1>
      <Row className="card-title-content d-flex">
        {reservations.map((reservation, index) => (
          <Col xs="12" sm="12" md="12" lg="6" xl="6" xxl="4">
            <Link
              className="custom-card-link"
              to={`/reservations/${reservation._id}`}
            >
              <CardReservation reservation={reservation} />
            </Link>
          </Col>
        ))}
      </Row>
      
    </div>
  );
};

export default Bookings;
