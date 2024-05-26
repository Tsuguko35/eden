import React from "react";
import { AboutUsContent, AboutUsHeader, Footer } from "../components";

function AboutUs() {
  return (
    <div id="aboutUs" className="aboutUs">
      {/* Header */}
      <AboutUsHeader />

      {/* Content */}
      <AboutUsContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutUs;
