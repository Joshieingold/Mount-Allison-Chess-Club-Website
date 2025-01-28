
import React from 'react';
import "./info.css";

function Info() {
  return (
    <div className='InfoMain'>
      <div className='InfoTextContainer'>
        <h2 className='InfoTextHeader'>I am the Header</h2>
        <p className='InfoTextContent'>I am the Bodier?</p>
      </div>
      <div className='ImageContainer'>
        <img className= "ThisImage" src='https://macleans.ca/_next/image/?url=https%3A%2F%2Fcms.macleans.ca%2Fwp-content%2Fuploads%2F2024%2F10%2FUNI_RANKINGS_UNDERGRAD_FINAL_01-scaled.jpg&w=3840&q=80'></img>
      </div>
    </div>
  );
}

export default Info;
