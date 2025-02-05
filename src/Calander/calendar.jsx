// src/Calendar/Calendar.jsx
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../AdminComponents/database.jsx';
import './calendar.css';

const Calendar = () => {
    // Initializing Global Variables 
    const [eventsData, setEventsData] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const eventListRef = useRef(null);
    const eventDetailsRef = useRef(null);

    // Gets event data from the database and uses it as data.
    const fetchEvents = async () => {
        try {
            const eventsCollection = collection(db, 'events');
            const eventSnapshot = await getDocs(eventsCollection);
            const events = eventSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                date: new Date(doc.data().date + "T00:00:00") // Parse date string to Date object
            }));

            // Sort events by date
            events.sort((a, b) => a.date - b.date); 

            setEventsData(events);
        } catch (error) {
            console.error("Error fetching events: ", error);
        }
    };
    
    // Selects a clicked Event and displays its contents.
    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };
    
    // deselects the event and returns the page to normal.
    const handleClickOutside = (event) => {
        if (
            eventListRef.current && !eventListRef.current.contains(event.target) &&
            eventDetailsRef.current && !eventDetailsRef.current.contains(event.target)
        ) {
            setSelectedEvent(null);
        }
    };
    
    // Uses event listeners for the page.
    useEffect(() => {
        fetchEvents(); // Fetch events when the component mounts
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    // HTML //
    return (
        <div className='calendarContainer'>
            {/* Maps Data to our scroll container of all events */}
            <div className='eventList' ref={eventListRef}>
                {eventsData.map(event => (
                    <div 
                        key={event.id} 
                        className={`eventCard ${selectedEvent && selectedEvent.id === event.id ? 'selected' : ''}`} 
                        onClick={() => handleEventClick(event)}
                    >
                        <h3>{event.title}</h3>
                        <p>{event.date.toDateString('en-CA')}</p> {/* Displays the date in canadian formatting */}
                    </div>
                ))}
            </div>
            {/* When an event is selected this will appear */}
            {selectedEvent && (
                <div className={`eventDetails ${selectedEvent ? 'show' : ''}`} ref={eventDetailsRef}>
                    <h2>{selectedEvent.title}</h2>
                    <p>{selectedEvent.description}</p>
                    <p>Time: {selectedEvent.time}</p>
                    <p>Location: {selectedEvent.location}</p>
                    <p>Date: {selectedEvent.date.toDateString('en-CA')}</p> {/* Displays the date in canadian formatting */}
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
