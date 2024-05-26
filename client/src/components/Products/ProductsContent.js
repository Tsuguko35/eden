import React from "react";
import "../../styles/productsContent.css";
import { Link } from "react-router-dom";

function ProductsContent() {
  return (
    <div id="productsContent" className="productsContent">
      <div className="wrapper">
        <p className="title">Our Lighting Product</p>
        <p className="desc">
          Cultivate the perfect light for every moment. Our lighting solutions
          go beyond illumination, offering the ability to adjust color,
          brightness, and even spectrums to match your needs. Integrate
          seamlessly with your smart home for a truly personalized lighting
          experience.
        </p>

        <div className="categories-container">
          <p className="category active">Lighting</p>
          <p className="category">Laundry Effiency</p>
          <p className="category">Climate Control</p>
          <p className="category">Home Cleaning</p>
          <p className="category">Kitchen Appliances</p>
          <p className="category">Energy Management</p>
        </div>

        <div className="product-grid">
          <Link to={`/Services/Products/Lamp`} className="product">
            <div className="product-tag new">New</div>
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                alt="product 1"
              />
            </div>
            <div className="product-detials">
              <p className="name">Bed Lampshade</p>
              <p className="label">Night lamp</p>
              <p className="price">$70</p>
            </div>
          </Link>
          <Link to={`/Services/Products/Lamp`} className="product">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                alt="product 1"
              />
            </div>
            <div className="product-detials">
              <p className="name">Bed Lampshade</p>
              <p className="label">Night lamp</p>
              <p className="price">$70</p>
            </div>
          </Link>
          <Link to={`/Services/Products/Lamp`} className="product">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                alt="product 1"
              />
            </div>
            <div className="product-detials">
              <p className="name">Bed Lampshade</p>
              <p className="label">Night lamp</p>
              <p className="price">$70</p>
            </div>
          </Link>
          <Link to={`/Services/Products/Lamp`} className="product">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                alt="product 1"
              />
            </div>
            <div className="product-detials">
              <p className="name">Bed Lampshade</p>
              <p className="label">Night lamp</p>
              <p className="price">$70</p>
            </div>
          </Link>
          <Link to={`/Services/Products/Lamp`} className="product">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                alt="product 1"
              />
            </div>
            <div className="product-detials">
              <p className="name">Bed Lampshade</p>
              <p className="label">Night lamp</p>
              <p className="price">$70</p>
            </div>
          </Link>
          <Link to={`/Services/Products/Lamp`} className="product">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                alt="product 1"
              />
            </div>
            <div className="product-detials">
              <p className="name">Bed Lampshade</p>
              <p className="label">Night lamp</p>
              <p className="price">$70</p>
            </div>
          </Link>
          <Link to={`/Services/Products/Lamp`} className="product">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                alt="product 1"
              />
            </div>
            <div className="product-detials">
              <p className="name">Bed Lampshade</p>
              <p className="label">Night lamp</p>
              <p className="price">$70</p>
            </div>
          </Link>
          <Link to={`/Services/Products/Lamp`} className="product">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716444581/Eden_Files/Eden_Services/Products/kty8aodab7mrpn8b6dgz.webp"
                alt="product 1"
              />
            </div>
            <div className="product-detials">
              <p className="name">Bed Lampshade</p>
              <p className="label">Night lamp</p>
              <p className="price">$70</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsContent;
