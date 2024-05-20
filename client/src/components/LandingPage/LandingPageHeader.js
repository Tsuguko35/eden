import React from "react";
import "../../styles/landingPageHeader.css";
import header_background from "../../assets/images/LandingPage/edenHeader.png";

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
          <p className="main-text">“Coming Soon”</p>
          <div className="sub-text">
            Our website is under construction, but we are preparing something
            amazing and exciting for you. Please check back soon for updates.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageHeader;
