import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import DetailPage from './pages/DetailPage';
import Bookings from './pages/Bookings';
import Profile from './pages/Profile';
import Navbar from './components/Navbar'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage from './pages/SignUp';
import { useContext } from "react";
import { AuthContext } from "./context/auth.context";
import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  // const { user , isLoggedIn} = useContext(AuthContext);
  // const [userProfile, setUserProfile] = useState(null);

  // console.log("me trae en app js",user)
  // console.log("me trae en app js",isLoggedIn)


  //   useEffect(() => {
  //     const getStudent = () => {
  //       const storedToken = localStorage.getItem("authToken");
  //       console.log(storedToken);
  //       console.log(user)
  //       if (storedToken) {
  //         axios
  //         .get(
  //           `${API_URL}/api/users/${user._id}`,
  //           { headers: { authorization: `Bearer ${storedToken}` }}
  //           )
  //           .then((response) => {
  //             setUserProfile(response.data);
  //             console.log(response.data)
  //             setLoading(false);
  //           })
  //           .catch((error) => {
  //             const errorDescription = error.response.data.message;
  //             setErrorMessage(errorDescription);
  //           });
  //         }
  //         else {
  //           setErrorMessage("User not logged in");
  //         }
  //     };
  //     console.log(getStudent())
  //     getStudent();
  //   }, [user]);
  
  return (
    <>
       <Container fluid>
       <Navbar />
       <Routes>
              <Route path="/" element={ <Dashboard/>} />
              <Route path="/login" element={ <Login/>} />
              <Route path="/signup" element={ <SignupPage/>} />
              <Route path="/details/:id" element={ <DetailPage/>} />
              <Route path="/reservations" element={ <Bookings/>} />
              <Route path="/user/:id" element={ <Profile/>} />
       </Routes>
       
      </Container>
    </>
  )
}

export default App
