import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import image_1 from "../../assets/images/LandingPage/innovationImage1.svg";

import "../../styles/innovationCarousel.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function InnovationCarousel() {
  return (
    <div id="innovationCarousel" className="innovationCarousel">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="card">
            <img src={image_1} alt="" />
            <div className="text-content">
              <p className="title">Smart Home Integration</p>
              <div className="bullets">
                <p className="bullet">• Home automation systems</p>
                <p className="bullet">• Smart lighting and climate control</p>
                <p className="bullet">• Security and surveillance solutions</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={image_1} alt="" />
            <div className="text-content">
              <p className="title">Smart Home Integration</p>
              <div className="bullets">
                <p className="bullet">• Home automation systems</p>
                <p className="bullet">• Smart lighting and climate control</p>
                <p className="bullet">• Security and surveillance solutions</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={image_1} alt="" />
            <div className="text-content">
              <p className="title">Smart Home Integration</p>
              <div className="bullets">
                <p className="bullet">• Home automation systems</p>
                <p className="bullet">• Smart lighting and climate control</p>
                <p className="bullet">• Security and surveillance solutions</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={image_1} alt="" />
            <div className="text-content">
              <p className="title">Smart Home Integration</p>
              <div className="bullets">
                <p className="bullet">• Home automation systems</p>
                <p className="bullet">• Smart lighting and climate control</p>
                <p className="bullet">• Security and surveillance solutions</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default InnovationCarousel;
