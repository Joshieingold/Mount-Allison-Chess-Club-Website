// src/components/SliderManagement.jsx
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from './database';
import "./SliderManagement.css";

const SliderManagement = ({ isAdmin }) => {
    const [slides, setSlides] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [backgroundImage, setBackgroundImage] = useState('');
    const [editingId, setEditingId] = useState(null);

    const slidesCollectionRef = collection(db, 'slides');

    const fetchSlides = async () => {
        const data = await getDocs(slidesCollectionRef);
        setSlides(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        fetchSlides();
    }, []);

    const handleAddSlide = async (e) => {
        e.preventDefault();

        const slideData = {
            title,
            description,
            backgroundImage,
        };

        if (editingId) {
            const slideDoc = doc(db, 'slides', editingId);
            await updateDoc(slideDoc, slideData);
            setEditingId(null);
        } else {
            await addDoc(slidesCollectionRef, slideData);
        }

        setTitle('');
        setDescription('');
        setBackgroundImage('');
        fetchSlides();
    };

    const handleEditSlide = (slide) => {
        setTitle(slide.title);
        setDescription(slide.description);
        setBackgroundImage(slide.backgroundImage);
        setEditingId(slide.id);
    };

    const handleDeleteSlide = async (id) => {
        const slideDoc = doc(db, 'slides', id);
        await deleteDoc(slideDoc);
        fetchSlides();
    };

    return (
        <div className='slider-main-container'>
            <h1 className='slider-manage-title'>Manage Slides</h1>
            <div className='slider-main-display'>
                {isAdmin ? (
                    <form onSubmit={handleAddSlide} className='slider-form'>
                        <input
                            className='slider-input slider-manage-input'
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Slide Title"
                            required
                        />
                        <textarea
                            className='slider-input slider-manage-textarea'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Slide Description"
                            required
                        />
                        <input
                            className='slider-input slider-manage-input'
                            type="text"
                            value={backgroundImage}
                            onChange={(e) => setBackgroundImage(e.target.value)}
                            placeholder="Background Image URL"
                            required
                        />
                        <button type="submit" className='slider-input slider-manage-button'>{editingId ? 'Update Slide' : 'Add Slide'}</button>
                    </form>
                ) : (
                    <p>You do not have permission to manage slides.</p>
                )}
                <ul className='slider-card-container'>
                    {slides.map((slide) => (
                        <li key={slide.id} className='slider-card'>
                            <img src={slide.backgroundImage} alt={slide.title} className="slider-image" />
                            <div className="slider-info">
                                <h3>{slide.title}</h3>
                                <p>{slide.description}</p>
                            </div>
                            {isAdmin && (
                                <div className="slider-button-container">
                                    <button onClick={() => handleEditSlide(slide)}>Edit</button>
                                    <button onClick={() => handleDeleteSlide(slide.id)}>Delete</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SliderManagement;
