import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DetailPage from "./pages/DetailPage";
import Bookings from "./pages/Bookings";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import React from "react";
import BookDetail from "./pages/BookDetail";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

function App() {

  const [opacity, setOpacity] = useState(0);

  return (
    <>
      <Container fluid className="p-0  pb-5 mb-5 " >
        <Navbar opacity={opacity}/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/details/:id" element={<DetailPage setOpacity={setOpacity} />} />
          <Route path="/reservations" element={<Bookings />} />
          <Route path="/reservations/:rentalId" element={<BookDetail />} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </Container>

      <Footer/>
    </>
  );
}

export default App;
