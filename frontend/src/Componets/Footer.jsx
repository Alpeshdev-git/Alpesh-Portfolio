import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin,} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Alpesh Chandankhede. All Rights Reserved.
      </p>

      <div className="footer-icons">
        <a
          href="https://github.com/Alpeshdev-git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/alpesh-chandankhede-623927238"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

