import React, { useState } from 'react';
import './contact.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

export default function Contact() {

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://alpesh-portfolio.onrender.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent!');
    } else {
      alert('Error sending message.');
    }
  } catch (error) {
    console.error(error);
    alert('Error sending message.');
  }
};
  return (
    <section id="contact" className="contact-section">
       <h2 data-aos="fade-up">Contact Me</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        I'm always open to collaboration. Let’s build something amazing together!
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:youremail@example.com">alpeshchandankhede@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span>+91 7249075211</span>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/alpesh-chandankhede-623927238"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

     <form className="contact-form" data-aos="fade-up" data-aos-delay="300" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name='name' required  onChange={handleChange} />
        <input type="email" placeholder="Email Address" name='email' required onChange={handleChange} />
        <textarea placeholder="Message" name='message' required onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
