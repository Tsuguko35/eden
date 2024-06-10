import React, { useRef, useState } from "react";
import "../../styles/quoteForm.css";
import emailjs from "emailjs-com";
import LoadingDot from "../../assets/svg/LoadingDot";

function QuoteForm() {
  const form = useRef();
  const [submit, setSubmit] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    home_address: "",
    city: "",
    state: "",
    postal_code: "",
    client_name: "",
    client_email: "",
    client_contact: "",
    client_address: "",
    client_service: "",
    client_message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmit(true);
    emailjs
      .sendForm(
        "service_53m9irt",
        "template_mvhgvbl",
        form.current,
        "WoGf1WNfMJ8EmmN6d"
      )
      .then(
        () => {
          setSubmit(false);
          setSubmitStatus("success");
          setFormData({
            first_name: "",
            last_name: "",
            home_address: "",
            city: "",
            state: "",
            postal_code: "",
            client_name: "",
            client_email: "",
            client_contact: "",
            client_address: "",
            client_property: "",
            client_message: "",
          });
          console.log("SUCCESS!");
        },
        (error) => {
          setSubmit(false);
          setSubmitStatus("error");
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} id="quoteForm" className="quoteForm">
      <input
        type="text"
        value={`${formData.first_name} ${formData.last_name}`}
        name="client_name"
        style={{ display: "none" }}
      />
      <input
        type="text"
        value={`${formData.home_address}, ${formData.city}, ${formData.state}, ${formData.postal_code}`}
        name="client_address"
        style={{ display: "none" }}
      />
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
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="custom-input">
            <p className="label">Last Name</p>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group two">
          <div className="custom-input">
            <p className="label">Email Address</p>
            <input
              type="text"
              name="client_email"
              value={formData.client_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="custom-input">
            <p className="label">Phone Number</p>
            <input
              type="number"
              name="client_contact"
              value={formData.client_contact}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="custom-input">
            <p className="label">Home Address</p>
            <input
              type="text"
              name="home_address"
              value={formData.home_address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group three">
          <div className="custom-input">
            <p className="label">City</p>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="custom-input">
            <p className="label">State/Region</p>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="custom-input">
            <p className="label">Postal Code</p>
            <input
              type="text"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="custom-select">
            <p className="label">Selected Service</p>
            <select
              name="client_service"
              value={formData.client_service}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Blow-In Insulation">Blow-In Insulation</option>
              <option value="LED Bulbs">LED Bulbs</option>
              <option value="ECOSTella">ECOSTella</option>
              <option value="HVAC Tune Up">HVAC Tune Up</option>
              <option value="UVC Lights">UVC Lights</option>
              <option value="Aeroseal">Aeroseal</option>
              <option value="HVAC Replacement">HVAC Replacement</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <div className="custom-texarea">
            <p className="label">Message (Optional)</p>
            <textarea
              name="client_message"
              value={formData.client_message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="submit-area">
          {submitStatus === "success" && (
            <p className="success">Message sent!</p>
          )}
          {submitStatus === "error" && (
            <p className="error">Error! Try again.</p>
          )}
          <button type="submit">
            {submit ? <LoadingDot width={35} height={35} /> : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default QuoteForm;
