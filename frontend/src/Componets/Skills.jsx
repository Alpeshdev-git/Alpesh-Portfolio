import React, { useEffect } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs ,FaGitAlt, FaGithub} from 'react-icons/fa';
import {SiMongodb,SiMysql,SiPostgresql,SiGo, SiExpress} from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./skills.css"

export default function Skills() {
     useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true     
    });
  }, []);

    const skills = [
   { name: 'HTML5', icon: <FaHtml5 color="#E44D26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
     { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
     { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
    { name: 'Go', icon: <SiGo color="#00ADD8" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'Express', icon: <SiExpress color="#000000" /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
    { name: 'GitHub', icon: <FaGithub color="#181717" /> },
  ];
  

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} data-aos="fade-right" data-aos-delay={`${index * 100}`}>
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
