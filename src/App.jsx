import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import DetailPage from "./pages/DetailPage";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupPage from "./pages/SignUp";
import { useEffect, useState } from 'react';
import React from "react";
import BookDetail from "./pages/BookDetail";
import Footer from "./components/Footer";

function App() {

  const [opacity, setOpacity] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const maxScroll = 200; // Ajusta este valor según tu preferencia para la transición
  //     const newOpacity = Math.min(scrollPosition / maxScroll, 1); // Limita la opacidad a 1
  //     setOpacity(newOpacity);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  return (
    <>
      <Container fluid className="p-0  pb-5 mb-5 " >
        <Navbar opacity={opacity}/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/details/:id" element={<DetailPage setOpacity={setOpacity} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reservations" element={<Bookings />} />
          <Route path="/reservations/:rentalId" element={<BookDetail />} />
          <Route path="/user/:id" element={<Profile />} />
        </Routes>
      </Container>

      <Footer/>
    </>
  );
}

export default App;
