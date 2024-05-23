import React from "react";
import "../../styles/servicesContent.css";

import * as SiIcons from "react-icons/si";
import CircleMemberCarousel from "../reusable/CircleMemberCarousel";

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
          <div className="product-showcase-content">
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
                    <button>Learn more</button>
                  </div>
                </div>
              </div>
              <div className="product-container">
                <div className="product">
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
                    <button>Learn more</button>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
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
                    <button>Learn more</button>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
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
                    <button>Learn more</button>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
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
                    <button>Learn more</button>
                  </div>
                </div>
              </div>

              <div className="product-container">
                <div className="product">
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
                    <button>Learn more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Member Carousel */}
        <CircleMemberCarousel />
      </div>
    </div>
  );
}

export default ServicesContent;
