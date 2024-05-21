import React from "react";
import { LandingPageContent, LandingPageHeader } from "../components";

function LandingPage() {
  return (
    <div id="landingPage" className="landingPage">
      {/* Header */}
      <LandingPageHeader />

      {/* Content */}
      <LandingPageContent />
    </div>
  );
}

export default LandingPage;
