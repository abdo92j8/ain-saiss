import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll'; // Optional for smooth scrolling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll back to top
  const scrollToTop = () => {
    scroll.scrollToTop(); // Smooth scroll to top
    // Alternatively: window.scrollTo(0, 0); // Use this for instant scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '50%',
        fontSize: '20px',
        display: isVisible ? 'block' : 'none',
        cursor: 'pointer',
      }}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
