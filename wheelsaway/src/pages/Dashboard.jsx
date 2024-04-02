import React from 'react';
// import './HomePage.css'; 
const HomePage = () => {
    return (
        <div className="homePage">
            <nav className="navbar">
                <div className="logo">Wheels Away</div>
                <div className="nav-links">
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>

            <header className="hero-section">
                <h1>Welcome to Wheels Away</h1>
                <p>Your reliable partner for car rental services.</p>
            </header>

            <section className="search-section">
                <h2>Find Your Perfect Car</h2>
                <form className="search-form">
                    <input type="text" placeholder="Pick-up Location" />
                    <input type="date" placeholder="Pick-up Date" />
                    <input type="date" placeholder="Drop-off Date" />
                    <button type="submit">Search</button>
                </form>
            </section>

            <section className="featured-cars">
                <h2>Featured Cars</h2>
                <div className="cars-list">
                    {/* Render car components here */}
                </div>
            </section>

            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonials-list">
                    {/*  components  */}
                </div>
            </section>

            <footer className="footer">
                <p>2024 Wheels Away</p>
            </footer>
        </div>
    );
};

export default HomePage;
