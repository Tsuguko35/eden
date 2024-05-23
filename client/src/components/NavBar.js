import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { GetWindowWidth } from "../utils";

import { Sling as Hamburger } from "hamburger-react";

function NavBar() {
  const location = useLocation();
  const windowWidth = GetWindowWidth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);
  return (
    <nav id="navBar" className="navBar">
      <div className="wrapper">
        <Link>
          <img
            src={
              "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716425911/Eden_Files/d4bfdzjjfxte451baran.webp"
            }
            alt="Eden"
            className="logo"
          />
        </Link>
        {windowWidth > 1024 && (
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
        )}
        {windowWidth <= 1024 && (
          <>
            <div
              className="hamburgerMenu"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Hamburger
                color="#060606"
                label="Show menu"
                toggled={sidebarOpen}
              />
            </div>
            <div className={`navigation mobile ${sidebarOpen ? "open" : ""}`}>
              <Link className={`${location.pathname === "/" ? "active" : ""}`}>
                Home
              </Link>
              <Link>Service</Link>
              <Link>Portfolio</Link>
              <Link>About</Link>
              <Link>Contact</Link>
              <button>GET A QUOTE</button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
