import React, { useRef, useState } from "react";
import { Pagination } from "swiper";
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import imgOne from '../../assets/profile-img/girl1.jpg';
// import './Slider.scss';
const Slider = () => {
    return (
        <div className="container mx-auto">
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-5"
      >
        <SwiperSlide>
            <div className="relative">
              <img src={imgOne} alt="" />
              <div className="absolute top-[80%] left-[3%]">
                <h1 className="text-[#000] text-3xl text-center font-semibold"><span className='line1'>Md. Rahad</span> <span className='line2'>Hasan</span></h1>
              </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
              <img src={imgOne} alt="" />
              <div className="absolute top-[80%] left-[3%]">
                <h1 className="text-[#000] text-3xl text-center font-semibold"><span className='line1'>Md. Rahad</span> <span className='line2'>Hasan</span></h1>
              </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
              <img src={imgOne} alt="" />
              <div className="absolute top-[80%] left-[3%]">
                <h1 className="text-[#000] text-3xl text-center font-semibold"><span className='line1'>Md. Rahad</span> <span className='line2'>Hasan</span></h1>
              </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
              <img src={imgOne} alt="" />
              <div className="absolute top-[80%] left-[3%]">
                <h1 className="text-[#000] text-3xl text-center font-semibold"><span className='line1'>Md. Rahad</span> <span className='line2'>Hasan</span></h1>
              </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
              <img src={imgOne} alt="" />
              <div className="absolute top-[80%] left-[3%]">
                <h1 className="text-[#000] text-3xl text-center font-semibold"><span className='line1'>Md. Rahad</span> <span className='line2'>Hasan</span></h1>
              </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
              <img src={imgOne} alt="" />
              <div className="absolute top-[80%] left-[3%]">
                <h1 className="text-[#000] text-3xl text-center font-semibold"><span className='line1'>Md. Rahad</span> <span className='line2'>Hasan</span></h1>
              </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
              <img src={imgOne} alt="" />
              <div className="absolute top-[80%] left-[3%]">
                <h1 className="text-[#000] text-3xl text-center font-semibold"><span className='line1'>Md. Rahad</span> <span className='line2'>Hasan</span></h1>
              </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
              <img src={imgOne} alt="" />
              <div className="absolute top-[80%] left-[3%]">
                <h1 className="text-[#000] text-3xl text-center font-semibold"><span className='line1'>Md. Rahad</span> <span className='line2'>Hasan</span></h1>
              </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
              <img src={imgOne} alt="" />
              <div className="absolute top-[80%] left-[3%]">
                <h1 className="text-[#000] text-3xl text-center font-semibold"><span className='line1'>Md. Rahad</span> <span className='line2'>Hasan</span></h1>
              </div>
            </div>

        </SwiperSlide>
      </Swiper>
    </>
        </div>
    );
};

export default Slider;