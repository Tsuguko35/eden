import React from "react";
import "../../styles/membersCarousel.css";

import member_pic from "../../assets/images/LandingPage/memberPic.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "../../styles/innovationCarousel.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MembersCarousel() {
  return (
    <div id="membersCarousel" className="membersCarousel">
      <div className="wrapper">
        <div className="header">
          <p className="label">MEET OUR MEMBERS</p>
          <p className="title">The Faces of Excellence</p>
        </div>
        <div className="carousel">
          <div className="text-content">
            <p className="name">Name of Person</p>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
          <div className="carousel-swiper">
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              loop={true}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={{ clickable: true }}
              className="swiper-container"
            >
              <SwiperSlide>
                <img src={member_pic} alt="" className="card-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={member_pic} alt="" className="card-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={member_pic} alt="" className="card-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={member_pic} alt="" className="card-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={member_pic} alt="" className="card-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={member_pic} alt="" className="card-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={member_pic} alt="" className="card-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={member_pic} alt="" className="card-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={member_pic} alt="" className="card-image" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembersCarousel;
