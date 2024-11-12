// src/components/adminNav.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './adminNav.css';

const AdminNav = ({ setIsAdmin }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        setIsAdmin(false);  
        navigate('/');      
    };
    
    
    
    return (
        <nav className="adminNav">
            <div className="adminNav__logo">
                <NavLink to="/">
                    <img src="src\assets\mtachesslogo.png" alt="Admin Logo" className='adminLogo'/>
                </NavLink>
            </div>
            <ul className="adminNav__links">
                <li>
                    <NavLink
                        to="/admin/manage-players"
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
                        Manage Slider
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/manage-games-database"
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        Manage Games Database
                    </NavLink>
                </li>
                <li>
                    <button className="signOutButton" onClick={handleSignOut}>
                    Sign Out
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNav;
