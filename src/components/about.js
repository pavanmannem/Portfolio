import React from 'react';
import Buttons from './menu';
import Cursor from './cursor';
import { Link } from 'react-router-dom';
import './about.css';
import my_face from '../assets/images/port_holdover.jpg'
import LocTime from './locationtime';
import smiley from '../assets/images/SVG/smiley_large.svg'
import hello from '../assets/images/SVG/hello.svg'
import cd from '../assets/images/SVG/cd.svg'

// import abstract from '../assets/images/SVG/abstract.svg'



function About() {
  return (
    <div className = 'about'>
      <Cursor />
      <Buttons />
      <LocTime />

      <Link to="/" className="back-button"> ◐ BACK</Link>
      <div className="about-container">
        <div className="about-image-container">
          <img className="about-image" src={my_face} alt="My Profile" />
        </div>
        <img id = "smiley" src={smiley}  alt="Smiley"/>
        <img id = "hello" src={hello} alt="Stars"/>
        {/* <img id = "cd" src={cd} alt="Stars"/> */}


        <div className="about-content">
          <div className="about-header">
            <h2>About Me</h2>
            <div className="social-links">
              <a href="https://twitter.com/pavan6000" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/pavanmannem1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://open.spotify.com/user/pmannem?" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-spotify"></i>
              </a>
              <a href="https://www.instagram.com/6.outof.10" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <p>
            Data scientist by day, creative developer by night, and a die hard San Antonio Spurs fan in between. 
            Based in Austin, TX with a serious al pastor taco addiction. 
            Currently swimming at Synthesis - a data science focused marketing agency. 
          </p> 
        </div>
      </div>
    </div>
  );
}

export default About;
