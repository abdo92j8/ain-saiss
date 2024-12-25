// Footer.jsx
import React from "react";
import "../assets/styles.css"; // Import the CSS for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="download.jpeg" alt="Ain Saiss Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#sustainability">Sustainability</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ain Saiss. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
