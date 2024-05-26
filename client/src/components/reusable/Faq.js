import React, { useState } from "react";
import "../../styles/faq.css";
import { IoRemove, IoAdd } from "react-icons/io5";

function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const openFaq = (faqNumber) => {
    if (faqNumber === activeQuestion) {
      setActiveQuestion(0);
    } else {
      setActiveQuestion(faqNumber);
    }
  };
  return (
    <div id="faq" className="faq">
      <p className="title">Frequently Asked Questions</p>
      <div className="faq-flex">
        <div className="faq-group">
          <div
            className={`grid-item ${activeQuestion === 1 ? "active" : ""}`}
            onClick={() => openFaq(1)}
          >
            <div className="title">
              <p>What services does your company offer?</p>
              <div className="icon">
                <IoAdd />
              </div>
            </div>
            <div className="explanation">
              We offer a wide range of home appliance maintenance and repair
              services, including installation, troubleshooting, and preventive
              maintenance for various household appliances.
            </div>
          </div>
          <div
            className={`grid-item ${activeQuestion === 2 ? "active" : ""}`}
            onClick={() => openFaq(2)}
          >
            <div className="title">
              <p>What services does your company offer?</p>
              <div className="icon">
                <IoAdd />
              </div>
            </div>
            <div className="explanation">
              We offer a wide range of home appliance maintenance and repair
              services, including installation, troubleshooting, and preventive
              maintenance for various household appliances.
            </div>
          </div>
          <div
            className={`grid-item ${activeQuestion === 3 ? "active" : ""}`}
            onClick={() => openFaq(3)}
          >
            <div className="title">
              <p>What services does your company offer?</p>
              <div className="icon">
                <IoAdd />
              </div>
            </div>
            <div className="explanation">
              We offer a wide range of home appliance maintenance and repair
              services, including installation, troubleshooting, and preventive
              maintenance for various household appliances.
            </div>
          </div>
        </div>
        <div className="faq-group">
          <div
            className={`grid-item ${activeQuestion === 4 ? "active" : ""}`}
            onClick={() => openFaq(4)}
          >
            <div className="title">
              <p>What services does your company offer?</p>
              <div className="icon">
                <IoAdd />
              </div>
            </div>
            <div className="explanation">
              We offer a wide range of home appliance maintenance and repair
              services, including installation, troubleshooting, and preventive
              maintenance for various household appliances.
            </div>
          </div>
          <div
            className={`grid-item ${activeQuestion === 5 ? "active" : ""}`}
            onClick={() => openFaq(5)}
          >
            <div className="title">
              <p>What services does your company offer?</p>
              <div className="icon">
                <IoAdd />
              </div>
            </div>
            <div className="explanation">
              We offer a wide range of home appliance maintenance and repair
              services, including installation, troubleshooting, and preventive
              maintenance for various household appliances.
            </div>
          </div>
          <div
            className={`grid-item ${activeQuestion === 6 ? "active" : ""}`}
            onClick={() => openFaq(6)}
          >
            <div className="title">
              <p>What services does your company offer?</p>
              <div className="icon">
                <IoAdd />
              </div>
            </div>
            <div className="explanation">
              We offer a wide range of home appliance maintenance and repair
              services, including installation, troubleshooting, and preventive
              maintenance for various household appliances.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
