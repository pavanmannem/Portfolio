import React, { useState } from "react";
import "./directions.css";

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
        </div>
        <div
          className={`WASDButton ${isPressed.s ? "pressed" : ""}`}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          tabIndex="0"
        >
          S
        </div>
        <div
          className={`WASDButton ${isPressed.d ? "pressed" : ""}`}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          tabIndex="0"
        >
          D
        </div>
      </div>
    </div>
  );
};

export default WASDButtons;
