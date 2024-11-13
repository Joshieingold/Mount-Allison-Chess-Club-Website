import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './adminNav.css';

const AdminNav = ({ setIsAdmin }) => {
    const navigate = useNavigate(); // Correctly initialize navigate

    const handleSignOut = () => {
        setIsAdmin(false);  // Set admin state to false
        navigate('/');      // Redirect to home route
    };

    return (
        <nav className="adminNav">
            <div className="adminNav__logo">
                <NavLink to="/">
                    <img src="src/assets/mtachesslogo.png" alt="Admin Logo" className='adminLogo'/>
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
                    <button className="signOutButton" onClick={handleSignOut}>
                        Sign Out
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNav;
