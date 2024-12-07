"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { BiArrowToRight } from "react-icons/bi";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper size-full cursor-grab active:cursor-grabbing"
      >
        <SwiperSlide className="">
          <div className="h-full w-full  bg-black flex flex-col md:flex-row  text-white">
            <div className="w-full h-2/4 md:w-2/4 md:h-full p-10 space-y-1 md:space-y-3 lg:space-y-5">
              <h1>iPhone 14 Series</h1>
              <h1 className="font-semibold text-xl md:text-3xl lg:text-5xl">
                Up to 10% <br /> off Voucher
              </h1>
              <button className="outline-none border-b border-white pb-2 text-white flex items-center gap-1">
                Shop Now
                <BiArrowToRight />
              </button>
            </div>
            <Image
              src={"/images/iphone.svg"}
              alt="iphone"
              width={350}
              height={350}
              sizes="full"
              className="object-cover w-full h-2/4 md:w-2/4 md:h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
