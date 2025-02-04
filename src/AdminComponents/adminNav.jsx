import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/mtachesslogo.png";
import './adminNav.css';

const AdminNav = ({ setIsAdmin }) => {
    const navigate = useNavigate('/');

    const handleSignOut = () => {
        setIsAdmin(false);  
        setIsAuthenticated(false);
        navigate;      
    };

    return (
        <nav className="adminNav">
            <div className="adminNav__logo">
                <NavLink to="/" onClick={handleSignOut}>
                    <img src={logo} alt="Admin Logo" className='adminLogo'/>
                </NavLink>
            </div>
            <ul className="adminNav__links">
                <li>
                    <NavLink
                        to="/admin"
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        Manage Players
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/manage-slider"
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        Manage Slides
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/manage-games-database"
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        Manage Games Collections
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/manage-events"
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        Manage Events
                    </NavLink>
                </li>
                <li>
                    <NavLink className="signOutButton" onClick={handleSignOut} to="/">
                        Sign Out
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNav;
