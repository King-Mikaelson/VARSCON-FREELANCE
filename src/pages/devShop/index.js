import Hero from "@/components/hero";
import { DM_Sans } from "next/font/google";
import BusinessPlan from "../../../public/BusinessPlan.png";
import Painter from "../../../public/Painter.png";
import Science4 from "../../../public/Science4.png";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variants: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dmSans",
  weight: ["400", "500", "700"],
  style: ["normal"],
});

function DevShop() {
  return (
    <div className={`bg-[#FFFFFF] flex flex-col ${dmSans.className}`}>
      <Hero
        header={"Create Digital Realities with Advanced Tech Solutions"}
        descriptionDevShop={
          "DevShop–the unparalleled solution for your software needs. Just dream big, and we will handle the rest!"
        }
      />
      <main className="relative flex-col flex justify-center  w-full ">
        <div className=" bg-white">
          <div className="lg:pt-16  pt-8  flex flex-col relative w-full items-center">
            <div className="flex  flex-col md:flex-row items-center  px-4 lg:px-20 xl:px-48 gap-5">
              <h1 className="font-DMSans font-bold   lg:leading-[4.5rem] pb-5 text-black lg:text-[3.75rem] text-4xl flex ">
                Unique Offerings
              </h1>
            </div>
          </div>

          <div className=" lg:grid grid-cols-3 flex flex-col lg:flex-row gap-5 px-4  lg:px-20 xl:px-48  relative">
            <div className=" py-2 md:pb-14 pb-8 lg:py-0 px-6  object-contain rounded-lg  ">
              {/* <Image src={Painter} alt="Painter" className="" priority={true} /> */}
              <p className="text-[#162D1B] text-lg font-DMSans font-normal pt-2 pb-1">
                World-class technical development
              </p>
              <p className="text-[#869AB8] text-base font-DMSans font-medium pb-4">
                The perfection we deliver includes technical services in :
              </p>
              <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
                - Software development (mobile and web applications)
              </p>
              <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
                - Data Analytics/Science and Data Engineering
              </p>
              <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
                - Machine learning and AI development
              </p>
              <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
                - Blockchain
              </p>
              <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
                - Cybersecurity
              </p>
            </div>
            <div className=" py-6 md:pb-14 pb-8 lg:py-0 px-6 object-contain rounded-lg    ">
              {/* <Image
                src={Science4}
                alt="Painter"
                className="xl:w-[17rem] xl:h-[17rem] w-[9.5rem] h-[9.5rem]"
                priority={true}
              /> */}
              <p className="text-[#162D1B] text-lg font-DMSans font-medium py-2">
                Client-centric UX optimisation
              </p>
              <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
                At DevShop, your users are never an afterthought. Delegate all
                your software needs, go on a vacation and rake in the money and
                customer adoration.
              </p>
            </div>
            <div className=" py-6 pb-8  md:pb-14 px-6 lg:py-0 object-contain rounded-lg  ">
              {/* <Image
                src={BusinessPlan}
                alt="Painter"
                className=""
                priority={true}
              /> */}
              <p className="text-[#162D1B] text-lg font-DMSans font-medium py-2">
                Prototyping
              </p>
              <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
                Swiftly develop Minimum Viable Products (MVPs) to substantiate
                market viability.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="px-8  lg:px-20 xl:px-48 mx-0 w-full lg:mt-32 mt-12">
        <h2 className="text-center py-2 font-bold font-DMSans  pb-5 text-[#005F56] lg:text-[3.75rem] text-4xl ">
          Our Approach
        </h2>
        <p className="text-center font-DMSans font-normal  text-[#869AB8] text-lg">
          Ready to build out your idea? Our approach to work takes place in five
          simple steps.
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <Image
            src={BusinessPlan}
            alt="Painter"
            className="w-full"
            priority={true}
          />
          <div>
            <ol className="list-decimal flex gap-8 flex-col">
              <li className=" font-DMSans font-normal  text-[#869AB8] text-lg">
                Share basic information about your business to inform our
                pre-meeting research.
              </li>
              <li className=" font-DMSans font-normal  text-[#869AB8] text-lg">
                Together, we will define your business goals, preferences, and
                prospects. Our targeted questioning will help us refine your
                ideas to perfection, and we will present you with a development
                plan draft that meets your needs.
              </li>
              <li className=" font-DMSans font-normal  text-[#869AB8] text-lg">
                Docs and legalities because we are detail-oriented and value
                professionalism.
              </li>
              <li className=" font-DMSans font-normal  text-[#869AB8] text-lg">
                A handpicked team specific to your project needs begins to
                design and develop your product.
              </li>
            </ol>

            <div className="mt-5">
              <h4 className="text-[#162D1B] text-lg font-DMSans font-medium ">
                Complementary maintenance:
              </h4>
              <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
                Enjoy a duration of free maintenance for your product with
                recommendations on the steps to take after it expires.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="relative flex-col flex bg-[#005F56] lg:mt-32 mt-12   w-full px-4  lg:px-20 xl:px-48 ">
        <div className="relative flex-col flex   w-full">
          <div className="relative ">
            <div className=" pb-20  pt-14  flex flex-col relative  w-full">
              <div className="flex  flex-col items-center  px-4 lg:px-20 xl:px-48 gap-5">
                <h1 className="font-DMSans font-bold lg:leading-[4.5rem] text-center text-[#C9FCCF] lg:text-[3.75rem] text-4xl flex ">
                  Varscon Customer Success Experts
                </h1>
                {/* <h2 className="font-DMSans font-normal pb-5 text-[#E0E0E0] text-lg">
                  Varscon Customer Success Experts
                </h2> */}
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mt-10 text-white">
                <div className=" text-left py-16 md:pb-14 pb-8 px-6 rounded-lg   flex justify-center items-center flex-col">
                  <div className="w-32 h-32 flex justify-center items-center mx-auto">
                    <Image
                      src="/profileImg.png"
                      width={300}
                      height={300}
                      alt="profile Img"
                      className="w-full h-full rounded-full  bg-red-500"
                      priority={true}
                    />
                  </div>
                  <p className="text-white  text-lg font-DMSans font-normal pt-2 pb-1">
                    Okechukwu Nwagba
                  </p>
                  <p className="text-white  text-base font-DMSans font-medium pb-2">
                    Mobile Engineer
                  </p>
                </div>
                <div className=" text-left py-16 md:pb-14 pb-8 px-6 rounded-lg   flex justify-center items-center flex-col">
                  <div className="w-32 h-32 flex justify-center items-center mx-auto">
                    <Image
                      src="/profileImg.png"
                      width={300}
                      height={300}
                      alt="profile Img"
                      className="w-full h-full rounded-full  bg-red-500"
                      priority={true}
                    />
                  </div>
                  <p className="text-white   text-lg font-DMSans font-normal pt-2 pb-1">
                    Godsent Njoku
                  </p>
                  <p className="text-white   text-base font-DMSans font-medium pb-2">
                    Senior Product Manager
                  </p>
                </div>
                <div className=" text-left py-16 md:pb-14 pb-8 px-6 rounded-lg   flex justify-center items-center flex-col">
                  <div className="w-32 h-32 flex justify-center items-center mx-auto">
                    <Image
                      src="/profileImg.png"
                      width={300}
                      height={300}
                      alt="profile Img"
                      className="w-full h-full rounded-full  bg-red-500"
                      priority={true}
                    />
                  </div>
                  <p className="text-white   text-lg font-DMSans font-normal pt-2 pb-1">
                    Godsent Eliel
                  </p>
                  <p className="text-white   text-base font-DMSans font-medium pb-2">
                    Data Scientist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DevShop;
