import React, { useEffect } from "react";
import { Footer, ServicesContent, ServicesHeader } from "../components";
import { useLocation } from "react-router-dom";

function Services() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <div id="services" className="services">
      {/* Header */}
      <ServicesHeader />

      {/* Content */}
      <ServicesContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Services;
