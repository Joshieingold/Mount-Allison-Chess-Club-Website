
import React from 'react';

function Rules() {
  return (
    <div className='RulesMain'>
        <h2 className='ContentTitle'>Rules:</h2>
        <div className='SmallBubblesContainer'>
            <div className='SmallBubble'> Time Control: 45+10  </div>
            <div className='SmallBubble'> 5 Rounds Swiss </div>
            <div className='SmallBubble'> Date: March x - March y </div>
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
                <div className='GoogleMap'>Placeholder for google map api</div>
            </div>
        </div>
    </div>
  );
}

export default Rules;
