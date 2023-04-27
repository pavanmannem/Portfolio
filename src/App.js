import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Work from "./components/work";
import About from "./components/about";
import Contact from './components/contact';
import Home from './components/home';
import './App.css'





function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setShowPopup(false);
    }
  };

  const [isMobileDevice, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="/work" element={<Work/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

    </div>

  );
}

export default App;

