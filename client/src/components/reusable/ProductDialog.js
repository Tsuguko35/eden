import React, { useEffect, useRef, useState } from "react";
import "../../styles/productDialog.css";
import "locomotive-scroll/locomotive-scroll.css";

import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function ProductDialog({ show, setShow, product }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      function handleClickOutside(event) {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target)
        ) {
          console.log(true);
          setShow(false);
        }
      }

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return (
    <div id="productDialog" className={`productDialog ${show ? "show" : ""}`}>
      <div ref={containerRef} className="container">
        <header className="header">
          <div className="title">
            <p className="label">LEVEL 1 PACKAGE (Essentials)</p>
            <p className="main">EDEN PRIME</p>
            <p className="label">
              24v HVAC Fan/Compressor Optimization Controller
            </p>
          </div>
          <div className="action">
            <IoMdClose onClick={() => setShow(false)} />
          </div>
        </header>
        <div className="content ignore-scroll">
          <div className="service-details">
            <ul>
              <li>Variable Fan Timing Mechanism</li>
              <li>Compressor Cycling Function</li>
              <li>10% Total Offset</li>
              <li>BPI Certified</li>
              <li>Lifetime Warranty</li>
            </ul>
            <Link onClick={() => setShow(false)} to={"/Services#_getQuote"}>
              Get Quotation
            </Link>
          </div>
          <div className="service-images">
            <img
              src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719012363/Eden_Files/Eden_Services/hrye4trb9ivdrurgbx8o.webp"
              alt=""
            />
          </div>
        </div>
        <footer>
          <div className="certification">
            <img
              src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719011780/Eden_Files/Eden_Services/wfajmbzfnbbywdjswyk3.webp"
              alt=""
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ProductDialog;
