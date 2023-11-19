import Hero from "@/components/hero";
import { DM_Sans } from "next/font/google";
import dev3 from "../../../public/dev3.png";
import dev2 from "../../../public/dev2.png";
import dev from "../../../public/dev.png";
import Image from "next/image";
import software from "../../../public/software.png";
import marketing from "../../../public/marketing.png";
import hiring from "../../../public/hiring.png";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

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
        <div>
          <div className="lg:pt-16  pt-8  flex flex-col relative w-full items-center">
            <div className="flex  flex-col md:flex-row items-center  px-4 lg:px-20 xl:px-48 gap-5">
              <h1 className="font-DMSans font-bold   lg:leading-[4.5rem] pb-5 text-black lg:text-[ 2.5rem] text-3xl flex ">
                Devshop caters for your technological needs with the
                following...
              </h1>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 px-4  lg:px-20 xl:px-48  relative">
            <div className=" py-1 md:pb-14 pb-8 px-6 flex flex-col gap-2 items-center  lg:items-start justify-center lg:justify-start">
              <Image
                src={dev}
                alt="dev"
                className="w-16 h-16  lg:w-28 lg:h-28"
                priority={true}
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[#271B36] text-[1.125rem] font-bold font-DMSans">
                  World-class  development
                </h4>
                <p className="text-[#869AB8] text-base font-DMSans font-normal">
                  Access comprehensive software development, data analytics,
                  cybersecurity for business
                  solutions.
                </p>
              </div>
            </div>
            <div className=" py-1 md:pb-14 pb-8 px-6 flex flex-col gap-2 items-center lg:items-start justify-center lg:justify-start">
              <div>
                <Image
                  src={dev2}
                  alt="dev2"
                  priority={true}
                  className="w-16 h-16  lg:w-28 lg:h-28"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-[#271B36] text-[1.125rem] font-bold font-DMSans">
                  Client-centric UX optimisation
                </h4>
                <p className="text-[#869AB8] text-base font-DMSans font-normal">
                  Delegate all your software needs, sit back, and watch your
                  customer satisfaction score soar.
                </p>
              </div>
            </div>
            <div className=" py-1 pb-8  md:pb-14 px-6 flex flex-col gap-2 items-center lg:items-start justify-center lg:justify-start">
              <Image
                src={dev3}
                alt="dev3"
                className="w-16 h-16  lg:w-28 lg:h-28"
                priority={true}
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[#271B36] text-[1.125rem] font-bold font-DMSans">
                  Prototyping
                </h4>
                <p className="text-[#869AB8] text-base font-DMSans font-normal">
                  Rapidly develop Minimum Viable Products (MVPs) to validate
                  market viability with our skilled team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-10 relative">
        <div className="absolute z-10 bottom-0 left-0 bg-[url(/Vector.png)] h-[40rem] w-full bg-center bg-cover bg-no-repeat"></div>
        <div className="clip-your-needful-style1 bg-[url(/boardRoom1.jpg)] h-[51.9rem] w-full bg-center bg-cover bg-no-repeat "></div>
      </div>

      <div className="relative bg-white mt-20">
        <div className="lg:pt-16 lg:pb-[24rem] pb-20  pt-14 clip-your-needful-style flex flex-col relative bg-[#005F56] w-full">
          <div className="hidden md:block absolute z-10 -bottom-0  bg-[url(/Vector2.png)] h-[50rem] w-full bg-center bg-cover bg-no-repeat"></div>
          <div className="flex  flex-col md:flex-row items-center  px-4 lg:px-20 xl:px-48 gap-5">
            <h1 className="font-DMSans font-bold  lg:leading-[4.5rem] pb-5 text-[#C9FCCF] lg:text-[3.75rem] text-4xl flex ">
              Our Approach
            </h1>

            <div className="md:border-l border-t md:border-t-0 border-[#00725C] solid h-full px-4 flex items-center">
              <h2 className="font-DMSans font-normal py-5 text-[#E0E0E0] text-lg">
                Ready to build out your idea? Our approach to work takes place
                in five simple steps.
              </h2>
            </div>
          </div>
        </div>

        <div className="lg:mt-[-20rem] lg:grid grid-cols-1 flex flex-col lg:flex-row gap-5 px-4  lg:px-20 xl:px-48 z-100 relative">
          <div className="bg-[#FFFFFF] py-8  px-6 lg:px-24 grid lg:grid-cols-2 gap-10 grid-cols-1">
            <div className="rounded-lg  p-6 border border-solid border-[#C9FCCF] shadow-md flex flex-col gap-3">
              <Image
                src="/1.png"
                width={400}
                height={400}
                className="h-16 w-8"
                alt="number"
              />

              <div className="flex flex-col gap-1">
                <h4 className="text-[#162D1B] text-[1.125rem] font-medium font-DMSans">
                  Ideation/Briefing
                </h4>
                <p className="text-[#869AB8] text-[0.9375rem]  font-DMSans">
                  Share basic information about your business to inform our
                  pre-meeting research.
                </p>
              </div>
            </div>
            <div className="rounded-lg p-6  border border-solid border-[#C9FCCF] shadow-md flex flex-col gap-3">
              <Image
                src="/2.png"
                width={400}
                height={400}
                className="h-16 w-8"
                alt="number"
              />

              <div className="flex flex-col gap-1">
                <h4 className="text-[#162D1B] text-[1.125rem] font-medium font-DMSans">
                  Conceptualization
                </h4>
                <p className="text-[#869AB8] text-[0.9375rem]  font-DMSans">
                  Together, we will define your business goals, preferences, and
                  prospects. Our targeted questioning will help us refine your
                  ideas to perfection.
                </p>
              </div>
            </div>
            <div className="rounded-lg p-6  border border-solid border-[#C9FCCF] shadow-md flex flex-col gap-3">
              <Image
                src="/3.png"
                width={400}
                height={400}
                className="h-16 w-8"
                alt="number"
              />

              <div className="flex flex-col gap-1">
                <h4 className="text-[#162D1B] text-[1.125rem] font-medium font-DMSans">
                  Legalities
                </h4>
                <p className="text-[#869AB8] text-[0.9375rem]  font-DMSans">
                  Docs and legalities because we are detail-oriented and value
                  professionalism.
                </p>
              </div>
            </div>
            <div className="rounded-lg p-6  border border-solid border-[#C9FCCF] shadow-md flex flex-col gap-3">
              <Image
                src="/4.png"
                width={400}
                height={400}
                className="h-16 w-8"
                alt="number"
              />

              <div className="flex flex-col gap-1">
                <h4 className="text-[#162D1B] text-[1.125rem] font-medium font-DMSans">
                  HireUp
                </h4>
                <p className="text-[#869AB8] text-[0.9375rem]  font-DMSans">
                  A handpicked team specific to your project needs begins to
                  design and develop your product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="relative flex-col flex  w-full mt-12 ">
        <div className="lg:pt-16   pt-14  flex justify-center flex-col items-center relative w-full ">
          <h1 className="font-DMSans font-bold  lg:leading-[4.5rem]  text-[#162D1B]  lg:text-[4.56rem] text-4xl text-center flex ">
            Varscon Bonus!
          </h1>

          <h2 className="font-DMSans font-normal  text-[#869AB8] text-lg text-center py-4 w-[40ch]">
            Enjoy a duration of free maintenance for your product with
            recommendations on the steps to take after it expires.
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

      <main className="relative flex-col flex bg-[#005F56] lg:mt-32 mt-12   ">
        <div className="relative flex-col flex z-20  w-full px-4  lg:px-20 xl:px-48">
          <div className="relative ">
            <div className=" pb-20  pt-14  flex flex-col relative  w-full">
              <div className="flex  flex-col items-center  px-4 lg:px-20 xl:px-48 gap-5">
                <h1 className="font-DMSans font-bold lg:leading-[4.5rem] text-center text-[#C9FCCF] lg:text-[3.75rem] text-4xl flex ">
                  Varscon Customer Success Experts
                </h1>
              </div>

              <div className="grid md:grid-cols-3 lg:gap-6 lg:mt-10 mt-4 text-white">
                <div className=" text-left md:py-16 md:pb-14 pb-8 px-6 rounded-lg   flex justify-center items-center flex-col">
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
                  <p className="text-[#869AB8]  text-base font-DMSans font-medium pb-2">
                    Mobile Engineer
                  </p>
                </div>
                <div className=" text-left md:py-16 md:pb-14 pb-8 px-6 rounded-lg   flex justify-center items-center flex-col">
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
                  <p className="text-[#869AB8]   text-base font-DMSans font-medium pb-2">
                    Senior Product Manager
                  </p>
                </div>
                <div className=" text-left md:py-16 md:pb-14  px-6 rounded-lg   flex justify-center items-center flex-col">
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
                  <p className="text-[#869AB8]   text-base font-DMSans font-medium pb-2">
                    Data Scientist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" pointer-events-none hidden md:block absolute z-0  bg-[url(/Vector2.png)] h-full w-full bg-center bg-cover bg-no-repeat"></div>
      </main>
    </div>
  );
}

export default DevShop;
