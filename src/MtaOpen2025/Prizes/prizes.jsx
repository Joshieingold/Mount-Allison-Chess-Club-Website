import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../AdminComponents/database'; // Import your Firestore database
import First from "../../assets/first.png";
import Second from "../../assets/second.png";
import Third from "../../assets/third.png";
import "./prizes.css";

function Prize() {
  const [totalPrizePool, setTotalPrizePool] = useState(0);
  const [numPlayers, setNumPlayers] = useState(0);
  const [prizes, setPrizes] = useState({ first: 0, second: 0, third: 0 });
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch the number of registered players with paymentReceived as 'yes'
  const fetchRegisteredPlayers = async () => {
    try {
      const playersQuery = query(
        collection(db, 'tournamentRegistrations'),
        where('paymentReceived', '==', true) // Only fetch players who have paid
      );
      const querySnapshot = await getDocs(playersQuery);

      console.log("Fetched players: ", querySnapshot.docs.map(doc => doc.data())); // Debug log

      const playersList = querySnapshot.docs.map(doc => doc.data());
      setNumPlayers(playersList.length);

      // Calculate the total prize pool based on the number of players
      const totalFees = playersList.reduce((sum, player) => sum + player.tournamentFee, 0);
      setTotalPrizePool(totalFees);

      // Calculate prizes based on the total prize pool
      const firstPrize = (totalFees * 0.4).toFixed(2);
      const secondPrize = (totalFees * 0.3).toFixed(2);
      const thirdPrize = (totalFees * 0.2).toFixed(2);

      setPrizes({
        first: firstPrize,
        second: secondPrize,
        third: thirdPrize
      });

      setLoading(false); // Set loading to false once the data is fetched
    } catch (error) {
      console.error("Error fetching registered players: ", error);
      setLoading(false); // In case of an error, stop loading
    }
  };

  useEffect(() => {
    fetchRegisteredPlayers();
  }, []);

  if (loading) {
    return <p>Loading prizes...</p>; // Show a loading message while fetching data
  }

  return (
    <div className='prizeMain'>
      <div className='prizeTitle'>Prizes</div>
      <div className='prizeShowcaseContainer'>
        <div className='prizeCard second'>
          <h2 className='prizeText second'>2nd</h2>
          <img className='prizePicture second' src={Second} alt="2nd Prize" />
          <h3 className='prizeMoney second'>${prizes.second || ' '}</h3>
        </div>
        <div className='prizeCard first'>
          <h2 className='prizeText first'>1st</h2>
          <img className='prizePicture first' src={First} alt="1st Prize" />
          <h3 className='prizeMoney first'>${prizes.first || ' '}</h3>
        </div>
        <div className='prizeCard third'>
          <h2 className='prizeText third'>3rd</h2>
          <img className='prizePicture third' src={Third} alt="3rd Prize" />
          <h3 className='prizeMoney third'>${prizes.third || ' '}</h3>
        </div>
      </div>
      <p className='smallText'>
        Prizes are estimated based on current registered players. 1st place will receive 40% of tournament fees, 2nd place will receive 30%, and 3rd place will receive 20%. The remaining 10% will go to the Mount Allison Chess club to support future events.
      </p>
    </div>
  );
}

export default Prize;
