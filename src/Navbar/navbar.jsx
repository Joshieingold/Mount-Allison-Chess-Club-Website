import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/MACC Official Logo Transparent.png";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <button onClick={reloadPage} className="logoButton">
                <img src={ logo } alt="Mount Allison Chess Club Logo" className="logo" />
            </button>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">Events</Link>
                <Link className="desktopMenuListItem">Accomodation</Link>
                <Link className="desktopMenuListItem" >Resturants</Link>
                <Link className="desktopMenuListItem">Games Database</Link>
            </div>
            <button className="Contactbtn">Contact Us</button>
        </nav>
    )
}
export default Navbar


const reloadPage = () => {
    window.scrollTo(0, 0);
    window.location.reload(); // Reload the current webpage
};