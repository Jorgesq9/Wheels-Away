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
import React from "react";
import BookDetail from "./pages/BookDetail";

function App() {
  return (
    <>
      <Container fluid className="p-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reservations" element={<Bookings />} />
          <Route path="/reservations/:rentalId" element={<BookDetail />} />
          <Route path="/user/:id" element={<Profile />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
