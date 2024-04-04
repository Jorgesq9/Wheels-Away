import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const BookDetail = () => {
    const [booking, setBooking] = useState(null);
    const { rentalId } = useParams();
    const navigate = useNavigate();

    console.log("esta es la id rental",rentalId);

    useEffect(() => {
        const getRental = async () => {
            try {
                const response =  await axios.get(`${API_URL}/api/rentals/details/${rentalId}`);
                const reservation = response.data;
                console.log('Booking details:', reservation);
                setBooking(reservation);
            } catch (error) {
                console.error('Error fetching booking:', error);
            }
        };

        getRental();
    }, [rentalId]); // Include rentalId as a dependency

    const handleDelete = async () => {
        await axios
          .delete(`${API_URL}/api/rentals/${booking._id}`)
          .then(() => navigate(`/reservations`))
          .catch((error) => console.log(error));
      };

    return (
        <div>
            {booking ? (
                <div>
                    <p>ID de reserva: {booking._id}</p>
                    <p>Nombre del cliente: {booking.user.name}</p>
                    <p>image: {booking.car.images[0]}</p>
                    <p>Fecha de inicio: {booking.startDate}</p>
                    <p>Fecha de fin: {booking.endDate}</p>
                    <button onClick={handleDelete}>Delete this Reservation</button>
                    {/* Agrega más propiedades según la estructura de tu reserva */}
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default BookDetail;
