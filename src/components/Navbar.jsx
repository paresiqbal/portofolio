import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [expandNav, setExpandNav] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setExpandNav(false);
  }, [location]);
  return (
    <div className="navbar" id={expandNav ? "open" : "close"}>
      <div className="toggleBtn">
        <button
          onClick={() => {
            setExpandNav((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-bars fa-lg" />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/project">Project</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
