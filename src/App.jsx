import './App.css';
import Empty from './Empty/empty.jsx';
import Events from "./Events/events.jsx";
import Footer from "./Footer/footer.jsx";
import GamesDatabase from "./GamesDatabase/gamesDatabase.jsx";
import HomeSlider from './HomeSlider/HomeSlider.jsx';
import Navbar from "./Navbar/navbar.jsx";
import Resturants from "./Resturants/resturants.jsx";

function App() {
  return (
    <>
          < Navbar />
          <Empty/>
          <HomeSlider />
          < Events/>
          < GamesDatabase/>
          <Resturants/>
          <Footer />
    </>
  )
}

export default App
