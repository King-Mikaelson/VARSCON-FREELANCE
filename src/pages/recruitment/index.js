import Cta from "@/components/cta";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort, BsCheck2Circle } from "react-icons/bs";
import BusinessPlan from "../../../public/varsconLogo.png";
import Image from "next/image";
import CheckMark from "../../../public/dev.svg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variants: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dmSans",
  weight: ["400", "500", "700"],
  style: ["normal"],
});
const Recruitment = () => {
  return (
    <div className={`bg-[#FFFFFF] flex flex-col ${dmSans.className}`}>
      <Hero
        header={"Propel your projects with well-nurtured engineering teams"}
        descriptionRecruitment={
          "Looking for the next tech talent to join your team? Describe your technical needs and leave talent sourcing to the experts—US! "
        }
        link={"Start hiring!"}
      />
      <div className="flex  flex-col  px-4 lg:px-20 xl:px-48 pt-10">
        <h2 className="py-1 text-center font-DMSans font-bold   pb-5 text-black  text-4xl">
          Your one-stop shop for all your hiring needs
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="flex flex-col order-2 lg:order-1">
            <div className="flex gap-5 flex-col">
              {/* <div className="flex gap-5  py-2">
                <Image
                  src={CheckMark}
                  alt="checkmark"
                  className="w-16"
                  priority={true}
                />
                <div className=" font-DMSans font-normal  text-[#869AB8] text-lg">
                  <p>
                    Not sure what questions to ask to find the right talents? We
                    are
                  </p>
                </div>
              </div> */}

              <div className="flex gap-5   pb-2">
                <Image
                  src={CheckMark}
                  alt="checkmark"
                  className="w-16"
                  priority={true}
                />
                <div className=" font-DMSans font-normal  text-[#869AB8] text-lg">
                  <p
                    className="text-[#271B36]
font-bold "
                  >
                    Talent sourcing and management
                  </p>
                  <p>Leave the gruntwork of recruitment to the experts </p>
                </div>
              </div>

              <div className="flex gap-5   pb-2">
                <Image
                  src={CheckMark}
                  alt="checkmark"
                  className="w-16"
                  priority={true}
                />
                <div className="  font-DMSans font-normal  text-[#869AB8] text-lg">
                  <p className="text-[#271B36]
font-bold ">Internships and entry-level matching</p>
                  <p>
                    Recruit rising talents in the industry from our talent pool.
                  </p>
                </div>
              </div>

              <div className="flex gap-5   pb-2">
                <Image
                  src={CheckMark}
                  alt="checkmark"
                  className="w-16"
                  priority={true}
                />
                <div className=" font-DMSans font-normal  text-[#869AB8] text-lg">
                  <p
                    className="text-[#271B36]
font-bold "
                  >
                    Hiring advisory
                  </p>
                  <p>Gain insight into your talent needs and hire up.</p>
                </div>
              </div>

              <div className="flex gap-5   pb-2">
                <Image
                  src={CheckMark}
                  alt="checkmark"
                  className="w-16"
                  priority={true}
                />
                <div className=" font-DMSans font-normal  text-[#869AB8] text-lg">
                  <p
                    className="text-[#271B36]
font-bold "
                  >
                    Technical outsourcing
                  </p>
                  <p>Find the right talent without hiring them</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src={BusinessPlan}
              alt="Painter"
              className="w-full"
              priority={true}
            />
          </div>
        </div>
      </div>
      <main className="relative flex-col flex  w-full mt-12 ">
        <div className="mt-10 relative">
          <div className="absolute z-10 bottom-0 left-0 bg-[url(/Vector.png)] h-[40rem] w-full bg-center bg-cover bg-no-repeat"></div>
          <div className="clip-your-needful-style1 bg-[url(/sigmund-eTgMFFzroGc-unsplash.jpg)] h-[51.9rem] w-full bg-center bg-cover bg-no-repeat "></div>
        </div>

        <div className="lg:pt-16   pt-14  flex justify-center flex-col items-center relative w-full ">
          <h1 className="font-DMSans font-bold  lg:leading-[5rem]  text-[#162D1B] w-[15ch] lg:text-[4.56rem] text-4xl text-center flex ">
            Can’t find your hiring need in the list?
          </h1>

          <h2 className="font-DMSans font-normal  text-[#869AB8] text-lg text-center py-4">
            We’ll have a custom plan tailored just for you. Contact us now to
            get started.
          </h2>
        </div>

        <div className="flex justify-center py-4">
          <button className="flex  bg-[#00C664] rounded-lg justify-between py-2 px-6 items-center">
            <Link
              href={"/contactUs"}
              className="font-DMSans font-bold  text-[#005F56] text-sm text-center "
            >
              Contact Us
            </Link>
            <BsArrowRightShort className="text-[#005F56] text-4xl" />
          </button>
        </div>
      </main>
      <Pricing />
    </div>
  );
};

export default Recruitment;
