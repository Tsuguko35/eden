import React from "react";
import "../../styles/dealerTestimonyCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function DealerTestimonyCarousel() {
  return (
    <div id="dealerTestimonyCarousel" className="dealerTestimonyCarousel">
      <p className="title">Testimonials from our dealers</p>
      <p className="label">
        Discover the power of our partnerships through the experiences of our
        successful dealers.
      </p>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
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
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
            </div>
            <div className="review">
              <div className="client-details">
                <p className="name">William Beliles</p>
                <p className="role">
                  Regional Director - Suncoast Distributors
                </p>
              </div>
              <p className="review-text">
                "We were impressed with EDEN’s commitment to building strong
                partnerships. Their dedicated account manager ensures we have
                everything we need to succeed, from product knowledge to
                marketing strategies. We're excited to continue this mutually
                beneficial partnership."
              </p>
              <p className="date">April 15, 2024</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
            </div>
            <div className="review">
              <div className="client-details">
                <p className="name">William Beliles</p>
                <p className="role">
                  Regional Director - Suncoast Distributors
                </p>
              </div>
              <p className="review-text">
                "We were impressed with EDEN’s commitment to building strong
                partnerships. Their dedicated account manager ensures we have
                everything we need to succeed, from product knowledge to
                marketing strategies. We're excited to continue this mutually
                beneficial partnership."
              </p>
              <p className="date">April 15, 2024</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
            </div>
            <div className="review">
              <div className="client-details">
                <p className="name">William Beliles</p>
                <p className="role">
                  Regional Director - Suncoast Distributors
                </p>
              </div>
              <p className="review-text">
                "We were impressed with EDEN’s commitment to building strong
                partnerships. Their dedicated account manager ensures we have
                everything we need to succeed, from product knowledge to
                marketing strategies. We're excited to continue this mutually
                beneficial partnership."
              </p>
              <p className="date">April 15, 2024</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
            </div>
            <div className="review">
              <div className="client-details">
                <p className="name">William Beliles</p>
                <p className="role">
                  Regional Director - Suncoast Distributors
                </p>
              </div>
              <p className="review-text">
                "We were impressed with EDEN’s commitment to building strong
                partnerships. Their dedicated account manager ensures we have
                everything we need to succeed, from product knowledge to
                marketing strategies. We're excited to continue this mutually
                beneficial partnership."
              </p>
              <p className="date">April 15, 2024</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
            </div>
            <div className="review">
              <div className="client-details">
                <p className="name">William Beliles</p>
                <p className="role">
                  Regional Director - Suncoast Distributors
                </p>
              </div>
              <p className="review-text">
                "We were impressed with EDEN’s commitment to building strong
                partnerships. Their dedicated account manager ensures we have
                everything we need to succeed, from product knowledge to
                marketing strategies. We're excited to continue this mutually
                beneficial partnership."
              </p>
              <p className="date">April 15, 2024</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423797/Arc_About/fgbo3ben3ohxyep2urhr.webp"
                alt="client profile"
              />
            </div>
            <div className="review">
              <div className="client-details">
                <p className="name">William Beliles</p>
                <p className="role">
                  Regional Director - Suncoast Distributors
                </p>
              </div>
              <p className="review-text">
                "We were impressed with EDEN’s commitment to building strong
                partnerships. Their dedicated account manager ensures we have
                everything we need to succeed, from product knowledge to
                marketing strategies. We're excited to continue this mutually
                beneficial partnership."
              </p>
              <p className="date">April 15, 2024</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default DealerTestimonyCarousel;
