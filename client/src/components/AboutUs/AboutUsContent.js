import React from "react";
import "../../styles/aboutUsContent.css";

import * as Io5Icons from "react-icons/io5";
import ClientReviewsBig from "../reusable/ClientReviewsBig";

function AboutUsContent() {
  return (
    <div id="aboutUsContent" className="aboutUsContent">
      <div className="wrapper">
        <div className="about-details">
          <div className="details-container">
            <div className="details">
              <div className="label">Who we are as a company</div>
              <div className="title">
                We Provide Great Solution For Great Americans
              </div>
              <div className="desc">
                At EDEN Home Solution, we are dedicated to transforming houses
                into homes through innovative, high-quality solutions. With a
                commitment to excellence, we offer a comprehensive range of
                services designed to enhance the comfort, beauty, and
                functionality of your living spaces. Our team of experienced
                professionals is passionate about providing personalized
                solutions that meet your unique needs and exceed your
                expectations. Whether you're looking to renovate, upgrade, or
                completely redesign your home, we are here to help you create
                the perfect sanctuary that reflects your style and vision. Trust
                us to be your partner in building a better, smarter, and more
                beautiful home.
              </div>
            </div>
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716677807/Eden_Files/Eden_About/ibigwqhuoucwwr9d3ifv.webp"
                alt="content 1"
              />
            </div>
          </div>
        </div>

        <div className="about-details member inverted">
          <div className="details-container">
            <div className="details">
              <div className="title">William Beliles</div>
              <div className="label">Chief Executive Officer</div>

              <div className="desc">
                Meet William Beliles, our visionary CEO leading Genesis Solar
                Power with a profound dedication to innovative and sustainable
                energy solutions. His strategic vision drives our company to the
                forefront of the solar energy industry, inspiring us to
                revolutionize the energy landscape and deliver exceptional solar
                power services to our customers
              </div>
            </div>
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716677807/Eden_Files/Eden_About/g8dfp0tl2xojq3tyk32k.webp"
                alt="william beliles"
              />
            </div>
          </div>
        </div>

        <div className="about-details member">
          <div className="details-container">
            <div className="details">
              <div className="title">Amanda Beliles</div>
              <div className="label">President</div>

              <div className="desc">
                Meet Amanda Beliles, a passionate nurse for 12 years, a
                dedicated mom to four girls, and a wife and business partner,
                She finds a fulfillment in merging her role. She engage with the
                community as a PTO board member at her daughters' school and
                delve into solar energy beyond healthcare. Witnessing solar's
                impact on savings in administration, She embraced both roles for
                their flexibility. Her goal is conserve energy for a better
                Earth and guide others on their solar journey.
              </div>
            </div>
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716677807/Eden_Files/Eden_About/kcnspnlitqdmk6sbz5yf.webp"
                alt="amanda beliles"
              />
            </div>
          </div>
        </div>

        <div className="about-details member inverted">
          <div className="details-container">
            <div className="details">
              <div className="title">Bill Hicks</div>
              <div className="label">Vice President of Dealer Relations</div>

              <div className="desc">
                Meet William Beliles, our visionary CEO leading Genesis Solar
                Power with a profound dedication to innovative and sustainable
                energy solutions. His strategic vision drives our company to the
                forefront of the solar energy industry, inspiring us to
                revolutionize the energy landscape and deliver exceptional solar
                power services to our customers
              </div>
            </div>
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716677807/Eden_Files/Eden_About/vaemrrrnalowmzzqpxmu.webp"
                alt="bill hicks"
              />
            </div>
          </div>
        </div>

        <div className="hero">
          <div className="background"></div>
          <div className="hero-content">
            <div className="title">
              <p>
                JOIN THE BEST{" "}
                <span style={{ color: "#F0C869", fontWeight: "bold" }}>
                  HOME SOLUTION
                </span>
              </p>
              <p>Transforming Your Living Spaces to its finest</p>
            </div>
            <p className="desc">
              Join the Best Home Solution is a comprehensive home services
              company dedicated to enhancing your living spaces. From renovation
              projects to interior design consultations, we offer tailored
              solutions to meet your unique needs. Our team of experts is
              committed to delivering top-notch services, ensuring that your
              home reflects your style and functionality preferences. Experience
              excellence in every detail with Join the Best Home Solution.
            </p>
            <div className="why-us-container">
              <div className="why-us">
                <p className="title">Why us?</p>
                <div className="list">
                  <div className="item">
                    <Io5Icons.IoCheckmarkCircle />
                    <p>
                      <span className="highlight">Expertise:</span> Our team
                      brings years of industry experience and specialized skills
                      to every project.
                    </p>
                  </div>
                  <div className="item">
                    <Io5Icons.IoCheckmarkCircle />
                    <p>
                      <span className="highlight">Quality:</span> We prioritize
                      quality craftsmanship and materials to ensure lasting
                      results.
                    </p>
                  </div>
                  <div className="item">
                    <Io5Icons.IoCheckmarkCircle />
                    <p>
                      <span className="highlight">Customization:</span> Tailored
                      solutions that align with your unique vision and needs.
                    </p>
                  </div>
                  <div className="item">
                    <Io5Icons.IoCheckmarkCircle />
                    <p>
                      <span className="highlight">Reliability:</span> Timely
                      project completion and consistent communication throughout
                      the process.
                    </p>
                  </div>
                  <div className="item">
                    <Io5Icons.IoCheckmarkCircle />
                    <p>
                      <span className="highlight">Innovation:</span>{" "}
                      Incorporating the latest trends and technologies to
                      enhance your home solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Reviews */}
        <ClientReviewsBig />
      </div>
    </div>
  );
}

export default AboutUsContent;