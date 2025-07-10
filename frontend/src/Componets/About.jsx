import React, { useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./about.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../Images/alpesh.jpg"

export default function About() {
    useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,    
  });
}, []);
  return (
    <div className="about-box" id="about">
                <div className="main-about">
                    <h1 className="Heading">ABOUT ME</h1>
                    <div className="row justify-content-center gx-2"> 
                    
                    <div className="first col-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
                        <div className="name px-3 px-md-4">
                           <h2 className="sub-heading" data-aos="fade-down" data-aos-delay="200">
                                    Full Stack Developer
                                    </h2>
                        <span>
                           Hello! My name is Alpesh Chandankhede I am a Full Stack Developer who enjoys hands-on work in developing responsive and friendly web applications. I just finished an internship where I honed my skills in frontend as well as backend development on live projects and working in a team setup. I enjoy bringing ideas to life in clean, effective code and new technologies. My experience spans HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, and I prefer solving challenging problems creatively.I'm always ready to learn, develop, and contribute to meaningful projects. Let's create something amazing together.
                        </span>
                        <ul className="about-highlights">
                                <li>📍 Based in Nagpur, India</li>
                                 <li>📍 Ex Connectwise Intern Pune, India</li>
                                <li>💻 MERN Stack Enthusiast</li>
                                <li>🎓 Open to Internships and full time opportunities</li>
                                </ul>

                                <a href="/Alpesh-Resume.pdf" target="_blank" className="btn btn-primary mb-3">
                                Download Resume
                                </a>

                                <div className="social-links">
                                <a href="https://github.com/Alpeshdev-git" target="_blank" rel="noreferrer">
                                    <FaGithub size={28} />
                                </a>
                                <a href="https://www.linkedin.com/in/alpesh-chandankhede-623927238" target="_blank" rel="noreferrer">
                                    <FaLinkedin size={28} />
                                </a>
                                
                            </div>
                           
                        </div>
                    </div>

                    <div className="second col-12 col-lg-6 text-center" data-aos="fade-left">
                        <img src={image} alt="Alpesh Chandankhede" className="about-img" />
                    </div>
                    </div>
                </div>
</div>

  )
}
