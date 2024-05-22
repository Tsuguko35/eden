import React, { useState } from "react";
import "../../styles/miniPortfolioCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "../../styles/innovationCarousel.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import member_pic from "../../assets/images/LandingPage/memberPic.svg";
import image_1 from "../../assets/images/LandingPage/innovationImage1.svg";

function MiniPortfolioCarousel() {
  const [activeImage, setActiveImage] = useState(0);
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
        onSlideChange={(e) => console.log(e)}
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
