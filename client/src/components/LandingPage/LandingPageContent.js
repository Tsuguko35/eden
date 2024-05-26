import React, { useState } from "react";
import "../../styles/landingPageContent.css";

import LoadingDot from "../../assets/svg/LoadingDot";

import { Link } from "react-router-dom";
import InnovationCarousel from "../reusable/InnovationCarousel";
import MembersCarousel from "../reusable/MembersCarousel";
import MapComponent from "../reusable/MapComponent";
import MiniPortfolioCarousel from "../reusable/MiniPortfolioCarousel";

function LandingPageContent() {
  const [zipCode, setZipCode] = useState(null);
  const [submit, setSubmit] = useState(false);

  const visual_1 =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716428239/Eden_Files/Eden_LandingPage/agzzla8jqwtlimvcks6e.webp";
  const visual_2 =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716428239/Eden_Files/Eden_LandingPage/i6qf0fdzdlbsd4mqhy7n.webp";
  const visual_3 =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716428239/Eden_Files/Eden_LandingPage/huq11dgbm3pdrukqoapm.webp";

  const findLocation = (e) => {
    e.preventDefault();

    setSubmit(true);
  };
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
              <Link to={"/About"}>MORE ABOUT ME</Link>
            </div>
          </div>
          <div className="image">
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716428239/Eden_Files/Eden_LandingPage/trpulagsofuryxiuwawy.webp"
              }
              alt="Details Visual"
            />
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
            <span className="dark"></span>
            <span className="secondary"></span>
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

        <div className="quote-container">
          <div className="title">Get Your Personalized Quote Today!</div>
          <div className="desc">
            Get competitive prices for your project or product by requesting a
            quick quotation today!
          </div>
          <div className="action">
            <Link to={"/Services"}>REQUEST FOR QUOTATION</Link>
          </div>
        </div>

        <div className="google-map">
          <div className="map">
            <div className="map-container">
              <MapComponent
                zipCode={zipCode}
                submit={submit}
                setSubmit={setSubmit}
              />
            </div>
          </div>
          <div className="input-container">
            <p className="title">LET US KNOW WHERE YOU AT!</p>
            <p className="desc">
              Help us serve you better by providing your current location.
              Simply let us know where you are, and we'll tailor our services to
              meet your needs right where you are.
            </p>
            <form onSubmit={findLocation} className="input-group">
              <input
                type="text"
                required
                placeholder="Enter ZIP Code"
                onChange={(e) => setZipCode(e.target.value)}
                disabled={submit}
              />
              <button type="submit" disabled={submit}>
                {submit ? <LoadingDot width={40} height={40} /> : "Locate"}
              </button>
            </form>
          </div>
        </div>

        <div className="line-details">
          <div className="lines left">
            <span className="dark"></span>
            <span className="secondary"></span>
          </div>
        </div>

        <div className="company-details withPadding">
          <div className="details">
            <p className="label">Our Portfolio Showcase</p>
            <p className="title">Discover Excellence: Our Portfolio Unveiled</p>
            <p className="description">
              Embark on a journey of discovery as we unveil our portfolio of
              excellence. Explore a curated collection showcasing our finest
              achievements, innovative projects, and expertise, designed to
              inspire and captivate.
            </p>
            <div className="action">
              <Link to={"/Portfolio"}>SHOW MORE</Link>
            </div>
          </div>
          <div className="image carousel">
            <MiniPortfolioCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageContent;
