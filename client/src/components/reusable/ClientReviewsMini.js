import React from "react";
import "../../styles/clientReviewsMini.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ClientReviewsMini() {
  return (
    <div id="clientReviewsMini" className="clientReviewsMini">
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          1060: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          280: {
            slidesPerView: 1,
          },
        }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="card">
            <div className="client-details">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
              <p className="name">William Beliles</p>
            </div>
            <p className="review">
              The team was professional and efficient. They transformed my home
              with their maintenance solutions, and I couldn't be happier with
              the results!
            </p>
            <p className="date">April 15, 2024</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="client-details">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
              <p className="name">William Beliles</p>
            </div>
            <p className="review">
              The team was professional and efficient. They transformed my home
              with their maintenance solutions, and I couldn't be happier with
              the results!
            </p>
            <p className="date">April 15, 2024</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="client-details">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
              <p className="name">William Beliles</p>
            </div>
            <p className="review">
              The team was professional and efficient. They transformed my home
              with their maintenance solutions, and I couldn't be happier with
              the results!
            </p>
            <p className="date">April 15, 2024</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="client-details">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
              <p className="name">William Beliles</p>
            </div>
            <p className="review">
              The team was professional and efficient. They transformed my home
              with their maintenance solutions, and I couldn't be happier with
              the results!
            </p>
            <p className="date">April 15, 2024</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="client-details">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
              <p className="name">William Beliles</p>
            </div>
            <p className="review">
              The team was professional and efficient. They transformed my home
              with their maintenance solutions, and I couldn't be happier with
              the results!
            </p>
            <p className="date">April 15, 2024</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="client-details">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
              <p className="name">William Beliles</p>
            </div>
            <p className="review">
              The team was professional and efficient. They transformed my home
              with their maintenance solutions, and I couldn't be happier with
              the results!
            </p>
            <p className="date">April 15, 2024</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ClientReviewsMini;
