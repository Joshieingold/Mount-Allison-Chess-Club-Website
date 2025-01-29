
import React from 'react';
import MapSection from "../Components/mapSection";
import "./rules.css";
function Rules() {
  return (
    <div className='RulesMain'>
        <h1 className='ContentTitle'>Rules:</h1>
        <div className='SmallBubbleContainer'>
            <div className='SmallBubble'> Time Control: 45+10  </div>
            <div className='SmallBubble'> 5 Rounds Swiss </div>
            <div className='SmallBubble'> Date: March x - March y </div>
            <div className='SmallBubble'> Entry Fee: 20$ + CFC Fee </div>
        </div>
        <div className='BigBubbleContainer'>
            <div className='BigBubble'>
                <div className='BubbleTitle'>Rules:</div>
                <ul>
                    <li>rule 1</li>
                    <li>rule 2</li>
                    <li>rule 3</li>
                    <li>rule 4</li>
                    <li>rule 5</li>
                </ul>
            </div>
            <div className='BigBubble'>
                <div className='BubbleTitle'> Round Plans: </div>
                <ul>
                    <li>March x Round 1 time </li>
                    <li>March x Round 2 time </li>
                    <li>March x Round 3 time </li>
                    <li>March x Round 4 time </li>
                    <li>March x Round 5 time </li>
                </ul>
            </div>
            <div className='BigBubble'>
                <div className='BubbleTitle'> Location: </div>
                <p>York St, Sackville, NB E4L 1C9</p>
                <MapSection className="map"/>
            </div>
        </div>
    </div>
  );
}

export default Rules;
