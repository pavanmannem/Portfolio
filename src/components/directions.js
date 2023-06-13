import React, { useState } from "react";
import "./directions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowLeft, faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const WASDButtons = () => {
  const [isPressed, setIsPressed] = useState({
    w: false,
    a: false,
    s: false,
    d: false
  });

  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    setIsPressed((prevState) => ({ ...prevState, [key]: true }));
  };

  const handleKeyUp = (event) => {
    const key = event.key.toLowerCase();
    setIsPressed((prevState) => ({ ...prevState, [key]: false }));
  };

  return (
    <div className="WASDButtons">
      <div className="WASDRow">
        <div
          className={`WASDButton ${isPressed.w ? "pressed" : ""}`}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          tabIndex="0"
        >
          W
          <div className="arrow up-arrow">
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
          
        </div>
      </div>
      <div className="WASDRow">
        <div
          className={`WASDButton ${isPressed.a ? "pressed" : ""}`}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          tabIndex="0"
        >
          A
          <div className="arrow left-arrow">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        
        </div>
        <div
          className={`WASDButton ${isPressed.s ? "pressed" : ""}`}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          tabIndex="0"
        >
          S
          <div className="arrow down-arrow">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
        <div
          className={`WASDButton ${isPressed.d ? "pressed" : ""}`}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          tabIndex="0"
        >
          D
          <div className="arrow right-arrow">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WASDButtons;
