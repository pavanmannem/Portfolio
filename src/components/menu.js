import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./menu.css";

function HomeNavbar() {
  const openResume = () => {
    window.open('https://aquamarine-sondra-69.tiiny.site/', '_blank');
  };

  return (
    <div className="navbar">
      <div className="name">pavan mannem</div>
      <div className="spacer"></div>
      <div id="buttons-container">
        <div className="button-wrapper">
          <NavLink to="/about" className="hoverAnimation">◉ ABOUT</NavLink>
          <button className="hoverAnimation resume-button" onClick={openResume}>
            ◉ RESUME
          </button>
          <NavLink to="/contact" className="hoverAnimation">◉ CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
