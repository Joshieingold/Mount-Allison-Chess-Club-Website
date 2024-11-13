import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from './database.jsx';
import './gamesManagement.css';

const GamesManagement = ({ isAdmin }) => {
    const [games, setGames] = useState([]);
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [link, setLink] = useState('');
    const [editingId, setEditingId] = useState(null);

    const gamesCollectionRef = collection(db, 'games');

    // Fetch games from Firestore
    const fetchGames = async () => {
        const data = await getDocs(gamesCollectionRef);
        const gamesList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        gamesList.sort((a, b) => a.order - b.order);  // Sort by order (if 'order' exists)
        setGames(gamesList);
    };

    useEffect(() => {
        fetchGames();
    }, []);

    // Handle adding/updating a game
    const handleAddGame = async (e) => {
        e.preventDefault();

        const gameData = {
            title,
            imageUrl,
            link,
        };

        try {
            if (editingId) {
                const gameDoc = doc(db, 'games', editingId);
                await updateDoc(gameDoc, gameData);
            } else {
                await addDoc(gamesCollectionRef, gameData);
            }

            setEditingId(null);
            setTitle('');
            setImageUrl('');
            setLink('');
            fetchGames();
        } catch (error) {
            console.error('Error updating/adding game:', error);
        }
    };

    // Handle editing a game
    const handleEditGame = (game) => {
        setTitle(game.title);
        setImageUrl(game.imageUrl);
        setLink(game.link);
        setEditingId(game.id);
    };

    // Handle deleting a game
    const handleDeleteGame = async (id) => {
        const gameDoc = doc(db, 'games', id);
        await deleteDoc(gameDoc);
        fetchGames();
    };

    // Handle updating the game order manually
    const handleOrderChange = async (e, gameId) => {
        const newOrder = Number(e.target.value);

        if (isNaN(newOrder) || newOrder <= 0) return;  // Only allow positive numbers

        const updatedGames = games.map(game => 
            game.id === gameId ? { ...game, order: newOrder } : game
        );

        setGames(updatedGames);

        // Update the order in Firestore
        const gameDoc = doc(db, 'games', gameId);
        await updateDoc(gameDoc, { order: newOrder });
    };

    return (
        <div className='mainContainer'>
            <h1 className='manageTitle'>Manage Games Collections</h1>
            <div className='mainDisplayContainers'>
                {isAdmin ? (
                    <form onSubmit={handleAddGame} className='formLocation'>
                        <input
                            className='inputBox manage'
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                            required
                        />
                        <input
                            className='inputBox manage'
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            placeholder="Image URL"
                            required
                        />
                        <input
                            className='inputBox manage'
                            type="text"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="Link"
                            required
                        />
                        <button type="submit" className='inputBox manage'>
                            {editingId ? 'Update Game' : 'Add Game'}
                        </button>
                    </form>
                ) : (
                    <p>You do not have permission to manage games.</p>
                )}

                <div className="gameCardContainer">
                    {games.map((game) => (
                        <div key={game.id} className="gameCard">
                            <img src={game.imageUrl} alt={game.title} className="gameImage" />
                            <div className="gameInfo">
                                <p>{game.title}</p>
                                <p>
                                    <a href={game.link} target="_blank" rel="noopener noreferrer">
                                        View Link Location
                                    </a>
                                </p>
                            </div>
                            {isAdmin && (
                                <div className="buttonContainer">
                                    <button onClick={() => handleEditGame(game)}>Edit</button>
                                    <button onClick={() => handleDeleteGame(game.id)}>Delete</button>
                                </div>
                            )}
                            {isAdmin && (
                                <div className="orderInputContainer">
                                    <label>Order: </label>
                                    <input
                                        type="number"
                                        value={game.order || ''}
                                        onChange={(e) => handleOrderChange(e, game.id)}
                                        min="1"
                                        className="inputBox manage"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GamesManagement;
