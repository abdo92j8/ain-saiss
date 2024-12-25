import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles.css'; // Create this CSS file for styling

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section  id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading" data-aos="fade-up">
          Get in Touch
        </h2>
        <p className="contact-subtext" data-aos="fade-up" data-aos-delay="200">
          Have questions? Need assistance? We’re here to help!
        </p>
        <div className="contact-form-container" data-aos="fade-up" data-aos-delay="300">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-extra" data-aos="fade-left" data-aos-delay="400">
          <p>📍 Ain Saiss, Morocco</p>
          <p>📞 +212 6 1234 5678</p>
          <p>✉️ support@ain-saiss.ma</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
