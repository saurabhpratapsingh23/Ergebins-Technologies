import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // We'll define custom styles below
import logo from "../images/logo.png";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Show scroll button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container bg-black text-white py-5">
      <div className="container-fluid">
        <div className="row">
          {/* Logo and Newsletter Section */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img 
              src={logo}
              alt="Free Hit Zone Logo" 
              className="footer-logo mb-4"
              style={{width:'100px'}}
            />
            <p className="newsletter-text mb-4">
              For news and updates, subscribe to our newsletter today
            </p>
            <div className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
                <button className="btn btn-primary newsletter-btn">
                  Join newsletter
                </button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-3 mb-4 mb-lg-0">
            <h2 className="footer-heading">Company</h2>
            <ul className="footer-links">
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/cricket">Cricket</Link></li>
              <li><Link to="/table-tennis">Table Tennis</Link></li>
            </ul>
          </div>

          {/* Policy Links */}
          <div className="col-lg-3 mb-4 mb-lg-0">
            <h2 className="footer-heading">POLICY</h2>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-lg-2">
            <h2 className="footer-heading">Follow us</h2>
            <ul className="footer-links">
              <li>
                <a href="https://www.instagram.com/freehitzoneofficial/" 
                   target="_blank" 
                   rel="noreferrer">
                  <CiInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Freehitzoneofficial" 
                   target="_blank" 
                   rel="noreferrer">
                  <FaYoutube/> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-5">
          <div className="col-12">
            <p className="copyright-text">
              Copyright © 2024 Free Hit Zone - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <IoIosArrowUp/>
        </button>
      )}
    </footer>
  );
};

export default Footer;