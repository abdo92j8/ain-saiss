// src/App.js
import React, { useEffect } from "react";
import './assets/styles.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUs />
      <Products />
      <Sustainability />
      <Contact />
      <Footer />
    </div>
  );
  const App = () => {
    useEffect(() => {
      const handleScroll = () => {
        const header = document.querySelector(".header");
        if (window.scrollY > 50) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <>
        <Header />
        {/* Other Components */}
      </>
    );
  };
  const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  header.style.backgroundPosition = 'center ' + (offset * 0.5) + 'px'; 
});
  return (
    <div>
      {/*here it goes*/}
      <ScrollToTopButton />
    </div>
  );
};

export default App;

