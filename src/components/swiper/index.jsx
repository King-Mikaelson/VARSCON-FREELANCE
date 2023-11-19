import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import phone from "../../../public/phone.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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

  const swiperRef = useRef();
  return (
    <div className="my-8 px-4 lg:px-20 xl:px-48 relative">
      <button
        className="lg:py-3 lg:px-3 py-1 px-1 shadow-lg absolute lg:left-[4rem] xl:left-[8rem] z-10 left-0 top-1/2 border-[#D9D9D9] rounded-full border-[0.5px] border-solid "
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <BsArrowLeftShort color="#869AB8" size={25} />
      </button>
      <button
        className="lg:py-3 lg:px-3 py-1 px-1  shadow-lg absolute lg:right-[4rem] xl:right-[8rem] z-10 right-0 top-1/2  border-[#D9D9D9] rounded-full border-[0.5px] border-solid "
        onClick={() => swiperRef.current?.slideNext()}
      >
        <BsArrowRightShort color="#869AB8" size={25} />
      </button>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-full flex justify-between items-center lg:px-14 px-4">
            <div className="flex flex-col lg:gap-3 gap-3 w-1/2">
              <p className="text-left text-[#869AB8] font-DMSans font-normal text-lg">
                With Varscon, You Get:
              </p>
              <ul className="leading-8 text-left text-[#162D1B] font-DMSans font-bold md:text-3xl text-base">
                <li className="list-disc"> Best experience</li>
              </ul>
              <p className="text-left text-[#869AB8] font-DMSans font-normal text-lg">
                Providing unparalleled out-sourcing experience with top-notch
                service and satisfaction.
              </p>
            </div>
            <div className="w-1/2">
              <Image
                alt="phone"
                src={phone}
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full flex justify-between items-center lg:px-14 px-4">
            <div className="flex flex-col lg:gap-3 gap-3 w-1/2">
              <p className="text-left text-[#869AB8] font-DMSans font-normal text-lg">
                With Varscon, You Get:
              </p>
              {/* <p className="leading-8 text-left text-[#162D1B] font-DMSans font-bold md:text-4xl text-base">
                How we crafted a unique identity for the renowned affliate
                marketer
              </p> */}
              <ul className="leading-8 text-left text-[#162D1B] font-DMSans font-bold md:text-3xl text-base">
                <li className="list-disc">Unbeatable Prices</li>
              </ul>

              <p className="text-left text-[#869AB8] font-DMSans font-normal text-lg">
                Competitive prices and unmatched value for your money.
              </p>
            </div>
            <div className="w-1/2">
              <Image
                alt="phone"
                src={phone}
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full flex justify-between items-center lg:px-14 px-4">
            <div className="flex flex-col lg:gap-3 gap-3 w-1/2">
              <p className="text-left text-[#869AB8] font-DMSans font-normal text-lg">
                With Varscon, You Get:
              </p>
              <ul className="leading-8 text-left text-[#162D1B] font-DMSans font-bold md:text-3xl text-base">
                <li className="list-disc">Leading Technologies</li>
              </ul>

              <p className="text-left text-[#869AB8] font-DMSans font-normal text-lg">
                Providing unparalleled out-sourcing experience with top-notch
                service and satisfaction.
              </p>
            </div>
            <div className="w-1/2">
              <Image
                alt="phone"
                src={phone}
                className="w-full h-full object-cover"
                priority={true}
              />
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
