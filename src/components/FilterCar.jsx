import React, { useState } from "react";
import axios from "axios";
import CardProduct from "./CardProduct";

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
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={fetchAvailableCars}>Go!</button>
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
