import React from 'react';
import './home.css';

import image from "../Images/Hand coding-bro.svg"

export default function Home() {
  return (
   <div id='Home'> 
  <div className="hero-section">
    <div className="row align-items-center gx-4">
      <div className="first col-12 col-lg-6 mb-4 mb-lg-0">
        <div className="hero-text mx-4">
          <h1>Hi, I’m Alpesh Chandankhede 👋</h1>
          <h2>Full Stack Developer</h2>
          <p>
            I love building responsive MERN stack applications and solving real-world problems with clean, scalable code.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">See My Projects</a>
            <a href="#contact" className="btn btn-outline-primary">Contact Me</a>
          </div>
          <div className="social-icons">
          </div>
        </div>
      </div>
      <div className="second col-12 col-lg-6 text-center">
        <img src={image} alt="Alpesh Chandankhede" className="hero-img" />
      </div>
    </div>
  </div>
</div>

  );
}
