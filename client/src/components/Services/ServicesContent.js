import React from "react";
import "../../styles/servicesContent.css";

import { Link } from "react-router-dom";

import CircleMemberCarousel from "../reusable/CircleMemberCarousel";
import ClientReviewsMini from "../reusable/ClientReviewsMini";

function ServicesContent() {
  return (
    <div id="servicesContent" className="servicesContent">
      <div className="wrapper">
        <div className="products-showcase">
          <div className="background">
            <div className="overlay"></div>
            <img
              src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716439379/Eden_Files/Eden_Services/yq29kluniz2pbgvkvmsm.webp"
              alt="product background"
            />
          </div>
          <div id="_ServiceCategory" className="product-showcase-content">
            <p className="title">“Modern Problem Needs Modern Solution”</p>

            <div className="product-introduction">
              <div className="text-content">
                <p className="title">
                  Experience Exceptional Home Maintenance and Solutions
                </p>
                <p className="desc">
                  Our skilled professionals are dedicated to providing reliable,
                  high-quality services to keep your home safe, comfortable, and
                  well-maintained. Trust us to handle all your home repair and
                  maintenance needs with excellence and care.
                </p>
              </div>
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716440343/Eden_Files/Eden_Services/fxzzrh3ibkbgupkzddd0.webp"
                  alt="intro image"
                />
              </div>
            </div>

            <div className="product-grid">
              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">25%</div>
                      <div className="sub">
                        Less Energy, 10% More Light: Eco-power meets superior
                        brightness.
                      </div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1717977927/Eden_Files/Eden_Services/Products/uboahtlp7mzd5sbeffut.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Blown-in Insulation</p>
                    <p className="desc">
                      insulation that is installed by blowing it into attics,
                      walls, and other cavities. It is made of tiny particles of
                    </p>
                    <Link to={`/Services/Products`}>Learn more</Link>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">20% - 30%</div>
                      <div className="sub">
                        More Efficient: Saves energy and water while keeping you
                        cool.
                      </div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">LED Bulbs</p>
                    <p className="desc">
                      LED's are far more energy-efficient than traditional
                      incandescent bulbs and fluorescent bulbs
                    </p>
                    <Link to={`/Services/Products`}>Learn more</Link>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">50%</div>
                      <div className="sub">
                        cooler air & delivers overkill power.
                      </div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/bkzwncy0azuxajwnhwwc.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">HVAC Services</p>
                    <p className="desc">
                      We offer a full range of services to keep your heating,
                      ventilation, and air conditioning system running
                    </p>
                    <Link to={`/Services/Products`}>Learn more</Link>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">10x Faster</div>
                      <div className="sub">
                        Blazes through dirt in record time.2. Cleans Up to 50
                        Sq. Meters: Takes on messes, big or small.
                      </div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1717977927/Eden_Files/Eden_Services/Products/qojmwl6yk4mwpd4xgekl.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">UVC Light Service</p>
                    <p className="desc">
                      UVC light technology offers a proven weapon in the fight
                      against germs. Our UVC Disinfection Solutions
                    </p>
                    <Link to={`/Services/Products`}>Learn more</Link>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">5%</div>
                      <div className="sub">
                        Green Machine: Powerful & efficient, good for you & the
                        planet.
                      </div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1717977927/Eden_Files/Eden_Services/Products/wckpuqcf8aj1cu8ccru9.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Ecostella</p>
                    <p className="desc">
                      Ecostella is a device designed to improve the efficiency
                      of your existing HVAC system, specifically
                    </p>
                    <Link to={`/Services/Products`}>Learn more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Member Carousel */}
        {/* <CircleMemberCarousel /> */}

        <div id="_ClientReviews" className="client-reviews">
          <div className="client-reviews-container">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716503418/Eden_Files/Eden_Services/istjpnac5xeyamrdqpmw.webp"
                alt="client-visual"
              />
            </div>
            <div className="details-container">
              <div className="text-content">
                <p className="label">Our Portfolio</p>
                <p className="title">Learn from our Clients</p>
                <p className="desc">
                  Discover how our home maintenance solutions have made a
                  difference. Hear directly from our satisfied clients about
                  their experiences and the results they've achieved with our
                  services.
                </p>
                <Link to={"/Portfolio"}>View More</Link>
              </div>
              <div className="carousel">
                <ClientReviewsMini />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesContent;
