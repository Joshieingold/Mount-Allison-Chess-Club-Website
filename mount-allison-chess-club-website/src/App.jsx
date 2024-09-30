import { useState } from 'react'
import './App.css'
import Home from "./Home/home.jsx";
import Navbar from "./Navbar/navbar.jsx";
import Accomodation from "./Accomodation/accom.jsx"

function App() {
  return (
    <>
          < Navbar />
          
          < Home />
          <Accomodation />
    </>
  )
}

export default App
