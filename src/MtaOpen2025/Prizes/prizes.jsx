
import React from 'react';
import First from "../../assets/first.png";
import Second from "../../assets/second.png";
import Third from "../../assets/third.png";
import "./prizes.css";

function Prize() {
  return (
    <div className='PrizeMain'>
        <div className='PrizeTitle'>Prizes</div>
        <div className='PrizeShowcaseContainer'>
            <div className='PrizeCard second'> 
                <h2 className='prizeText second'>2nd</h2>
                <img className='prizePicture second' src={Second}></img>
                <h3 className='prizeMoney second'>x $</h3>
            </div>
            <div className='PrizeCard first'> 
                <h2 className='prizeText first'>1st</h2>
                <img className='prizePicture first' src={First}></img>
                <h3 className='prizeMoney first'>x $</h3>
            </div>
            <div className='PrizeCard third'> 
                <h2 className='prizeText third'>3rd</h2>
                <img className='prizePicture third' src={Third}></img>
                <h3 className='prizeMoney third'>x $</h3>
            </div>
        </div>
        <p className='SmallText'>Prizes are estimated based on current registed players. 1st place will recieve 40% of tournament fees, 2nd place will recieve 30%, 3rd place will recieve 20%. The remaining 10% will go to the Mount Allison Chess club to support future events.</p>
    </div>
  );
}

export default Prize;
