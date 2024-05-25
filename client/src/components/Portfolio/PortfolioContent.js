import React from "react";
import "../../styles/portfolioContent.css";
import PortfolioGrid from "./PortfolioGrid";

function PortfolioContent() {
  return (
    <div id="portfolioContent" className="portfolioContent">
      <div className="wrapper">
        <div className="achievements">
          <p className="title">Our Achievements</p>
          <p className="desc">
            Explore our milestones and accomplishments, showcasing our
            dedication to excellence in home maintenance and appliance services.
          </p>
          <div className="achievement-values">
            <div className="achievement">
              <p className="amount">20+</p>
              <p className="label">Years of experience</p>
            </div>
            <div className="achievement">
              <p className="amount">150+</p>
              <p className="label">Homes We Proudly Serve</p>
            </div>
            <div className="achievement">
              <p className="amount">10k+</p>
              <p className="label">Projects Done</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <PortfolioGrid />

      <div className="wrapper">
        <div className="achievements">
          <p className="title">
            Exceptional User Experience: Our Statistic Showcase
          </p>
          <p className="desc">
            Explore our commitment to excellence through real data. Our
            statistics highlight the exceptional user experience enjoyed by our
            clients, showcasing our dedication to quality in every service.
          </p>
          <div className="skills-grid">
            <div className="skill">
              <span className="skill-name">Service Quality</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "90%" }}></div>
                </div>
                <span className="percentage">90%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Customer Satisfaction</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "98%" }}></div>
                </div>
                <span className="percentage">98%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Service Response Time</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
                <span className="percentage">80%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Technical Expertise</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "95%" }}></div>
                </div>
                <span className="percentage">95%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Response Time</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "75%" }}></div>
                </div>
                <span className="percentage">75%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Service Reliability</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "90%" }}></div>
                </div>
                <span className="percentage">90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioContent;
