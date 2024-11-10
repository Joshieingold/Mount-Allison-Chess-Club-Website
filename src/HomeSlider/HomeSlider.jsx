import React, { useState } from 'react';
import './HomeSlider.css'; // Create a CSS file for styling

const slides = [
    {
        id: 1,
        title: "Welcome to The Mount Allison Chess Club",
        description: "Join us for one of our casual meetings, club tournaments, or CFC rated games!",
        backgroundImage: "url('https://mallmaverick.imgix.net/web/property_managers/27/properties/238/all/20240109203413/chess-2493580_1280.jpg')"
    },
    {
        id: 2,
        title: "Community Engagement",
        description: "Be part of our vibrant community.",
        backgroundImage: "url('https://example.com/slide2.jpg')"
    },
    {
        id: 3,
        title: "Fun Activities",
        description: "Explore various activities and workshops.",
        backgroundImage: "url('https://example.com/slide3.jpg')"
    },
];

const HomeSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="home-slider" style={{ backgroundImage: slides[currentSlide].backgroundImage }}>
            <div className="slider-content">
                <h1>{slides[currentSlide].title}</h1>
                <p>{slides[currentSlide].description}</p>
            </div>
            <button className="move prev" onClick={prevSlide}>❮</button>
            <button className="move next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default HomeSlider;