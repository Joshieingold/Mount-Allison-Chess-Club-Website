import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminNav from './AdminComponents/adminNav.jsx';
import { auth } from './AdminComponents/database.jsx';
import EventManagement from './AdminComponents/eventManagement.jsx';
import GamesManagement from './AdminComponents/gamesManagement.jsx';
import Login from './AdminComponents/login.jsx';
import PlayerManagement from './AdminComponents/PlayerManagement.jsx';
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
import Info from "./MtaOpen2025/Info/info.jsx";
import TournNav from './MtaOpen2025/MtaOpen2025Nav/tournamentNav.jsx';
import Prize from "./MtaOpen2025/Prizes/prizes.jsx";
import RegistrationPage from './MtaOpen2025/Registration/registration.jsx';
import Rules from "./MtaOpen2025/Rules/rules.jsx";
import Navbar from "./Navbar/navbar.jsx";

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);  // Dark mode state

    // Check authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
                setIsAdmin(true); // Assuming all logged-in users are admins for this example
            } else {
                setIsAuthenticated(false);
                setIsAdmin(false);
            }
        });

        return () => unsubscribe();
    }, []);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={isDarkMode ? 'dark' : 'light'}>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                            <Empty />
                            <HomeSlider />
                            <Events />
                            <GamesDatabase />
                        </>
                    } />
                    <Route path="/calendar" element={
                        <>
                            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                            <Empty />
                            <Calendar />
                        </>
                    } />
                    <Route path="/admin" element={
                        isAuthenticated && isAdmin ? (
                            <>
                                <AdminNav isAdmin={isAdmin} />
                                <PlayerManagement isAdmin={isAdmin} />
                            </>
                        ) : (
                            <Navigate to="/admin/login" replace />
                        )
                    } />
                    <Route path="/admin/login" element={
                        <>
                            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                            <Empty />
                            <Login setIsAdmin={setIsAdmin} setIsAuthenticated={setIsAuthenticated} />
                        </>
                    } />
                    <Route path="/admin/manage-slider" element={
                        isAuthenticated && isAdmin ? (
                            <>
                                <AdminNav isAdmin={isAdmin} />
                                <SliderManagement isAdmin={isAdmin} />
                            </>
                        ) : (
                            <Navigate to="/admin/login" replace />
                        )
                    } />
                    <Route path="/admin/manage-games-database" element={
                        isAuthenticated && isAdmin ? (
                            <>
                                <AdminNav isAdmin={isAdmin} />
                                <GamesManagement isAdmin={isAdmin} />
                            </>
                        ) : (
                            <Navigate to="/admin/login" replace />
                        )
                    } />
                    <Route path="/admin/manage-events" element={
                        isAuthenticated && isAdmin ? (
                            <>
                                <AdminNav isAdmin={isAdmin} />
                                <EventManagement />
                            </>
                        ) : (
                            <Navigate to="/admin/login" replace />
                        )
                    } />
                    <Route path="/members" element={
                        <>
                            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                            <Empty />
                            <Members />
                        </>
                    } />
                    <Route path="/members/:memberId" element={
                        <>
                            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                            <Empty />
                            <MemberProfile />
                        </>
                    } />
                    <Route path="/mta-open-2025" element={
                        <>
                            <TournNav toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                            <Empty />
                            <Info />
                            <Rules />
                            <Prize />

                            <RegistrationPage isDarkMode={isDarkMode}/>

                        </>
                    } />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
