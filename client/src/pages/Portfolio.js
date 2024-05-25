import React from "react";
import { Footer, PortfolioContent, PortfolioHeader } from "../components";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      {/* Header */}
      <PortfolioHeader />

      {/* Content */}
      <PortfolioContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Portfolio;
