import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/mtachesslogo.png";
import "./tournamentNav.css";

const TournNav = ({ toggleDarkMode, isDarkMode }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [isInvisible, setIsInvisible] = useState(false);

    // Scroll event handler to toggle sticky navbar and hide it when scrolling down
    const handleScroll = () => {
        const topBarHeight = document.querySelector('.topBar').offsetHeight;
        if (window.scrollY > topBarHeight) {
            setIsSticky(true);
            setIsInvisible(true);
        } else {
            setIsSticky(false);
            setIsInvisible(false);
        }
    };

    const reloadPage = () => {
        window.scrollTo(0, 0);
        window.location.reload();
    };

    // UseEffect to add and remove the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`wholeBar ${isDarkMode ? 'dark' : 'light'}`}>
            <div className={`topBar ${isInvisible ? 'hidden' : ''}`}>
                <img className="logo" src={logo} alt="Logo" onClick={reloadPage} />
                <h1 className="clubTitle">Mount Allison Open 2025</h1>
                <div className="socialContainer">
                    <a className="instagram" href="https://www.instagram.com/mta_chess/">
                        <img src="https://app.fide.com/upload/7/16bbc49864ce3a3875c3e0c354b3806c.svg" alt="Instagram" className="icon" />
                    </a>
                    <a className="facebook" href="https://www.facebook.com/groups/mtachess/?ref=share&mibextid=NSMWBT">
                        <img src="https://app.fide.com/upload/5/b7536cc9d09fed04bce5eff6fff07dbd.svg" alt="Facebook" className="icon" />
                    </a>
                    <div className="darkModeToggle">
                    <label className="switch">
                        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                        <span className="slider round"></span>
                    </label>
                </div>
                </div>
            </div>
            <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
                <div className="desktopMenu">
                    <Link className="desktopMenuListItem" to="/">Intro</Link>
                    <Link className="desktopMenuListItem" to="/rules">Rules</Link>
                    <Link className="desktopMenuListItem" to="/prizes">Prizes</Link>
                    <Link className="desktopMenuListItem" to="/register">Register</Link>
                </div>
                {/* Dark Mode Toggle */}
                
            </div>
        </div>
    );
};

export default TournNav;
