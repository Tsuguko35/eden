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
              <div className="title">
                <p className="main">PRODUCT & SERVICES</p>
                <p className="sub">
                  We offer a range of packages to choose from
                </p>
              </div>

              <div className="service-details">
                <div className="detail">
                  <div className="icon">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718925457/Eden_Files/Eden_Services/Icons/y2rzpdqfa3yhhokry1r1.webp"
                      alt=""
                    />
                    <p className="title">Eden Essentials</p>
                  </div>
                  <div className="bullets">
                    <ul>
                      <li>Variable Fan Timing</li>
                      <li>Intelligent Compressor Cycling</li>
                      <li>Variable Fan Speed</li>
                      <li>Full System Diagnosis</li>
                      <li>Increase in Home Value of 5%</li>
                      <li>Guaranteed 15-20% Offset in Energy</li>
                      <li>Lifetime Warranties on Prime and APC</li>
                    </ul>
                  </div>
                </div>
                <div className="detail">
                  <div className="icon">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718925457/Eden_Files/Eden_Services/Icons/ou9wzgsj5xgruz4t83ph.webp"
                      alt=""
                    />
                    <p className="title">Eden Pro</p>
                  </div>
                  <div className="bullets">
                    <ul>
                      <li>Variable Fan Timing</li>
                      <li>Intelligent Compressor Cycling</li>
                      <li>Variable Fan Speed</li>
                      <li>Full System Diagnosis</li>
                      <li>Increase in Home Value of 5%</li>
                      <li>Guaranteed 15-20% Offset in Energy</li>
                      <li>Lifetime Warranties on Prime and APC</li>
                      <li>Anti-Oil Fouling</li>
                      <li>Whole Home Energy Monitoring</li>
                    </ul>
                  </div>
                </div>
                <div className="detail">
                  <div className="icon">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718925457/Eden_Files/Eden_Services/Icons/ahvn8gjbrcmnp6nghnqx.webp"
                      alt=""
                    />
                    <p className="title">Eden Elite</p>
                  </div>
                  <div className="bullets">
                    <ul>
                      <li>Variable Fan Timing</li>
                      <li>Intelligent Compressor Cycling</li>
                      <li>Variable Fan Speed</li>
                      <li>Full System Diagnosis</li>
                      <li>Increase in Home Value of 5%</li>
                      <li>Guaranteed 23-35% Offset in Energy</li>
                      <li>Anti-Oil Fouling</li>
                      <li>Whole Home Energy Monitoring</li>
                      <li>Seal Ductwork</li>
                      <li>Indoor Air Quality</li>
                    </ul>
                  </div>
                </div>
                <div className="detail">
                  <div className="icon">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718925457/Eden_Files/Eden_Services/Icons/xjlcpu3taxgk1xovxqxz.webp"
                      alt=""
                    />
                    <p className="title">Eden Power</p>
                  </div>
                  <div className="bullets">
                    <ul>
                      <li>Variable Fan Timing</li>
                      <li>Intelligent Compressor Cycling</li>
                      <li>Variable Fan Speed</li>
                      <li>Full System Diagnosis</li>
                      <li>Increase in Home Value of 5%</li>
                      <li>Guaranteed 23-35% Offset in Energy</li>
                      <li>Anti-Oil Fouling and System Protection</li>
                      <li>Lifetime Warranties on Prime, APC, and SynCat360</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-grid">
              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">15-20%</div>
                      <div className="sub">Total blended energy offset</div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718927536/Eden_Files/Eden_Services/Icons/obcweyfptddqvz8e82we.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Level 1 Package ESSENTIALS</p>
                    <p className="desc">
                      insulation that is installed by blowing it into attics,
                      walls, and other cavities. It is made of tiny particles of
                    </p>
                    <Link to={`/Services/Products`}>View Service</Link>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">20-25%</div>
                      <div className="sub">Total blended energy offset</div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718927511/Eden_Files/Eden_Services/Icons/l3dfuzxzp30xtghwc9qq.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Level 2 Package PRO</p>
                    <p className="desc">
                      LED's are far more energy-efficient than traditional
                      incandescent bulbs and fluorescent bulbs
                    </p>
                    <Link to={`/Services/Products`}>View Service</Link>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">25-35%</div>
                      <div className="sub">Total blended energy offset</div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718927511/Eden_Files/Eden_Services/Icons/zqkzlmmjvdi94qksrb64.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">Level 3 Package ELITE</p>
                    <p className="desc">
                      UVC light technology offers a proven weapon in the fight
                      against germs. Our UVC Disinfection Solutions
                    </p>
                    <Link to={`/Services/Products`}>View Service</Link>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
                  <div className="product-tag">
                    <div className="background"></div>
                    <div className="text-content">
                      <div className="main">20-25%</div>
                      <div className="sub">Total blended energy offset</div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718927512/Eden_Files/Eden_Services/Icons/i8eq5csf2il3ittvyxvw.webp"
                      alt="product"
                    />
                  </div>
                  <div className="text-content">
                    <p className="title">POWER PACK</p>
                    <p className="desc">
                      Ecostella is a device designed to improve the efficiency
                      of your existing HVAC system, specifically
                    </p>
                    <Link to={`/Services/Products`}>View Service</Link>
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
