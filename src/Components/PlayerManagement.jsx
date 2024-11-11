// src/components/PlayerManagement.jsx
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from './database.jsx';
import "./playerManagement.css";

const PlayerManagement = ({ isAdmin }) => {
    const [players, setPlayers] = useState([]);
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [cfcRating, setCfcRating] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [editingId, setEditingId] = useState(null);

    const playersCollectionRef = collection(db, 'players');

    const fetchPlayers = async () => {
        const data = await getDocs(playersCollectionRef);
        setPlayers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    const handleAddPlayer = async (e) => {
        e.preventDefault();
        if (editingId) {
            const playerDoc = doc(db, 'players', editingId);
            await updateDoc(playerDoc, { name, rating, cfcRating, pictureUrl });
            setEditingId(null);
        } else {
            await addDoc(playersCollectionRef, { name, rating, cfcRating, pictureUrl });
        }
        setName('');
        setRating('');
        setCfcRating('');
        setPictureUrl('');
        fetchPlayers();
    };

    const handleEditPlayer = (player) => {
        setName(player.name);
        setRating(player.rating);
        setCfcRating(player.cfcRating);
        setPictureUrl(player.pictureUrl);
        setEditingId(player.id);
    };

    const handleDeletePlayer = async (id) => {
        const playerDoc = doc(db, 'players', id);
        await deleteDoc(playerDoc);
        fetchPlayers();
    };

    return (
        <div className='mainContainer'>
            <h1 className='manageTitle'>Manage Players</h1>
            <div className='mainDisplayContainers'>
                {isAdmin ? (
                    <form onSubmit={handleAddPlayer} className='formLocation'>
                        <input
                            className='inputBox manage'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            required
                        />
                        <input
                            className='inputBox manage'
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            placeholder="Rating"
                            required
                        />
                        <input
                            className='inputBox manage'
                            type="text"
                            value={cfcRating}
                            onChange={(e) => setCfcRating(e.target.value)}
                            placeholder="CFC Rating"
                            required
                        />
                        <input
                            className='inputBox manage'
                            type="text"
                            value={pictureUrl}
                            onChange={(e) => setPictureUrl(e.target.value)}
                            placeholder="Picture URL"
                        />
                        <button type="submit" className='inputBox manage'>{editingId ? 'Update Player' : 'Add Player'}</button>
                    </form>
                ) : (
                    <p>You do not have permission to manage players.</p>
                )}
                <ul className='playerCardContainer'>
                    {players.map((player) => (
                        <li key={player.id} className='playerCard'>
                            <img src={player.pictureUrl} alt={player.name} className="playerImage" />
                            <div className="playerInfo">
                                <p>{player.name} - Club Rating: {player.rating} - CFC Rating: {player.cfcRating}</p>
                            </div>
                            {isAdmin && (
                                <div className="buttonContainer">
                                    <button onClick={() => handleEditPlayer(player)}>Edit</button>
                                    <button onClick={() => handleDeletePlayer(player.id)}>Delete</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PlayerManagement;