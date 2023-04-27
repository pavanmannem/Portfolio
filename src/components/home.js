import React, { useState, useEffect } from 'react';
import Navbar from "./menu"
import Cursor from "./cursor";
import SplineScene from './spline';
import PopupWindow from './popup';
import LocTime from './locationtime';
import stars from '../assets/images/SVG/starstarstar.svg'
import './home.css'

function Home() {
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  const handleImageError = (event) => {
    console.log('Error loading image:', event.target.src);
  };

  return (
    <div className='home'>
            <LocTime/>
      <Navbar />
      <Cursor/>
      <SplineScene/>
      {!isMobile && <PopupWindow/>}
      <div className="name">pavan mannem</div>

      <div className='stickers'>
        {/* <img id = "smiley" src={smiley}  alt="Smiley" onError={handleImageError} /> */}
        <img id = "rotate" src={stars}  alt="Stars" onError={handleImageError} />


      </div>

    </div>
  );
}

export default Home;
