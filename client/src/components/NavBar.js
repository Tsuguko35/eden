import React from "react";
import "../styles/navbar.css";
import eden_logo from "../assets/images/LogoLong.png";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <nav id="navBar" className="navBar">
      <div className="wrapper">
        <img src={eden_logo} alt="" className="logo" />
        <div className="navigation">
          <Link className={`${location.pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
          <Link>Service</Link>
          <Link>Portfolio</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <button>GET A QUOTE</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
