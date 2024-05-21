import React from "react";
import "../../styles/landingPageContent.css";

import company_details_image from "../../assets/images/LandingPage/image1.svg";

import visual_1 from "../../assets/images/LandingPage/visual1.svg";
import visual_2 from "../../assets/images/LandingPage/visual2.svg";
import visual_3 from "../../assets/images/LandingPage/visual3.svg";
import { Link } from "react-router-dom";
import InnovationCarousel from "../reusable/InnovationCarousel";
import MembersCarousel from "../reusable/MembersCarousel";

function LandingPageContent() {
  return (
    <div id="landingPageContent" className="landingPageContent">
      <div className="wrapper">
        <div className="company-details withPadding">
          <div className="details">
            <p className="label">Who we are as a company</p>
            <p className="title">
              Transforming Houses into Homes with Innovative Solutions
            </p>
            <p className="description">
              At EDEN Home Solution, we are dedicated to transforming houses
              into homes through innovative, high-quality solutions. With a
              commitment to excellence, we offer a comprehensive range of
              services designed to enhance the comfort, beauty, and
              functionality of your living spaces. Our team of experienced
              professionals is passionate about providing personalized solutions
              that meet your unique needs and exceed your expectations. Whether
              you're looking to renovate, upgrade, or completely redesign your
              home, we are here to help you create the perfect sanctuary that
              reflects your style and vision. Trust us to be your partner in
              building a better, smarter, and more beautiful home.
            </p>
            <div className="action">
              <Link>MORE ABOUT ME</Link>
            </div>
          </div>
          <div className="image">
            <img src={company_details_image} alt="" />
          </div>
        </div>
        <div className="innovations">
          <div className="container">
            <div className="carousel">
              <InnovationCarousel />
            </div>
            <div className="innovations-text">
              <p className="label">Spotlight on Excellence</p>
              <p className="title">
                Discover Our Top-Rated Innovations and Offerings
              </p>
              <p className="description">
                At Eden, we take pride in delivering the finest solutions and
                services that set the standard for quality and innovation. In
                our "Spotlight on Excellence," we highlight our premier
                offerings that exemplify our commitment to excellence. Each
                featured product and service has been carefully selected to
                showcase the best of what we offer, reflecting our dedication to
                superior craftsmanship, cutting-edge technology, and exceptional
                customer satisfaction. Explore these standout solutions and
                discover how we can help transform your home into a haven of
                comfort and style.
              </p>
            </div>
          </div>
        </div>
        <div className="line-details">
          <div className="lines">
            <span className="secondary"></span>
            <span className="dark"></span>
          </div>
        </div>

        {/* Member Carousel */}
        <MembersCarousel />

        <div className="line-details">
          <div className="lines left">
            <span className="secondary"></span>
            <span className="dark"></span>
          </div>
        </div>

        <div className="visuals-container">
          <div className="container">
            <div className="title">
              Embodied Excellence: Our Commitments in Action
            </div>
            <div className="visuals">
              <div className="visual">
                <img src={visual_1} alt="" />
                <p className="label">Fast Work</p>
              </div>
              <div className="visual">
                <img src={visual_2} alt="" />
                <p className="label">Excellent Performance</p>
              </div>
              <div className="visual">
                <img src={visual_3} alt="" />
                <p className="label">Can work everywhere</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageContent;
