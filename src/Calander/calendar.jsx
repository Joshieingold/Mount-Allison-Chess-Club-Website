// src/Calendar/Calendar.jsx
import React, { useEffect, useRef, useState } from 'react';
import './calendar.css';

const generateClubMeetings = () => {
    const meetings = [];
    const startDate = new Date(); // Current date
    const endDate = new Date(2025, 4, 1); // May 1, 2024 (end of April)

    // Set the start date to the next Thursday
    startDate.setDate(startDate.getDate() + ((4 - startDate.getDay() + 7) % 7));

    while (startDate < endDate) {
        meetings.push({
            id: meetings.length + 1,
            date: new Date(startDate), // Create a new date object
            title: 'Club Meeting',
            description: 'Weekly meeting from 6 PM to 7 PM.',
        });
        startDate.setDate(startDate.getDate() + 7); // Move to the next Thursday
    }

    return meetings;
};

const eventsData = [
    {
        id: -1,
        date: new Date(2025, 2, 24), // October 25, 2023
        title: 'Mount Allison Open 2025',
        description: 'Our Annual CFC Tournament, more details to be announced!',
    },
    ...generateClubMeetings(),
];


const Calendar = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const eventListRef = useRef(null);
    const eventDetailsRef = useRef(null);

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
                        <p>{event.date.toDateString()}</p>
                    </div>
                ))}
            </div>
            {selectedEvent && (
                <div className={`eventDetails ${selectedEvent ? 'show' : ''}`} ref={eventDetailsRef}>
                    <h2>{selectedEvent.title}</h2>
                    <p>{selectedEvent.description}</p>
                    <p>Date: {selectedEvent.date.toDateString()}</p>
                </div>
            )}
        </div>
    );
};

export default Calendar;