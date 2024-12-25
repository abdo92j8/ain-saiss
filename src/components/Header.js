import React from "react";
import { motion } from "framer-motion";
import "../assets/styles.css";

const Header = () => (
  <header className="header">
    <div className="logo">
      <motion.img
        src="download.jpeg"
        alt="Ain Saiss Logo"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
    <nav className="nav">
      <ul className="nav-list">
        <motion.li whileHover={{ scale: 1.2, color: "#FFD700" }}>
          <a href="#home">Home</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2, color: "#FFD700" }}>
          <a href="#about">About</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2, color: "#FFD700" }}>
          <a href="#products">Products</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2, color: "#FFD700" }}>
          <a href="#contact">Contact</a>
        </motion.li>
      </ul>
    </nav>
    <div className="search">
      <motion.input
        type="text"
        placeholder="Search..."
        whileFocus={{ scale: 1.05, borderColor: "#1E90FF" }}
      />
      <motion.button whileHover={{ scale: 1.2 }}>&#x1F50D;</motion.button>
    </div>
  </header>
);

export default Header;
