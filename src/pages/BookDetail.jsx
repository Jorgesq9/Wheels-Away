import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Image,
  Form,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const API_URL = import.meta.env.VITE_API_URL;

const BookDetail = () => {
  const [booking, setBooking] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    startDate: "",
    endDate: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const { rentalId } = useParams();
  const navigate = useNavigate();

  console.log("esta es la id rental", rentalId);

  useEffect(() => {
    const getRental = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/rentals/details/${rentalId}`
        );
        const reservation = response.data;
        console.log("Booking details:", reservation);
        setBooking(reservation);
        setEditForm({
          startDate: reservation.startDate.slice(0, 10),
          endDate: reservation.endDate.slice(0, 10),
        });
      } catch (error) {
        console.error("Error fetching booking:", error);
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
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() es 0-index, así que sumamos 1
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
      window.location.reload();
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
        <div className="p-5">
          <h3>Your Reservation details...</h3>
          <Card className="w-100 card mt-4">
            <Card.Body>
              <Container>
                <Row>
                  <Col
                    xs="12"
                    sm="12"
                    md="5"
                    lg="5"
                    xl="5"
                    xxl="5"
                    className=" "
                  >
                    <Row>
                      <Col>
                        <h4>
                          {booking.car.make} {booking.car.model}
                        </h4>
                      </Col>
                      <Row>
                        <Col className="d-flex extra-content">
                          <Card.Text className="custom-text-label-detail me-1">
                            <FaRegUser /> {booking.car.passengers}{" "}
                          </Card.Text>
                          <Card.Text className="custom-text-label-detail me-1">
                            <GiCarDoor /> {booking.car.doors}{" "}
                          </Card.Text>
                          <Card.Text className="custom-text-label-detail me-1">
                            <TbManualGearbox /> {booking.car.transmission}{" "}
                          </Card.Text>
                          <Card.Text className="custom-text-label-detail">
                            <FaCheck className="me-1 icon-check" /> Unlimited km{" "}
                          </Card.Text>
                        </Col>
                      </Row>
                    </Row>
                    <Row>
                      <Image className="w-100" src={booking.car.images[0]} />
                    </Row>
                  </Col>
                  <Col
                    xs="12"
                    sm="12"
                    md="7"
                    lg="7"
                    xl="7"
                    xxl="7"
                    className=""
                  >
                    <p className="pt-5 mt-2 title-text">
                      Reservation ID:<span>{booking._id}</span>{" "}
                    </p>
                    <div className="user-content">
                      <h6 className="title-text mb-1">Driver</h6>
                      <Row>
                        <Col>
                          <p className="mb-0 subtitle-text">Name: </p>
                          <p className="mb-0 normal-text">
                            {booking.user.name}
                          </p>
                        </Col>
                        <Col>
                          <p className="mb-0 subtitle-text">email: </p>
                          <p className="mb-0 normal-text">
                            {booking.user.email}
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div className="book-content mt-2">
                      <h6 className="title-text mb-1">Booking details</h6>
                      {!isEditing && (
                        <>
                          <Row>
                            <Col>
                              <p className="mb-0 subtitle-text">Start Date: </p>
                              <p className="mb-0 normal-text">
                                {formatDate(booking.startDate)}
                              </p>
                            </Col>
                            <Col>
                              <p className="mb-0 subtitle-text">
                                Return Date:{" "}
                              </p>
                              <p className="mb-0 normal-text">
                                {formatDate(booking.endDate)}
                              </p>
                            </Col>
                            <Col>
                              <p className="mb-0 subtitle-text">
                                Total price:{" "}
                              </p>
                              <p className="mb-0 price-text">
                                {booking.totalPrice} €
                              </p>
                            </Col>
                          </Row>
                        </>
                      )}
                      {isEditing && (
                        <>
                          <form onSubmit={handleEdit}>
                            <Row className="d-flex justify-content-center">
                              <Col>
                                <p className="mb-0 subtitle-text">
                                  Start Date:{" "}
                                </p>
                                <input
                                  type="date"
                                  name="startDate"
                                  value={editForm.startDate}
                                  onChange={handleChange}
                                />
                              </Col>
                              <Col>
                                <p className="mb-0 subtitle-text">
                                  Return Date:{" "}
                                </p>
                                <input
                                  type="date"
                                  name="endDate"
                                  value={editForm.endDate}
                                  onChange={handleChange}
                                />
                              </Col>
                            </Row>
                            <div  className="d-flex justify-content-start w-100 mt-3">
                             
                                <button type="submit" className="btn-edit-reserve">Save Changes</button>
                            
                            </div>
                          </form>
                        </>
                      )}
                    </div>
                    <div className="btn-content">
                      <button onClick={toggleEditForm} className="btn-detail">
                        <MdOutlineModeEdit />
                        <span className="ms-1">Edit</span>
                      </button>
                      <button
                        onClick={handleDelete}
                        className="btn-detail ms-3"
                      >
                        <MdOutlineDeleteOutline />
                        <span className="ms-1">Delete</span>
                      </button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetail;
