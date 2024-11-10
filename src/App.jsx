import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './Calander/calendar.jsx'; // Ensure this path is correct
import Empty from "./Empty/empty.jsx";
import Events from "./Events/events.jsx";
import Footer from "./Footer/footer.jsx";
import GamesDatabase from "./GamesDatabase/gamesDatabase.jsx";
import HomeSlider from './HomeSlider/HomeSlider.jsx';
import Navbar from "./Navbar/navbar.jsx";
import Resturants from "./Resturants/resturants.jsx";

function App() {
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
              {/* Add more routes as needed */}
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;