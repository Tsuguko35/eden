import React from "react";
import "../../styles/quoteForm.css";

function QuoteForm() {
  return (
    <form id="quoteForm" className="quoteForm">
      <div className="text-content">
        <p className="label">Request for Quotation</p>
        <p className="desc">
          Need an estimate for your home maintenance or repair project? Fill out
          the form below with details of the services you require, and we'll
          provide you with a comprehensive quote promptly.
        </p>
      </div>
      <div className="inputs">
        <div className="input-group two">
          <div className="custom-input">
            <p className="label">First Name</p>
            <input type="text" required />
          </div>
          <div className="custom-input">
            <p className="label">Last Name</p>
            <input type="text" required />
          </div>
        </div>

        <div className="input-group two">
          <div className="custom-input">
            <p className="label">Email Address</p>
            <input type="text" required />
          </div>
          <div className="custom-input">
            <p className="label">Phone Number</p>
            <input type="text" required />
          </div>
        </div>

        <div className="input-group">
          <div className="custom-input">
            <p className="label">Home Address</p>
            <input type="text" required />
          </div>
        </div>

        <div className="input-group three">
          <div className="custom-input">
            <p className="label">City</p>
            <input type="text" required />
          </div>
          <div className="custom-input">
            <p className="label">State/Region</p>
            <input type="text" required />
          </div>
          <div className="custom-input">
            <p className="label">Postal Code</p>
            <input type="text" required />
          </div>
        </div>

        <div className="input-group">
          <div className="custom-select">
            <p className="label">Selected Service</p>
            <select value={""}></select>
          </div>
        </div>

        <div className="input-group">
          <div className="custom-texarea">
            <p className="label">Message (Optional)</p>
            <textarea></textarea>
          </div>
        </div>

        <div className="submit-area">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default QuoteForm;
