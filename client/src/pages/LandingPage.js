import React from "react";
import { Footer, LandingPageContent, LandingPageHeader } from "../components";

function LandingPage() {
  return (
    <div id="landingPage" className="landingPage">
      {/* Header */}
      <LandingPageHeader />

      {/* Content */}
      <LandingPageContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
