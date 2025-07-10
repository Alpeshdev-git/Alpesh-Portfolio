import React from 'react';
import './project.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {SiMysql,SiExpress } from 'react-icons/si';
import login from "../Images/login-page.png"
import currency from "../Images/currency.png"

export default function Project() {
  const projects = [
    {
      title: 'Login System',
      image: login, 
      techStack: [
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'Express', icon: <SiExpress color="#000000" /> }
      ],
      description: 'A secure login system built with React for the frontend and Node.js with Express for the backend, using MySQL to store user credentials. It supports user registration, login authentication, password hashing, and session management. Designed with clean UI and robust backend validation to ensure data security and smooth user experience.',
    },
    {
      title: 'Currency Converter',
      image: currency,
      techStack: [
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'Express', icon: <SiExpress color="#000000" /> }
      ],
      description: 'A real-time currency converter web app built with React for the frontend and Node.js with Express for the backend. It integrates with a live exchange rates API to fetch up-to-date currency data. Users can select currencies, enter amounts, and instantly get accurate conversions. Designed with a clean, responsive UI and robust API handling for smooth performance..',
    },
  ];

  return (
    <section id="projects" className="projects-section">
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                    <div
                        className="project-card"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={`${index * 100}`}
                    >
                        <a href={project.image} target="_blank" rel="noopener noreferrer">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />
                        </a>
                        <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.techStack.map((tech, idx) => (
                            <span className="tech-icon" key={idx}>{tech.icon}</span>
                            ))}
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </section>

  );
}
