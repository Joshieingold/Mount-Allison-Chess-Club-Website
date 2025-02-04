import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../AdminComponents/database.jsx";
import "./events.css";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsCollection = collection(db, "events");
                const eventSnapshot = await getDocs(eventsCollection);
                const events = eventSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    date: new Date(doc.data().date + "T00:00:00Z") // Ensuring date is interpreted as UTC
                }));

                // Sort events by date and select the three closest upcoming events
                const upcomingEvents = events
                    .filter(event => event.date >= new Date()) // Filter only future events
                    .sort((a, b) => a.date - b.date) // Sort by closest date
                    .slice(0, 3); // Limit to three events

                setEvents(upcomingEvents);
            } catch (error) {
                console.error("Error fetching events: ", error);
            }
        };

        fetchEvents();
    }, []);

    const formatEventDate = (date) => {
        return date.toLocaleDateString("en-US", { day: "numeric", month: "short", timeZone: "UTC" });
    };

    return (
        <section className="events" id="Events">
            <div className="leftSide">
                <div className="outContainer">
                    <div className="eventBanner">
                        <h3 className="bannerTitle">EVENTS AND GAMES</h3>
                        <p className="bannerDescription">See if there are any upcoming events you can make it to!</p>
                    </div>
                </div>
                <h2 className="eventEyeGrab">UPCOMING EVENTS</h2>
            </div>
            <div className="rightSide">
                {events.map((event, index) => (
                    <div className="eventContainer" key={event.id}>
                        <h3 className={`dateText ${["firstEvent", "secondEvent", "thirdEvent"][index]}`}>
                            {formatEventDate(event.date)}
                        </h3>
                        <div className="eventDescriptionContainer">
                            <h3 className="eventTitle">{event.title}</h3>
                            <p className="eventDescription">{event.description}</p>
                            <button className="learnMoreBtn">
                                <Link 
                                    to={event.eventDetails ? `/event/${event.id}` : "/calendar"} 
                                    className="learnMoreLink"
                                >
                                    View Details
                                </Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;
