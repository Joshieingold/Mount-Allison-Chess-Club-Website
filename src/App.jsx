import Accomodation from "./Accomodation/accom.jsx";
import './App.css';
import Events from "./Events/events.jsx";
import Footer from "./Footer/footer.jsx";
import Home from "./Home/home.jsx";
import Navbar from "./Navbar/navbar.jsx";
import Resturants from "./Resturants/resturants.jsx";

function App() {
  return (
    <>
          < Navbar />
          < Home />
          < Events />
          <Accomodation />
          <Resturants/>
          <Footer />
    </>
  )
}

export default App
