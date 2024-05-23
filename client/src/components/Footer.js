import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="wrapper">
        <div className="logo">
          <img
            src={
              "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716425911/Eden_Files/d4bfdzjjfxte451baran.webp"
            }
            alt="Eden Logo"
          />
        </div>
        <div className="footer-content">
          <div className="contacts">
            <p className="title">Reach us</p>
            <div className="contact-group">
              <BiIcons.BiSolidPhoneCall />
              <p className="info">913-228-4495</p>
            </div>
            <div className="contact-group">
              <RiIcons.RiMailFill />
              <p className="info">info@gogenesissolar.com</p>
            </div>
            <div className="contact-group">
              <MdIcons.MdLocationOn />
              <p className="info">6028 Stonybook CT, Topeka, KS 66614</p>
            </div>
          </div>
          <div className="nav-container">
            <div className="nav-list">
              <p className="title">Company</p>
              <Link>About</Link>
              <Link>Contact</Link>
              <Link>Blogs</Link>
            </div>
            <div className="nav-list">
              <p className="title">Legal</p>
              <Link>Privacy Policy</Link>
              <Link>Terms & Services</Link>
              <Link>Terms of Use</Link>
              <Link>Refund Policy</Link>
            </div>
            <div className="nav-list">
              <p className="title">Quick Links</p>
              <Link>Eden Community</Link>
              <Link>Downloads</Link>
              <Link>Forum</Link>
            </div>
          </div>
          <div className="news-letter-container">
            <div className="news-letter">
              <div className="title">
                <p>Join Our</p>
                <p>Newsletter</p>
              </div>
              <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </div>
              </form>
              <p className="note">
                * Will send you weekly updates for your better tool management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
