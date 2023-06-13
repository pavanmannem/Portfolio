import React, { useState, useEffect, useRef } from 'react';
import './popup.css';
import WASDButtons from './directions';


const PopupWindow = () => {
  const [showPopup, setShowPopup] = useState(true);
  const popupRef = useRef(null);

  useEffect(() => {
    if (showPopup) {
      // Disable scrolling while popup is active
      document.body.style.overflow = 'hidden';
      // Set focus on the popup
      popupRef.current.focus();
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPopup]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setShowPopup(false);
    }
  };

  const handleClick = (event) => {
    setShowPopup(false);
  };

  const popupStyle = {
    opacity: showPopup ? 1 : 0,
    pointerEvents: showPopup ? 'auto' : 'none',
  };

  const overlayStyle = {
    opacity: showPopup ? 1 : 0,
    pointerEvents: showPopup ? 'auto' : 'none',
  };

  return (
    <>
      <div className="popup-overlay" style={overlayStyle} onClick={handleClick}></div>
      <div className="popup" style={popupStyle} ref={popupRef} onKeyDown={handleKeyDown} tabIndex={0}>
        <h1 className='instructions'>INSTRUCTIONS</h1> 
        <div className='split'>

          <div className='left'>
          <p class="move">TO MOVE USE WASD AS ARROWS</p>
            <WASDButtons/>
          </div>

      
          <div className='right'>
          <p class="orbit">TO ORBIT LEFT CLICK AND DRAG</p>
            <img src="https://i.ibb.co/jfBPyL6/output-onlinepngtools-9.png" alt="output-onlinepngtools-9" height = "200" width = "200" border="0"/>
          </div>
        </div>
        <p className = "press-enter">PRESS ENTER TO EXPLORE</p>

      </div>
    </>
  );
};

export default PopupWindow;
