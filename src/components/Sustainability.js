import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles.css'; // Styling for the section
import recyclingIcon from '../assets/plastic.png';
import waterIcon from '../assets/water.png';
import ecoFriendlyIcon from '../assets/env.png';
const SustainabilitySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="sustainability-section">
      <div className="sustainability-container">
        <h2 className="sustainability-heading" data-aos="fade-up">
          Our Commitment to Sustainability
        </h2>
        <p className="sustainability-subtext" data-aos="fade-up" data-aos-delay="200">
          At Ain Saiss, we prioritize the environment. Here's how we're making a difference.
        </p>
        <div className="sustainability-details" data-aos="fade-up" data-aos-delay="300">
          <div className="sustainability-card" data-aos="fade-right">
          <img src={recyclingIcon} alt="Recycling" />
            <h3>Recycling</h3>
            <p>All our bottles are 100% recyclable, contributing to a cleaner and greener future.</p>
          </div>
          <div className="sustainability-card" data-aos="fade-right" data-aos-delay="200">
          <img src={waterIcon} alt="Water Preservation" />
            <h3>Water Preservation</h3>
            <p>We ensure sustainable water sourcing to protect our local water resources.</p>
          </div>
          <div className="sustainability-card" data-aos="fade-right" data-aos-delay="400">
          <img src={ecoFriendlyIcon} alt="Eco-friendly Practices" />
            <h3>Eco-friendly Practices</h3>
            <p>From production to distribution, we reduce our carbon footprint with energy-efficient methods.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;

