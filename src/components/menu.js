import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

function Navbar() {
  return (
    <div id="buttons-container">
      <Link to="/work">◉ WORK</Link>
      <Link to="/about">▣ ABOUT</Link>
      <Link to="/contact">◈ CONTACT</Link>
    </div>

    
  );
}

export default Navbar;
