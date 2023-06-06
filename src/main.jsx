import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './navbar.jsx';


AOS.init({startEvent: 'load',
once : 'true,'});
AOS.refresh();

ReactDOM.createRoot(document.getElementById('navbar')).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById('content')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
