
import React from 'react';
import "./info.css";

function Info() {
  return (
    <div className='InfoMain'>
      <div className='InfoTextContainer'>
        <div className='InfoTextHeader'>Welcome to the Mount Allison Open Chess Championship 2025!</div>
        <div className='InfoTextParagraphContainer'>
          <p className='InfoTextContent'>We are proud to present the Mount Allison Open Chess Championship 2025, an official CFC-rated tournament! Whether you're an experienced player or just starting out, this tournament offers the perfect opportunity to test your skills and earn valuable rating points.</p>
          <p className='InfoTextContent'>Hosted at Mount Allison University, the event promises exciting matches and a chance to connect with chess players from across the Maritimes. Don't miss your chance to compete in this prestigious tournament!</p>
      
        </div>


      </div>
      <div className='ImageContainer'>
        <img className= "ThisImage" src='https://macleans.ca/_next/image/?url=https%3A%2F%2Fcms.macleans.ca%2Fwp-content%2Fuploads%2F2024%2F10%2FUNI_RANKINGS_UNDERGRAD_FINAL_01-scaled.jpg&w=3840&q=80'></img>
      </div>
    </div>
  );
}

export default Info;
