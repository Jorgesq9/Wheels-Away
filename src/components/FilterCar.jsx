import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {
  Row,
  Col,
} from "react-bootstrap";
const API_URL = import.meta.env.VITE_API_URL;

function FilterCar(props) {

  const { t, i18n } = useTranslation();

  const formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  };

  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date()));

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
            <button onClick={fetchAvailableCars}>{t("main.go")}</button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FilterCar;
