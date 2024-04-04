import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import CardReservation from "../components/CardReservation";

const API_URL = import.meta.env.VITE_API_URL;

const Bookings = () => {
  const [reservations, setReservations] = useState([]);
  const [cars, setCars] = useState([]);
  const { user, userData } = useContext(AuthContext);

  const getReservations = () => {
    axios
      .get(`${API_URL}/api/rentals/${user._id}`) // Aquí asumo que user tiene una propiedad "id"
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
  }, [user]); // Esto ejecutará el efecto cuando el valor de "user" cambie

  if (!reservations.length) {
    return <h2>No bookings yet</h2>;
  }

  return (
    <div>
      <h1>Bookings</h1>
      {reservations.map((reservation, index) => (
        <Link className="custom-card-link" to={`/reservations/${reservation._id}`}>
          <CardReservation reservation={reservation} />
        </Link>
      ))}
    </div>
  );
};

export default Bookings;
