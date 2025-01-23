// src/Calendar/Calendar.jsx
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../AdminComponents/database.jsx';
import './calendar.css';
// Time to Resume this project!!
const Calendar = () => {
    const [eventsData, setEventsData] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const eventListRef = useRef(null);
    const eventDetailsRef = useRef(null);

    const fetchEvents = async () => {
        try {
            const eventsCollection = collection(db, 'events');
            const eventSnapshot = await getDocs(eventsCollection);
            const events = eventSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                date: new Date(doc.data().date + "T00:00:00") // Parse date string to Date object with fixed time
            }));

            // Sort events by date
            events.sort((a, b) => a.date - b.date); // Sort in ascending order by date

            setEventsData(events);
        } catch (error) {
            console.error("Error fetching events: ", error);
        }
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleClickOutside = (event) => {
        if (
            eventListRef.current && !eventListRef.current.contains(event.target) &&
            eventDetailsRef.current && !eventDetailsRef.current.contains(event.target)
        ) {
            setSelectedEvent(null);
        }
    };

    useEffect(() => {
        fetchEvents(); // Fetch events when the component mounts
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='calendarContainer'>
            <div className='eventList' ref={eventListRef}>
                {eventsData.map(event => (
                    <div 
                        key={event.id} 
                        className={`eventCard ${selectedEvent && selectedEvent.id === event.id ? 'selected' : ''}`} 
                        onClick={() => handleEventClick(event)}
                    >
                        <h3>{event.title}</h3>
                        <p>{event.date.toDateString('en-CA')}</p> {/* Display date in YYYY-MM-DD format */}
                    </div>
                ))}
            </div>
            {selectedEvent && (
                <div className={`eventDetails ${selectedEvent ? 'show' : ''}`} ref={eventDetailsRef}>
                    <h2>{selectedEvent.title}</h2>
                    <p>{selectedEvent.description}</p>
                    <p>Time: {selectedEvent.time}</p>
                    <p>Location: {selectedEvent.location}</p>
                    <p>Date: {selectedEvent.date.toDateString('en-CA')}</p> {/* Consistent date format */}
                    {selectedEvent.eventDetails && selectedEvent.eventDetails !== "" && (
                        <Link to={`/event/${selectedEvent.id}`} className="eventLink">
                            View Event Details
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
};

export default Calendar;
