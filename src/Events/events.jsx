import "./events.css";


const Events = () => {
    return (
        <section className="events" id="Events">
            <div className="leftSide">
                <div className="outContainer">
                    <div className="eventBanner">
                        <h3 className="bannerTitle">EVENTS AND GAMES</h3>
                        <p className="bannerDescription">We play chess and are happy if you come to an event.</p>
                    </div>
                    
                </div>
                <h2 className="eventEyeGrab">UPCOMING EVENTS</h2>
            </div>
            <div className="rightSide">
                <div className="eventContainer">
                    <h3 className="dateText first">24 June</h3>
                    <div className="eventDescriptionContainer">
                        <h3 className="eventTitle">Club Meeting</h3>
                        <p className="eventDescription">We play chess and smile while we do it</p>
                        <button className="learnMoreBtn">View Details</button>
                    </div>
                </div>
                <div className="eventContainer">
                    <h3 className="dateText second">24 June</h3>
                    <div className="eventDescriptionContainer">
                        <h3 className="eventTitle">Club Meeting</h3>
                        <p className="eventDescription">We play chess and smile while we do it</p>
                        <button className="learnMoreBtn">View Details</button>
                    </div>
                </div>
                <div className="eventContainer">
                    <h3 className="dateText third">24 June</h3>
                    <div className="eventDescriptionContainer">
                        <h3 className="eventTitle">Club Meeting</h3>
                        <p className="eventDescription">We play chess and smile while we do it</p>
                        <button className="learnMoreBtn">View Details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;