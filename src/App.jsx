import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './Calander/calendar.jsx'; // Ensure this path is correct
import AdminNav from './Components/adminNav.jsx';
import { auth } from './Components/database.jsx';
import Login from './Components/login.jsx';
import PlayerManagement from './Components/playerManagement.jsx';
import Empty from "./Empty/empty.jsx";
import Events from "./Events/events.jsx";
import Footer from "./Footer/footer.jsx";
import GamesDatabase from "./GamesDatabase/gamesDatabase.jsx";
import HomeSlider from './HomeSlider/HomeSlider.jsx';
import Navbar from "./Navbar/navbar.jsx";
import Resturants from "./Resturants/resturants.jsx";

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Set authentication status based on user presence
                setIsAuthenticated(true);
                
                // Here you can set isAdmin based on user role or other criteria
                // For example, use a custom claim or check user role from the database
                setIsAdmin(true); // Assuming all logged-in users are admins for this example
            } else {
                setIsAuthenticated(false);
                setIsAdmin(false);
            }
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <Empty />
                        <HomeSlider />
                        <Events />
                        <GamesDatabase />
                        <Resturants />
                    </>
                } />
                <Route path="/calendar" element={
                    <>
                        <Navbar />
                        <Empty />
                        <Calendar />
                    </>
                } />
                <Route path="/admin" element={
                    isAuthenticated && isAdmin ? (
                        <>
                            <AdminNav isAdmin={isAdmin}/>
                            <PlayerManagement isAdmin={isAdmin} />
                        </>
                    ) : (
                        <Navigate to="/admin/login" replace />
                    )
                } />
                <Route path="/admin/login" element={
                    <>
                        <Navbar />
                        <Empty />
                        <Login setIsAdmin={setIsAdmin} />
                    </>
                } />
                <Route path="/admin/manage-slider" element={
                    isAuthenticated && isAdmin ? (
                        <>
                            <AdminNav isAdmin={isAdmin}/>
                            <PlayerManagement isAdmin={isAdmin} />
                        </>
                    ) : (
                        <Navigate to="/admin/login" replace />
                    )
                } />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
