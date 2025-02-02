import React from 'react';
import './info.css';

function Info() {
  return (
    <section className="infoSection">
      <div className="infoContent">
        <div className="infoTextContainer">
          <div className="infoHeader">
            Welcome to the Mount Allison Open Chess Championship 2025!
          </div>
          <div className="infoParagraphs">
            <p className="infoText">
              We are proud to present the Mount Allison Open Chess Championship 2025, an official CFC-rated tournament! 
              Whether you're an experienced player or just starting out, this tournament offers the perfect opportunity to 
              test your skills and earn valuable rating points.
            </p>
            <p className="infoText">
              Hosted at Mount Allison University, the event promises exciting matches and a chance to connect with chess players 
              from across the Maritimes. Don't miss your chance to compete in this prestigious tournament!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
