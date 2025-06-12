import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App