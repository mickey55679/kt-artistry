import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; // Correct import for LinkedIn icon

const Footer = () => {
  return (
    <footer className="footer-bar">
      <div className="social-media">
        <a
          href="https://www.facebook.com/ktartistry"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
