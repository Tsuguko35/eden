import React from "react";
import { Footer, ServicesContent, ServicesHeader } from "../components";

function Services() {
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
