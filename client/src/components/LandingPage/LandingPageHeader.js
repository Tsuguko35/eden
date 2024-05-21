import React from "react";
import "../../styles/landingPageHeader.css";
import header_background from "../../assets/images/LandingPage/edenHeader2.png";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

function LandingPageHeader() {
  return (
    <div id="landingPageHeader" className="landingPageHeader">
      <div className="wrapper">
        <div className="background">
          <div className="overlay"></div>
          <div className="image">
            <img src={header_background} alt="" />
          </div>
        </div>
        <div className="header-text">
          <p className="main-text">“We Enhance America”</p>
          <div className="sub-text">Home Solution</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageHeader;
