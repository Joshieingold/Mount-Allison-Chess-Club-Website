// src/AdminComponents/eventManagement.jsx
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from './database.jsx'; // Adjust the path as necessary
import './eventManagement.css'; // Create this CSS file for your styles

const EventManagement = () => {
    const [events, setEvents] = useState([]);
    const [eventData, setEventData] = useState({ 
        title: '', 
        description: '', 
        time: '', 
        date: '', 
        eventDetails: '', 
        location: '' // Add location field
    });
    const [editingEventId, setEditingEventId] = useState(null);

    const fetchEvents = async () => {
        const eventsCollection = collection(db, 'events');
        const eventSnapshot = await getDocs(eventsCollection);
        const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
        // Sort events by date
        const sortedEvents = eventList.sort((a, b) => {
            const dateA = new Date(a.date || 0); // Use 0 if date is blank
            const dateB = new Date(b.date || 0); // Use 0 if date is blank
            return dateA - dateB; // Ascending order
        });
    
        setEvents(sortedEvents);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingEventId) {
            // Update existing event
            const eventRef = doc(db, 'events', editingEventId);
            await updateDoc(eventRef, eventData);
        } else {
            // Add new event
            await addDoc(collection(db, 'events'), eventData);
        }
        setEventData({ title: '', description: '', time: '', date: '', eventDetails: '', location: '' }); // Reset location
        setEditingEventId(null);
        fetchEvents();
    };

    const handleEdit = (event) => {
        setEventData(event);
        setEditingEventId(event.id);
    };

    const handleDelete = async (id) => {
        const eventRef = doc(db, 'events', id);
        await deleteDoc(eventRef);
        fetchEvents();
    };

    const addGeneralClubMeeting = async () => {
        // Set the event data for the new meeting with a blank date
        const newEventData = {
            title: "General Club Meeting",
            description: "Come to play games, puzzles, or study chess with the club.",
            time: "6:00 PM - 7:00 PM",
            date: '', // Blank date
            eventDetails: '', // No event page link
            location: "Chapel Basement"
        };
    
        // Add the new event to Firestore
        await addDoc(collection(db, 'events'), newEventData);
        fetchEvents(); // Refresh the event list
    };
    

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div className="wrapper">
            <h1 className="eventsManageTitle">Event Management</h1>
            <div className='eventsMainContainer'>
                <div className="eventsFormContainer">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="eventsInputBox"
                            type="text"
                            name="title"
                            placeholder="Event Title"
                            value={eventData.title}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            className="eventsInputBox"
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={eventData.description}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                className="eventsInputBox"
                                type="text"
                                name="time"
                                placeholder="Time"
                                value={eventData.time}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                className="eventsInputBox"
                                type="date"
                                name="date"
                                value={eventData.date}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                className="eventsInputBox"
                                type="text"
                                name="eventDetails"
                                placeholder="Event Page Link"
                                value={eventData.eventDetails}
                                onChange={handleInputChange}
                            />
                            <input
                                className="eventsInputBox"
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={eventData.location}
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="gameButtonContainer">Save Event</button>
                        </form>
                        <button onClick={addGeneralClubMeeting} className="extraBtn">Add General Club Meeting</button>
                    </div>
                    <div className="eventsDisplayContainer">
                        <div className="eventsListContainer">
                            {events.map(event => (
                                <div key={event.id} className="eventsCard">
                                    <div className="eventsInfo">
                                        <h3>{event.title}</h3>
                                        <p>Description: {event.description}</p>
                                        <p>Event Time: {event.time}</p>
                                        <p>Date of Event: {event.date ? event.date : 'No date assigned'}</p>
                                        <p>Link: {event.eventDetails}</p>
                                        <p>Location: {event.location}</p> {/* Display the location */}
                                    </div>
                                    <div className="eventsButtonContainer">
                                        <button onClick={() => handleEdit(event)} className='commandBtn'>Edit</button>
                                        <button onClick={() => handleDelete(event.id)} className='commandBtn'>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    export default EventManagement;