import React, { useState } from 'react';
import './HomeSlider.css'; // Create a CSS file for styling

const slides = [
    {
        id: 1,
        title: "Welcome to Our Events",
        description: "Join us for exciting events throughout the year!",
        backgroundImage: "url('https://mta.ca/sites/default/files/2022-06/Banner-Campus.jpg')"
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
        <div className="home-slider" style={{ backgroundImage: slides[currentSlide].backgroundImage }} id="Home">
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