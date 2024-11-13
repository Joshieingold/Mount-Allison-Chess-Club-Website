// Import Firebase and Firestore
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../Components/database.jsx'; // Adjust the import based on your Firebase config file path
import "./HomeSlider.css";

// Your component
const HomeSlider = () => {
    const [slides, setSlides] = useState([]); // Replace static slides with state
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to fetch slides from Firebase
    const fetchSlides = async () => {
        const slidesCollectionRef = collection(db, 'slides');
        const slidesSnapshot = await getDocs(slidesCollectionRef);
        const slidesData = slidesSnapshot.docs.map((doc) => doc.data());
        setSlides(slidesData);
    };

    useEffect(() => {
        fetchSlides();
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        slides.length > 0 ? (
            <div className="home-slider" style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage})` }}>
                <div className="slider-content">
                    <h1>{slides[currentSlide].title}</h1>
                    <p>{slides[currentSlide].description}</p>
                </div>
                <button className="move prev" onClick={prevSlide}>❮</button>
                <button className="move next" onClick={nextSlide}>❯</button>
            </div>
        ) : (
            <p>Loading slides...</p> // Display while slides are loading
        )
    );
};

export default HomeSlider;
