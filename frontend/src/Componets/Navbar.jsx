import React from 'react'

import "./Navbar.css"
export default function Navbar() {
  return (
   
           <nav className="navbar navbar-expand-sm  shadow fixed-top">
                        <div className="container-fluid mx-3">
                            <a className="navbar-brand" href="#Home">Alpesh Chandankhede</a>

                           
                            <button
                            className="navbar-toggler bg-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            >
                            <span className="navbar-toggler-icon"></span>
                            </button>

                        
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item mx-3">
                                <a className="nav-link" href="#about">ABOUT ME</a>
                                </li>
                                <li className="nav-item mx-3">
                                <a className="nav-link" href="#skills">SKILLS</a>
                                </li>
                                <li className="nav-item mx-3">
                                <a className="nav-link" href="#projects">PROJECTS</a>
                                </li>
                                <li className="nav-item mx-3">
                                <a className="nav-link" href="#contact">CONTACT</a>
                                 
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href="#contact"> <i className="fa-solid fa-envelope "></i>
                                    </a>
                                   
                                </li>
                               
                            </ul>
                            </div>
                        </div>
                        </nav>

  )
}
