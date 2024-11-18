import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from "react";
import { db } from "../AdminComponents/database";
import "./gamesDatabase.css";

const GamesDatabase = () => {
    const [games, setGames] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const gamesCollection = collection(db, "games");
                const gamesSnapshot = await getDocs(gamesCollection);
                const gamesList = gamesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                gamesList.sort((a, b) => (a.order || 0) - (b.order || 0));

                setGames(gamesList);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        };

        fetchGames();
    }, []);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length);
    };

    return (
        <div className="mainContainer">
        <div className="mainContainerDatabase" id="GamesDatabase">
                    <h1 className="title database">Club Database</h1>
                    <div className="carousel">
                        <button className="carouselBtn leftBtn" onClick={prevCard}>‹</button>
                        <main id="carousel">
                            {games.map((game, index) => (
                                <div
                                key={game.id}
                                className={`tournamentCard ${index === currentIndex ? "active" : "inactive"}`}
                                style={{
                                    transform: `
                                        rotateY(calc(10deg * (${index - currentIndex}))) 
                                        translateX(calc(300px * (${index - currentIndex})))
                                        ${index === currentIndex ? "translateY(-15px)" : ""}`,
                                    zIndex: index === currentIndex ? 1 : 0,
                                }}
                            >
                                    <img src={game.imageUrl} className="cardImg" alt={game.title} />
                                    <h3 className="tournamentTitle">{game.title}</h3>
                                    <a href={game.link} target="_blank" rel="noopener noreferrer">
                                        <button className="gamesLink">View Games</button>
                                    </a>
                                </div>
                            ))}
                        </main>
                        <button className="carouselBtn rightBtn" onClick={nextCard}>›</button>
                    </div>
                </div>

        </div>
        
    );
};

export default GamesDatabase;
