import React from 'react';
import '../assets/styles.css'; // Your CSS file
import vide from '../assets/output.mp4';
const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="video-background">
        <video
          className="video-embed"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={vide} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-content">
        <h1>Welcome to Ain Saiss</h1>
        <p>Pure, Refreshing Water from the Atlas Mountains</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
