import React, { useState } from 'react';
import axios from 'axios';
import CardProduct from './CardProduct' 

const API_URL = import.meta.env.VITE_API_URL;

function FilterCar() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [availableCars, setAvailableCars] = useState([]);

    const fetchAvailableCars = () => {
       
        axios.get(`${API_URL}/api/cars/available?startDate=${startDate}&endDate=${endDate}`)
            .then(response => {
                setAvailableCars(response.data);
            })
            .catch(error => {
                console.error("Error fetching available cars", error);
               
            });
    };

    return (

      
        <div>
            <input 
                type="date" 
                value={startDate} 
                onChange={e => setStartDate(e.target.value)} 
            />
            <input 
                type="date" 
                value={endDate} 
                onChange={e => setEndDate(e.target.value)} 
            />
            <button onClick={fetchAvailableCars}>Buscar coches disponibles</button>
            <div className="available-cars">
              <h2></h2>
        {
          availableCars.map(car => (
            <CardProduct key={car._id} car={car} />
          ))
        }
      </div>
    </div>
  );
}



export default FilterCar;
