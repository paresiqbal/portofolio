import React from "react";
import "../style/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      </div>
      <p>&copy; 2022 Creator</p>
    </div>
  );
}

export default Footer;
