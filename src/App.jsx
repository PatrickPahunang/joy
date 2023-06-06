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
        <Route path="/joy/" element={<Home />} />
        <Route path="/joy/" element={<Collections/>} />
        <Route path="/joy/" element={<About/>} />
        <Route path="/joy/" element={<Contacts/>} />
      </Routes>
  </Router>


  
  </div>
    </>
  )
}

export default App
