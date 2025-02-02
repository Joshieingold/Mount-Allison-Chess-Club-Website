import React from 'react';
import First from "../../assets/first.png";
import Second from "../../assets/second.png";
import Third from "../../assets/third.png";
import "./prizes.css";

function Prize() {
  return (
    <div className='prizeMain'>
      <div className='prizeTitle'>Prizes</div>
      <div className='prizeShowcaseContainer'>
        <div className='prizeCard second'>
          <h2 className='prizeText second'>2nd</h2>
          <img className='prizePicture second' src={Second} alt="2nd Prize" />
          <h3 className='prizeMoney second'>x $</h3>
        </div>
        <div className='prizeCard first'>
          <h2 className='prizeText first'>1st</h2>
          <img className='prizePicture first' src={First} alt="1st Prize" />
          <h3 className='prizeMoney first'>x $</h3>
        </div>
        <div className='prizeCard third'>
          <h2 className='prizeText third'>3rd</h2>
          <img className='prizePicture third' src={Third} alt="3rd Prize" />
          <h3 className='prizeMoney third'>x $</h3>
        </div>
      </div>
      <p className='smallText'>
        Prizes are estimated based on current registered players. 1st place will receive 40% of tournament fees, 2nd place will receive 30%, and 3rd place will receive 20%. The remaining 10% will go to the Mount Allison Chess club to support future events.
      </p>
    </div>
  );
}

export default Prize;
