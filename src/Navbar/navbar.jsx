import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mtachesslogo.png";
import "./navbar.css";

const Navbar = () => {
    // Global Variable Initialization
    const [isSticky, setIsSticky] = useState(false);
    const [isInvisable, setIsInvisable] = useState(false);
    
    // Measures when the user is scrolling, this way the Navbar will collapse or expand based on the users position.
    const handleScroll = () => {
        const topBarHeight = document.querySelector('.topBar').offsetHeight;
        if (window.scrollY > topBarHeight) {
            setIsSticky(true);
            setIsInvisable(true);
        } else {
            setIsSticky(false);
            setIsInvisable(false);
        }
    };
    // Initialize scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // Returns to the top of the page and then reloads the window.
    const reloadPage = () => {
        window.scrollTo(0, 0); 
        window.location.reload();
    };

    // HTML // 
    return (
        <div className="wholeBar">
            <div className={`topBar ${isInvisable ? 'hidden' : ''}`}>
                <img className="logo" src={logo} alt="Logo" onClick={reloadPage} />
                <h1 className="clubTitle">Mount Allison Chess Club</h1>
                <div className="socialContainer">
                    <a className="instagram" href="https://www.instagram.com/mta_chess/">
                        <img src="https://app.fide.com/upload/7/16bbc49864ce3a3875c3e0c354b3806c.svg" alt="Instagram" className="icon" />
                    </a>
                    <a className="facebook" href="https://www.facebook.com/groups/mtachess/?ref=share&mibextid=NSMWBT">
                        <img src="https://app.fide.com/upload/5/b7536cc9d09fed04bce5eff6fff07dbd.svg" alt="Facebook" className="icon" />
                    </a>
                </div>
            </div>
            <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
                <div className="desktopMenu">
                    <Link className="desktopMenuListItem" to="/" >Home</Link>
                    <Link className="desktopMenuListItem" to="/calendar">Events</Link>
                    <Link className="desktopMenuListItem" to="/members">Members</Link>
                    <Link className="desktopMenuListItem" to="/admin/login">Staff</Link>
                    <Link className="desktopMenuListItem" to="/mta-open-2025">MTA Open 2025</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
