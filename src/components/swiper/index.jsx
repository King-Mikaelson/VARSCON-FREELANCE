import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";
import phone from "../../../public/phone.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="my-8 px-4 lg:px-48">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-full flex justify-between items-center lg:px-12 px-3">
            <div className="flex flex-col lg:gap-6 gap-3 w-1/2">
            <p className="text-left text-[#869AB8] font-DMSans font-normal text-sm">BRAND IDENTITY</p>
            <p className="text-left text-[#162D1B] font-DMSans font-bold md:text-4xl text-base">How we crafted a unique identity for the renowned affliate marketer</p>
            <div className="flex  lg:py-4 py-2">
        <button className="flex  bg-[#00C664] rounded-lg  lg:py-4 py-3 px-6 items-center">
          <p className="font-DMSans font-bold  text-[#005F56] text-sm text-center ">
          Read Case Study
          </p>
        </button>
      </div>
            </div>
            <div className="w-1/2">
            <Image src={phone} className="w-full h-full object-cover" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex justify-between items-center lg:px-12 px-3">
            <div className="flex flex-col lg:gap-6 gap-3 w-1/2">
            <p className="text-left text-[#869AB8] font-DMSans font-normal text-sm">BRAND IDENTITY</p>
            <p className="text-left text-[#162D1B] font-DMSans font-bold md:text-4xl text-base">How we crafted a unique identity for the renowned affliate marketer</p>
        <div className="flex  lg:py-4 py-2">
        <button className="flex  bg-[#00C664] rounded-lg lg:py-4 py-3 px-6 items-center">
          <p className="font-DMSans font-bold  text-[#005F56] text-sm text-center ">
          Read Case Study
          </p>
        </button>
      </div>
            </div>
            <div className="w-1/2">
            <Image src={phone} className="w-full h-full object-cover" />
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
