import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/MACC Official Logo Transparent.png";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <button onClick={reloadPage} className="logoButton">
                <img src={ logo } alt="Mount Allison Chess Club Logo" className="logo" />
            </button>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">Events</Link>
                <Link className="desktopMenuListItem">Club Games</Link>
                <Link className="desktopMenuListItem" >Visiting Sackville</Link>

            </div>
            <button className="Contactbtn">Contact Us</button>
        </div>
    )
}
export default Navbar


const reloadPage = () => {
    window.scrollTo(0, 0);
    window.location.reload(); // Reload the current webpage
};