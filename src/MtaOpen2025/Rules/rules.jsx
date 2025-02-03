import React from 'react';
import MapSection from "../Components/mapSection";
import "./rules.css";

function Rules() {
  return (
    <div className='rulesMain'>
      <h1 className='contentTitle'>Tournament Details</h1>

      {/* Overview Section */}
      <div className="overviewContainer">
        <div className='overviewBubble'> Time Control: 45+10 </div>
        <div className='overviewBubble'> 5 Rounds Swiss </div>
        <div className='overviewBubble'> Date: March x - March y </div>
        <div className='overviewBubble'> Entry Fee: 20$ + CFC Fee </div>
      </div>

      {/* Big Info Section */}
      <div className='bigBubbleContainer'>
        <div className='bigBubble'>
          <div className='bubbleTitle'>Official Tournament Rules:</div>
          <ul>
            <li>Rule 1: Players must arrive 15 minutes before their scheduled time.</li>
            <li>Rule 2: No outside assistance during rounds.</li>
            <li>Rule 3: All matches will be CFC-rated.</li>
            <li>Rule 4: Each player must bring their own chess set.</li>
            <li>Rule 5: Tournament organizers reserve the right to disqualify players for misconduct.</li>
          </ul>
        </div>

        {/* Round Information */}
        <div className='bigBubble'>
          <div className='bubbleTitle'>Round Schedule:</div>
          <ul>
            <li>March x - Round 1: 10:00 AM</li>
            <li>March x - Round 2: 1:00 PM</li>
            <li>March x - Round 3: 3:30 PM</li>
            <li>March y - Round 4: 10:00 AM</li>
            <li>March y - Round 5: 1:00 PM</li>
          </ul>
        </div>

        {/* Location & Map */}
        <div className='bigBubble'>
          <div className='bubbleTitle'>Location:</div>
          <p className="locationText">York St, Sackville, NB E4L 1C9</p>
          <MapSection className="map" />
        </div>
      </div>

      {/* Additional Info Section */}
      <div className='additionalInfo'>
        <div className='contactInfo'>
          <h2>Contact Information</h2>
          <p>If you have any questions about the tournament, please reach out:</p>
          <ul>
            <li>Email: chess@mountallison.ca</li>
            <li>Phone: +1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Rules;
