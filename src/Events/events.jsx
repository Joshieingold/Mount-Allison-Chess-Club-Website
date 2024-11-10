import "./events.css";


const Events = () => {
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
                <div className="eventContainer">
                    <h3 className="dateText first">14 Nov</h3>
                    <div className="eventDescriptionContainer">
                        <h3 className="eventTitle">Club Meeting</h3>
                        <p className="eventDescription">Join us in the Chapel Basement from 6pm to 7pm!</p>
                        <button className="learnMoreBtn">View Details</button>
                    </div>
                </div>
                <div className="eventContainer">
                    <h3 className="dateText second">21 Nov</h3>
                    <div className="eventDescriptionContainer">
                        <h3 className="eventTitle">Club Meeting</h3>
                        <p className="eventDescription">Join us in the Chapel Basement from 6pm to 7pm!</p>
                        <button className="learnMoreBtn">View Details</button>
                    </div>
                </div>
                <div className="eventContainer">
                    <h3 className="dateText third">24 March</h3>
                    <div className="eventDescriptionContainer">
                        <h3 className="eventTitle">Mount Allison Open 2025</h3>
                        <p className="eventDescription">Our annual CFC rated tournament!</p>
                        <button className="learnMoreBtn">View Details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;