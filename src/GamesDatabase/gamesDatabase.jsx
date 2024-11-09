import "./gamesDatabase.css";
const GamesDatabase = () => {
    return (        
        <div className="mainContainerDatabase">
            <h1 className="title database">Club Database</h1>
            <div className="cardSection">
                <div className="tournamentCard">
                    <h3 className="tournamentTitle">Mount Allison Open Chess Championship 2023</h3>
                    <a href="https://lichess.org/study/UshxlBum/hGj8sKb1">
                        <button className="gamesLink">View Games</button>
                    </a>
                </div>
                <div className="tournamentCard">
                    <h3 className="tournamentTitle">MACC Internal Rapid Chess Tournament 2023</h3>
                    <a href="https://lichess.org/study/SBpNjvdh">
                        <button className="gamesLink">View Games</button>
                    </a>
                </div>

                

            </div>
        </div>
    );
};

export default GamesDatabase;