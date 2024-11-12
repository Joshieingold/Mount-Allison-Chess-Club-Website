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
    const [role, setRole] = useState('None');
    const [joinedDate, setJoinedDate] = useState('');
    const [editingId, setEditingId] = useState(null);

    const playersCollectionRef = collection(db, 'players');

    const fetchPlayers = async () => {
        const data = await getDocs(playersCollectionRef);
        const playersList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        // Sort players alphabetically by name
        playersList.sort((a, b) => a.name.localeCompare(b.name));
        setPlayers(playersList);
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    const handleAddPlayer = async (e) => {
        e.preventDefault();

        const defaultPictureUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pXis6BHUK50zntwuZHMqLKWFw6FkEgn4eg&s";
        const defaultCfcRating = "N/A";
        
        const playerData = {
            name,
            rating,
            cfcRating: cfcRating || defaultCfcRating,
            pictureUrl: pictureUrl || defaultPictureUrl,
            role,
            joinedDate: joinedDate || new Date().toISOString(),
            rank: determineRank({ role, joinedDate: joinedDate || new Date().toISOString() })
        };
        
        try {
            if (editingId) {
                const playerDoc = doc(db, 'players', editingId);
                await updateDoc(playerDoc, playerData);
            } else {
                await addDoc(playersCollectionRef, playerData);
            }

            // Reset state after adding or updating
            setEditingId(null);
            setName('');
            setRating('');
            setCfcRating('');
            setPictureUrl('');
            setRole('None');
            setJoinedDate('');
            fetchPlayers();
        } catch (error) {
            console.error("Error updating/adding player:", error);
        }
    };

    const determineRank = (player) => {
        const joinDate = new Date(player.joinedDate);
        const currentDate = new Date();
        const yearsMember = currentDate.getFullYear() - joinDate.getFullYear();
        
        if (player.role === 'President') return 'King';
        if (['Vice-President', 'Exec', 'Former President', 'Former VP', 'Former Exec'].includes(player.role)) return 'Queen';

        if (yearsMember >= 3) return 'Rook';
        if (yearsMember >= 2) return 'Bishop';
        if (yearsMember >= 1) return 'Knight';
        return 'Pawn';
    };

    const handleEditPlayer = (player) => {
        setName(player.name);
        setRating(player.rating);
        setCfcRating(player.cfcRating);
        setPictureUrl(player.pictureUrl);
        setRole(player.role);
        setJoinedDate(player.joinedDate);
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
                        <select
                            className='inputBox manage'
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="None">None</option>
                            <option value="President">President</option>
                            <option value="Vice-President">Vice-President</option>
                            <option value="Exec">Exec</option>
                            <option value="Former President">Former President</option>
                            <option value="Former VP">Former VP</option>
                            <option value="Former Exec">Former Exec</option>
                        </select>
                        <input
                            className='inputBox manage'
                            type="date"
                            value={joinedDate ? joinedDate.split('T')[0] : ''}
                            onChange={(e) => setJoinedDate(e.target.value)}
                            placeholder="Joined Date"
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
                                <p>Name: {player.name}</p>
                                <p>Club Rating: {player.rating}</p>
                                <p>CFC Rating: {player.cfcRating}</p>
                                <p>Rank: {player.rank}</p>
                                <p>Joined Date: {new Date(player.joinedDate).toLocaleDateString()}</p>
                                {player.role !== "None" && <p>Role: {player.role}</p>}
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
