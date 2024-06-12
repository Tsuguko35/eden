import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GetWindowWidth, bottomNavItems } from "../utils";

import { Sling as Hamburger } from "hamburger-react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const windowWidth = GetWindowWidth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHidden, setShowHidden] = useState(false);
  const [hoveredNav, setHoveredNav] = useState("");
  const navItems = bottomNavItems;

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  const handleMouseEnter = (item) => {
    setShowHidden(true);
    setHoveredNav(item);
  };

  const redirectToPageContent = (target) => {
    setShowHidden(false);
    navigate(target);
  };

  const resetState = () => {
    setShowHidden(false);
    setHoveredNav("");
  };

  return (
    <nav id="navBar" className="navBar" onMouseLeave={() => resetState()}>
      <div className="wrapper">
        <Link to={"/"}>
          <img
            src={
              "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716425911/Eden_Files/d4bfdzjjfxte451baran.webp"
            }
            alt="Eden Logo"
            className="logo"
          />
        </Link>
        {windowWidth > 1024 && (
          <div className="navigation">
            <Link
              className={`${location.pathname === "/" ? "active" : ""}`}
              to={"/"}
              onMouseEnter={() => resetState()}
            >
              Home
            </Link>
            <Link
              className={`${
                location.pathname.includes("/Services") ? "active" : ""
              }`}
              to={"/Services"}
              onMouseEnter={() => handleMouseEnter("Services")}
            >
              Service <MdKeyboardArrowDown />
              {/* <div
                className={`bottom-icon ${
                  hoveredNav === "Services" ? "show" : ""
                }`}
              >
                <MdArrowDropDown />
              </div> */}
            </Link>
            <Link
              className={`${
                location.pathname === "/Portfolio" ? "active" : ""
              }`}
              to={"/Portfolio"}
              onMouseEnter={() => handleMouseEnter("Portfolio")}
            >
              Portfolio <MdKeyboardArrowDown />
              {/* <div
                className={`bottom-icon ${
                  hoveredNav === "Portfolio" ? "show" : ""
                }`}
              >
                <MdArrowDropDown />
              </div> */}
            </Link>
            <Link
              className={`${location.pathname === "/About" ? "active" : ""}`}
              to={"/About"}
              onMouseEnter={() => handleMouseEnter("About")}
            >
              About <MdKeyboardArrowDown />
              {/* <div
                className={`bottom-icon ${
                  hoveredNav === "About" ? "show" : ""
                }`}
              >
                <MdArrowDropDown />
              </div> */}
            </Link>
            <Link
              className={`${location.pathname === "/Contact" ? "active" : ""}`}
              to={"/Contact"}
              onMouseEnter={() => resetState()}
            >
              Contact
            </Link>
            <Link
              className={`${
                location.pathname === "/BecomeADealer" ? "active" : ""
              }`}
              to={"/BecomeADealer"}
              onMouseEnter={() => resetState()}
            >
              Become a Dealer
            </Link>
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
              <Link
                className={`${location.pathname === "/" ? "active" : ""}`}
                to={"/"}
              >
                Home
              </Link>
              <Link
                className={`${
                  location.pathname === "/Services" ? "active" : ""
                }`}
                to={"/Services"}
              >
                Service
              </Link>
              <Link
                className={`${
                  location.pathname === "/Portfolio" ? "active" : ""
                }`}
                to={"/Portfolio"}
              >
                Portfolio
              </Link>
              <Link
                className={`${location.pathname === "/About" ? "active" : ""}`}
                to={"/About"}
              >
                About
              </Link>
              <Link
                className={`${
                  location.pathname === "/Contact" ? "active" : ""
                }`}
                to={"/Contact"}
              >
                Contact
              </Link>
              <Link
                className={`${
                  location.pathname === "/BecomeADealer" ? "active" : ""
                }`}
                to={"/BecomeADealer"}
              >
                Become a Dealer
              </Link>
              <button>GET A QUOTE</button>
            </div>
          </>
        )}
      </div>
      <div className={`hidden-nav ${showHidden ? "show" : ""}`}>
        <div className="wrapper">
          <div className="content-nav ignore-scroll">
            {showHidden &&
              navItems
                .filter((nav) => nav.title === hoveredNav)
                .map((nav) => (
                  <React.Fragment key={nav.title}>
                    {nav.items.map((item, index) => (
                      <div
                        className="nav-item"
                        key={index}
                        onClick={() =>
                          redirectToPageContent(item.serviceTarget)
                        }
                      >
                        <div className="title">
                          <img
                            src={item.serviceIcon}
                            alt=""
                            draggable={false}
                          />
                          <p>{item.serviceName}</p>
                        </div>
                        <div className="desc">{item.serviceDesc}</div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
          </div>
          <div className="vertical-divider"></div>
          <div className="quote-container">
            <div className="quote">
              <p>Transforming Houses into Homes with Innovative Solutions</p>
              <Link onClick={() => setShowHidden(false)} to={"/Services"}>
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
