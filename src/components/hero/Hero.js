import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import heroimg from "../../assets/images/heocarouselimages.png";
function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 25000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="hero__carousel"
        >
          <SwiperSlide className="hero__carousel__swipper">
            <div className="carousel__wrapper">
              <h1 className="hero__carousel__title">
                Fresh Vegetables Big discount
              </h1>
              <p className="hero__carousel__text">
                Save up to 50% off on your first order
              </p>
              <form action="" className="input__btn">
                <input type="text" placeholder="Your email address" />
                <button className="hero__carousel__btn">Subscribe</button>
              </form>
            </div>
          </SwiperSlide>
          <SwiperSlide className="hero__carousel__swipper__two">
            <div className="carousel__wrapper">
              <h1 className="hero__carousel__title">
                Fresh Vegetables Big discount
              </h1>
              <p className="hero__carousel__text">
                Save up to 50% off on your first order
              </p>
              <form action="" className="input__btn">
                <input type="text" placeholder="Your email address" />
                <button className="hero__carousel__btn">Subscribe</button>
              </form>
            </div>
            <img src={heroimg} alt="" className="hero__carousel__images" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
