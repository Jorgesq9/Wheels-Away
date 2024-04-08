import React, { useState } from "react";
import axios from "axios";
import CardProduct from "./CardProduct";
import {
  Card,
  Image,
  Form,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
const API_URL = import.meta.env.VITE_API_URL;

function FilterCar(props) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchAvailableCars = () => {
    axios
      .get(
        `${API_URL}/api/cars/available?startDate=${startDate}&endDate=${endDate}`
      )
      .then((response) => {
        props.setAvailableCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching available cars", error);
      });
  };

  return (
    <>
      <div className="filter-car">
        <Row>
          <Col xs="12" md="4" lg="4" xl="4" xxl="4" className="filter-input">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Col>
          <Col xs="12" md="4" lg="4" xl="4" xxl="4" className="filter-input">
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Col>
          <Col xs="12" md="4" lg="4" xl="4" xxl="4" className="filter-input">
            <button onClick={fetchAvailableCars}>Go!</button>
          </Col>
        </Row>
      </div>
      {/* <div className="available-cars">
        <h2></h2>
        {availableCars.map((car) => (
          <CardProduct key={car._id} car={car} />
        ))}
      </div> */}
    </>
  );
}

export default FilterCar;
