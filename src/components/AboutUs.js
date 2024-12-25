import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ainsaiss from '../assets/ains.jpg'

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 120,    // Offset (in pixels) from the original trigger point
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div
          className="about-image"
          data-aos="fade-right" // Add AOS animation attribute
        >
          <img
            src={ainsaiss}
            alt="Ain Saiss Water"
          />
        </div>
        <div
          className="about-content"
          data-aos="fade-left" // Add AOS animation attribute
        >
          <h2>About Ain Saiss</h2>
          <p>
            Ain Saiss is a leading provider of natural water sourced from the
            pristine springs of Morocco. Our commitment to purity and
            sustainability drives everything we do.
          </p>
          <ul className="milestones" data-aos="fade-up">
            <li>
              <span className="icon">💧</span>
              <p>
                <strong>1975:</strong> Established with the mission to provide
                the purest water.
              </p>
            </li>
            <li>
              <span className="icon">🌍</span>
              <p>
                <strong>2000:</strong> Expanded across Morocco with innovative
                eco-friendly packaging.
              </p>
            </li>
            <li>
              <span className="icon">🏆</span>
              <p>
                <strong>2023:</strong> Recognized for our sustainability and
                commitment to excellence.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
