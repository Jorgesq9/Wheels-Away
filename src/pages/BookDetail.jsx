import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const BookDetail = () => {
    const [booking, setBooking] = useState(null);
    const [editForm, setEditForm] = useState({ name: '' , startDate: '', endDate: '' });
    const [isEditing, setIsEditing] = useState(false);
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
                setEditForm({
                    startDate: reservation.startDate.slice(0,10),
                    endDate: reservation.endDate.slice(0,10),
                })
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

      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() es 0-index, así que sumamos 1
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      };
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };
    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${API_URL}/api/rentals/${booking._id}`, editForm);
            setIsEditing(false);
            window.location.reload()
            
        } catch (err) {
            console.log("Error editing the reservation", err);
        }
    };
      
        const toggleEditForm = () => {
            setIsEditing(!isEditing);
        };

    
        return (
            <div>
                {booking ? (
                    <div>
                        <p>Reservation ID: {booking._id}</p>
                        <p>Name: {booking.user.name}</p>
                        <img src={booking.car.images[0]} alt="Car" style={{ width: '300px', height: 'auto' }} />
                        <p>Start Date: {formatDate(booking.startDate)}</p>
                        <p>Return Date: {formatDate(booking.endDate)}</p>
                        <button onClick={handleDelete}>Delete this Reservation</button>
                        <button onClick={toggleEditForm}>Edit this Reservation</button>
                        {isEditing && (
                            <form onSubmit={handleEdit}>
                                <label>
                                    Start Date:
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={editForm.startDate}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label>
                                    End Date:
                                    <input
                                        type="date"
                                        name="endDate"
                                        value={editForm.endDate}
                                        onChange={handleChange}
                                    />
                                </label>
                                <button type="submit">Save Changes</button>
                            </form>
                        )}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    };
    
    export default BookDetail;