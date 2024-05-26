import React from "react";
import "../../styles/contactUsContent.css";

import * as Io5Icons from "react-icons/io5";
import { Link } from "react-router-dom";
import Faq from "../reusable/Faq";

function ContactUsContent() {
  return (
    <div id="contactUsContent" className="contactUsContent">
      <div className="wrapper">
        <div className="contact-us-container">
          <div className="form">
            <p className="label">Get in touch</p>
            <p className="title">We’re Here to Help - Contact Us Today</p>
            <p className="desc">
              Whether you have a question, need assistance, or want to provide
              feedback, our team is ready to help. Reach out to us and we'll get
              back to you as soon as possible.
            </p>
            <form>
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

                <div className="input-group">
                  <div className="custom-input">
                    <p className="label">Email Address</p>
                    <input type="email" required />
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
          </div>
          <div className="contact-detials">
            <div className="container">
              <p className="label">
                Questions, comments, or suggestions? Simply fill in the form and
                we’ll be in touch shortly.
              </p>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.406914095329!2d-95.76746232362501!3d39.00603024028634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bee2d16de2d2ad%3A0x46f51d83b9c4f947!2s6028%20Stonybrook%20Ct%2C%20Topeka%2C%20KS%2066614%2C%20USA!5e0!3m2!1sen!2sph!4v1716688795805!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="contact-details">
                <div className="detail">
                  <Io5Icons.IoLocationSharp />
                  <p>6028 Stonybook CT, Topeka, KS 66614</p>
                </div>
                <div className="detail">
                  <Io5Icons.IoCall />
                  <p>913-228-4495</p>
                </div>
                <div className="detail">
                  <Io5Icons.IoMailSharp />
                  <p>info@gogenesissolar.com</p>
                </div>
              </div>
              <div className="social-icons">
                <Link>
                  <Io5Icons.IoLogoFacebook />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Faq */}
        <Faq />
      </div>
    </div>
  );
}

export default ContactUsContent;
