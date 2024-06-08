import React from "react";
import "../../styles/servicesContent.css";

import { Link } from "react-router-dom";

import * as SiIcons from "react-icons/si";
import CircleMemberCarousel from "../reusable/CircleMemberCarousel";
import ClientReviewsMini from "../reusable/ClientReviewsMini";

function ServicesContent() {
  return (
    <div id="servicesContent" className="servicesContent">
      <div className="wrapper">
        <div className="corporate-clients">
          <div className="title">Corporate Clients</div>
          <div className="clients">
            <SiIcons.SiMcdonalds className="icon" />
            <SiIcons.SiWindows className="icon" />
            <SiIcons.SiAccenture className="icon" />
            <SiIcons.SiApple className="icon" />
          </div>
        </div>

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
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Lighting</p>
                    <p className="desc">
                      Encompasses smart lighting solutions such as LED bulbs and
                      smart switches that offer remote...{" "}
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
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444582/Eden_Files/Eden_Services/Products/y4sqbkaq9s5arajercsz.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Laundry Efficient</p>
                    <p className="desc">
                      Comprises smart washers and dryers that optimize water and
                      energy use based on load size, providing....
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
                    <p className="title">Climate Control</p>
                    <p className="desc">
                      Includes smart thermostats and energy-efficient air
                      conditioners designed to optimize indoor ...
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
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/pglasckhvsz6laklh0jx.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Home Cleaning</p>
                    <p className="desc">
                      Includes robotic vacuum cleaners that automate floor
                      cleaning with smart navigation and scheduling...
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
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444582/Eden_Files/Eden_Services/Products/oopbyxyyribmn4u8wyqg.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Energy Efficient Kitchen Appliances</p>
                    <p className="desc">
                      Features energy-efficient refrigerators, smart ovens, and
                      dishwashers that save energy and ...
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
                      <div className="main">20%</div>
                      <div className="sub">Reduce your energy consumption</div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444582/Eden_Files/Eden_Services/Products/hys71a3ugaz5o40jpzqz.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Energy Management</p>
                    <p className="desc">
                      Involves smart plugs and power strips that allow
                      monitoring and remote control of connected...
                    </p>
                    <Link to={`/Services/Products`}>Learn more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Member Carousel */}
        <CircleMemberCarousel />

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
