import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

function InsideNavbar() {
  return (
    <div className="navbar">
     <Link to="/" className="name"> BACK </Link>
      <div className="spacer"></div>
      <div id="buttons-container">
        <div className="button-wrapper">
          <NavLink to="/work">◉ RESUME</NavLink>
          <NavLink to="/about">◉ ABOUT</NavLink>
          <NavLink to="/contact">◉ CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
}

function NavLink(props) {
  return (
    <Link className="hoverAnimation" to={props.to}>
      {props.children}
    </Link>
  );
}

export default InsideNavbar;
