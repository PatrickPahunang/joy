import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import About from './pages/About';
import Contacts from './pages/Contacts';
import AOS from 'aos';
import Collections from './pages/Collections';



function App() {
  
  
  return (
    
    <>
  <div className='h-max w-screen'>
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
  </Router>


  
  </div>
    </>
  )
}

export default App
