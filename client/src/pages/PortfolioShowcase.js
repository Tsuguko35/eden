import React from "react";
import { Footer, PortfolioShowcaseContent } from "../components";

function PortfolioShowcase() {
  return (
    <div id="portfolioShowcase" className="portfolioShowcase">
      {/* Content */}
      <PortfolioShowcaseContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default PortfolioShowcase;
