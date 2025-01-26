import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminNav from './AdminComponents/adminNav.jsx';
import { auth } from './AdminComponents/database.jsx';
import EventManagement from './AdminComponents/eventManagement.jsx';
import GamesManagement from './AdminComponents/gamesManagement.jsx';
import Login from './AdminComponents/login.jsx';
import PlayerManagement from './AdminComponents/playerManagement.jsx';
import SliderManagement from './AdminComponents/SliderManagement.jsx';
import './App.css';
import Calendar from './Calander/calendar.jsx'; // Ensure this path is correct
import Empty from "./Empty/empty.jsx";
import Events from "./Events/events.jsx";
import Footer from "./Footer/footer.jsx";
import GamesDatabase from "./GamesDatabase/gamesDatabase.jsx";
import HomeSlider from './HomeSlider/HomeSlider.jsx';
import MemberProfile from './Members/MemberProfile.jsx';
import Members from './Members/members.jsx'; // Import the Members component
import Navbar from "./Navbar/navbar.jsx";

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
                        <Login setIsAdmin={setIsAdmin} setIsAuthenticated={setIsAuthenticated} />
                    </>
                } />
                <Route path="/admin/manage-slider" element={
                    isAuthenticated && isAdmin ? (
                        <>
                            <AdminNav isAdmin={isAdmin}/>
                            <SliderManagement isAdmin={isAdmin} />
                        </>
                    ) : (
                        <Navigate to="/admin/login" replace />
                    )
                } />
                <Route path="/admin/manage-games-database" element={
                    isAuthenticated && isAdmin ? (
                        <>
                            <AdminNav isAdmin={isAdmin}/>
                            <GamesManagement isAdmin={isAdmin}/>
                        </>
                    ) : (
                        <Navigate to="/admin/login" replace />
                    )
                } />
                <Route path="/admin/manage-events" element={
                    isAuthenticated && isAdmin ? (
                        <>
                            <AdminNav isAdmin={isAdmin}/>
                            <EventManagement/>
                        </>
                    ) : (
                        <Navigate to="/admin/login" replace />
                    )
                } />
                <Route path="/members" element={
                    <>
                        <Navbar />
                        <Empty />
                        <Members /> 
                    </>
                } />
                <Route path="/members/:memberId" element={
                    <>
                        <Navbar />
                        <Empty />
                        <MemberProfile />
                    </>
                } />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
