import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import DetailPage from './pages/DetailPage';
import Bookings from './pages/Bookings';
import Profile from './pages/Profile';
import { Link } from "react-router-dom";
function App() {

  return (
    <>
       <Link to ="/">
             Home
      </Link>
      <Link to ="/login">
             Login
      </Link>
      <Link to ="/detail/1">
             Detail
      </Link>
      <Link to ="/reservations/1">
             Booking
      </Link>
      <Link to ="/user/1">
             Profile
      </Link>
      <Routes>
        <Route path="/" element={ <Dashboard/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/detail/:id" element={ <DetailPage/>} />
        <Route path="/reservations/:id" element={ <Bookings/>} />
        <Route path="/user/:id" element={ <Profile/>} />
      </Routes>
    </>
  )
}

export default App
