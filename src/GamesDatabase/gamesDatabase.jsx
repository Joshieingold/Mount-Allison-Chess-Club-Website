import ClubTournament from "../assets/MACCLogoWTransparent.png";
import MtaOpen2023 from "../assets/MTAOpenLogo.png";
import Logo from "../assets/mtachesslogo.png";
import "./gamesDatabase.css";
const GamesDatabase = () => {
    return (        
        <div className="mainContainerDatabase" id="GamesDatabase">
            <h1 className="title database">Club Database</h1>
            <div className="cardSection">
                <div className="tournamentCard">
                    <img src={MtaOpen2023} className="cardImg"></img>
                    <h3 className="tournamentTitle">Mount Allison Open Chess Championship 2023</h3>
                    <a href="https://lichess.org/study/UshxlBum/hGj8sKb1">
                        <button className="gamesLink">View Games</button>
                    </a>
                </div>
                <div className="tournamentCard">
                    <img src={ClubTournament} className="cardImg"></img>
                    <h3 className="tournamentTitle">MACC Internal Rapid Chess Tournament 2023</h3>
                    <a href="https://lichess.org/study/SBpNjvdh">
                        <button className="gamesLink">View Games</button>
                    </a>
                </div>
                <div className="tournamentCard">
                    <img src={Logo} className="cardImg"></img>
                    <h3 className="tournamentTitle">Club Meeting Games</h3>
                    <a href="">
                        <button className="gamesLink">View Games</button>
                    </a>
                </div>

                

            </div>
        </div>
    );
};

export default GamesDatabase;