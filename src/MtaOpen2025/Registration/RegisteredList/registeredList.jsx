import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../AdminComponents/database.jsx'; // Ensure correct Firestore import
import './registeredList.css';

const registeredList = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch registered players data from Firestore
    const fetchPlayers = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'tournamentRegistrations'));
            const playersList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPlayers(playersList);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching registered players: ", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    if (loading) {
        return <p>Loading registered players...</p>;
    }

    return (
        <div className="registeredListContainer">
            <h2 className="listTitle">Registered Players</h2>
            <table className="playersTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>CFC ID</th>
                        <th>Rating</th>
                        <th>Interest Level</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.cfcNumber}</td>
                            <td>{player.rating || 'N/A'}</td>
                            <td>{player.interestLevel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default registeredList;
