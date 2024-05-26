import React from "react";
import "../../styles/clientReviewsBig.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function ClientReviewsBig() {
  return (
    <div id="clientReviewsBig" className="clientReviewsBig">
      <div className="title">
        <p>Clients Testimonials</p>
        <p>What Our Clients Say?</p>
      </div>
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        loop={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
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
            <div className="client-detials">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
              <div className="details">
                <p className="name">William Beliles</p>
                <p className="location">California, USA</p>
              </div>
            </div>
            <p className="review">
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been scrambled it to make a type book.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="client-detials">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
              <div className="details">
                <p className="name">William Beliles</p>
                <p className="location">California, USA</p>
              </div>
            </div>
            <p className="review">
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been scrambled it to make a type book.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="client-detials">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
              <div className="details">
                <p className="name">William Beliles</p>
                <p className="location">California, USA</p>
              </div>
            </div>
            <p className="review">
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been scrambled it to make a type book.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="client-detials">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
              <div className="details">
                <p className="name">William Beliles</p>
                <p className="location">California, USA</p>
              </div>
            </div>
            <p className="review">
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been scrambled it to make a type book.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="client-detials">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
              <div className="details">
                <p className="name">William Beliles</p>
                <p className="location">California, USA</p>
              </div>
            </div>
            <p className="review">
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been scrambled it to make a type book.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="client-detials">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
              <div className="details">
                <p className="name">William Beliles</p>
                <p className="location">California, USA</p>
              </div>
            </div>
            <p className="review">
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been scrambled it to make a type book.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ClientReviewsBig;
