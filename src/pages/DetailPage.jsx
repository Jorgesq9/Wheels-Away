
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const DetailPage = () => {

  const { id } = useParams();
  const [carDetails , setCarDetails] = useState(null)

useEffect(() => {
  axios.get(`${API_URL}/api/cars/${id}`)
  .then(response => {
    setCarDetails(response.data)
  })
  .catch(err => console.log(err))
}, [id])
  return (
    <div>
    {carDetails && (
      <>
        {Object.keys(carDetails).map((key) => {
          if(key !== '_id' && key !=='__v'&& key !== '_id' && key !== '__v' && key !== 'createdAt' && key !== 'updatedAt') {
          if (key === "make") {
            return <h2 key={key}>{carDetails[key]}</h2>;
          }
          if (key === "model") {
            return <h3 key={key}>{carDetails[key]}</h3>;
          }
          if (key === "images"){
            return (
              <div key={key}>
                {carDetails[key].map((imageUrl, index) => (
                  <img key={index} src={imageUrl} alt={`car image ${index}`} />
                ))}
              </div>
            );
          }
          if (Array.isArray(carDetails[key])) {
            return (
              <div key={key}>
                <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                <ul>
                  {carDetails[key].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          }
          return <p key={key}>{`${key}: ${carDetails[key]}`}</p>;
        }
        })}
      </>
    )}
  </div>
);
}

export default DetailPage
