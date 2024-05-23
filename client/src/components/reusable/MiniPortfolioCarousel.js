import React, { useState } from "react";
import "../../styles/miniPortfolioCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../styles/innovationCarousel.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MiniPortfolioCarousel() {
  const [activeImage, setActiveImage] = useState(0);
  const member_pic =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716428239/Eden_Files/Eden_LandingPage/pqdoe1gcdmd30sjrq9dz.webp";
  const image_1 =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716428239/Eden_Files/Eden_LandingPage/vqzpzhyoglkvgfminw9m.webp";
  const images = [member_pic, image_1, member_pic, image_1, member_pic];
  return (
    <div id="miniPortfolioCarousel" className="miniPortfolioCarousel">
      <div className="image">
        <img src={images[activeImage]} alt="" />
      </div>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={(e) => setActiveImage(e.activeIndex)}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="card">
            <p className="title">Kitchen full of electronic appliances 1</p>
            <p className="list-label">Included</p>
            <div className="list">
              <p className="item">• Modernize Kitchen</p>
              <p className="item">• Electronic Gas stove</p>
              <p className="item">• Top Mounted Sink (Drop-in)</p>
              <p className="item">• Double door Refrigirator</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <p className="title">Kitchen full of electronic appliances 2</p>
            <p className="list-label">Included</p>
            <div className="list">
              <p className="item">• Modernize Kitchen</p>
              <p className="item">• Electronic Gas stove</p>
              <p className="item">• Top Mounted Sink (Drop-in)</p>
              <p className="item">• Double door Refrigirator</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <p className="title">Kitchen full of electronic appliances 3</p>
            <p className="list-label">Included</p>
            <div className="list">
              <p className="item">• Modernize Kitchen</p>
              <p className="item">• Electronic Gas stove</p>
              <p className="item">• Top Mounted Sink (Drop-in)</p>
              <p className="item">• Double door Refrigirator</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <p className="title">Kitchen full of electronic appliances 4</p>
            <p className="list-label">Included</p>
            <div className="list">
              <p className="item">• Modernize Kitchen</p>
              <p className="item">• Electronic Gas stove</p>
              <p className="item">• Top Mounted Sink (Drop-in)</p>
              <p className="item">• Double door Refrigirator</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <p className="title">Kitchen full of electronic appliances 5</p>
            <p className="list-label">Included</p>
            <div className="list">
              <p className="item">• Modernize Kitchen</p>
              <p className="item">• Electronic Gas stove</p>
              <p className="item">• Top Mounted Sink (Drop-in)</p>
              <p className="item">• Double door Refrigirator</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MiniPortfolioCarousel;
