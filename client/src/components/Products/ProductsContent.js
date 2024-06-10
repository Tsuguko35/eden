import React, { useContext, useState } from "react";
import "../../styles/productsContent.css";
import { Link } from "react-router-dom";
import { ServicesQuotation } from "../../context";
import { services } from "../../utils";

function ProductsContent() {
  const { quotedServices, setQuotedServices } = useContext(ServicesQuotation);
  const [activeCategory, setActiveCategory] = useState("LED Bulb");
  const services_array = services;

  const addService = (service) => {
    const currentServices = quotedServices;

    const updatedServices = [...currentServices, service];

    setQuotedServices(updatedServices);
  };
  return (
    <div id="productsContent" className="productsContent">
      <div className="wrapper">
        <div className="title">
          <p>Our Lighting Product</p>

          <Link className="review-selection">
            <p className="badge">{quotedServices.length}</p>
            <p>Review selection</p>
          </Link>
        </div>
        <p className="desc">
          Cultivate the perfect light for every moment. Our lighting solutions
          go beyond illumination, offering the ability to adjust color,
          brightness, and even spectrums to match your needs. Integrate
          seamlessly with your smart home for a truly personalized lighting
          experience.
        </p>

        <div className="categories-container">
          <p
            className={`category ${
              activeCategory === "LED Bulb" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("LED Bulb")}
          >
            LED Bulb
          </p>
          <p
            className={`category ${
              activeCategory === "Blown-in Insulation" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("Blown-in Insulation")}
          >
            Blown-in Insulation
          </p>
          <p
            className={`category ${
              activeCategory === "HVAC Services" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("HVAC Services")}
          >
            HVAC Services
          </p>
          <p
            className={`category ${
              activeCategory === "UVC Light Service" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("UVC Light Service")}
          >
            UVC Light Service
          </p>
          <p
            className={`category ${
              activeCategory === "Ecostella" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("Ecostella")}
          >
            Ecostella
          </p>
        </div>

        <div className="product-grid">
          {services_array &&
            services_array
              .filter((services) => services.category === activeCategory)
              .map((service) => (
                <div className="product">
                  <div className="product-tag new">New</div>
                  <div className="image">
                    <img
                      src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                      alt="product 1"
                    />
                  </div>
                  <div className="product-detials">
                    <p className="name">{service.name}</p>
                    <p className="label">{service.sub}</p>
                    <button
                      onClick={() => addService(service.name)}
                      disabled={quotedServices.includes(service.name)}
                    >
                      Add to Quotation
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsContent;
