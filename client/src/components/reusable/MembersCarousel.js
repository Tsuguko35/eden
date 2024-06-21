import React, { useState } from "react";
import "../../styles/membersCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "../../styles/innovationCarousel.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MembersCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const member_details = [
    {
      name: "William Beliles",
      desc: "Meet William Beliles, our visionary CEO leading Genesis Solar Power with a profound dedication to innovative and sustainable energy solutions. His strategic vision drives our company to the forefront of the solar energy industry, inspiring us to revolutionize the energy landscape and deliver exceptional solar power services to our customers",
    },
    {
      name: "Amanda Beliles",
      desc: "Meet Amanda Beliles, a passionate nurse for 12 years, a dedicated mom to four girls, and a wife and business partner, She finds a fulfillment in merging her role. She engage with the community as a PTO board member at her daughters' school and delve into solar energy beyond healthcare. Witnessing solar's impact on savings in administration, She embraced both roles for their flexibility. Her goal is conserve energy for a better Earth and guide others on their solar journey.",
    },
    {
      name: "Bill Hicks",
      desc: "Meet William Beliles, our visionary CEO leading Genesis Solar Power with a profound dedication to innovative and sustainable energy solutions. His strategic vision drives our company to the forefront of the solar energy industry, inspiring us to revolutionize the energy landscape and deliver exceptional solar power services to our customersBill Hicks oversees the development and maintenance of strategic partnerships with dealers, ensuring effective communication and mutual growth. He implements innovative strategies to enhance dealer satisfaction and drive business performance, supporting dealers with the tools and resources they need to succeed.",
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
    console.log(swiper);
  };
  return (
    <div id="membersCarousel" className="membersCarousel">
      <div className="wrapper">
        <div className="header">
          <p className="label">MEET OUR MEMBERS</p>
          <p className="title">The Faces of Excellence</p>
        </div>
        <div className="carousel">
          {member_details
            .filter((member, index) => index === activeSlide)
            .map((member) => (
              <div className="text-content" key={member.name}>
                <p className="name">{member.name}</p>
                <p className="desc">{member.desc}</p>
              </div>
            ))}

          <div className="carousel-swiper">
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation={{ clickable: true }}
              className="swiper-container"
            >
              <SwiperSlide>
                <img
                  src={
                    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1718932490/Team/ik4x38c1m1avnfctusbw.webp"
                  }
                  alt=""
                  className="card-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={
                    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1718932490/Team/z7bcfizsqpgnklpvujxp.webp"
                  }
                  alt=""
                  className="card-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={
                    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1718932490/Team/cqfbgiu7ivn6gqksjxk5.webp"
                  }
                  alt=""
                  className="card-image"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembersCarousel;
