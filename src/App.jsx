import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Lenis from 'lenis'
import About from './pages/About.jsx'
import Facility from './pages/Facility.jsx'
import Gallery from './pages/Gallery.jsx'
import Feedback from './pages/Feedback.jsx'
import Contact from './pages/Contact.jsx'
import DayOutPartyPage from './pages/DayOutPartyPage.jsx'
import RoomBookingPage from './pages/RoomBookingPage.jsx'
import UserPopUp from './components/UserPopUp.jsx'

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
      duration: 2
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      // console.log(e);
    });
  })
  return (
    <div className='overflow-hidden'>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/facilities" element={<Facility />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/day-out-booking" element={<DayOutPartyPage />} />
        <Route path="/room-booking" element={<RoomBookingPage />} />
      </Routes>
      <Footer />
      <UserPopUp/>
    </div>
  )
}

export default App