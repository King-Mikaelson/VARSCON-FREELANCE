import Hero from "@/components/hero";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import BusinessPlan from "../../../public/BusinessPlan.png";
import Painter from "../../../public/Painter.png";
import Science4 from "../../../public/Science4.png";
import Image from "next/image";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variants: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dmSans",
  weight: ["400", "500", "700"],
  style: ["normal"],
});
export default function Advisory() {
  return (
    <div className={`bg-[#FFFFFF] flex flex-col ${dmSans.className}`}>
      <Hero
        header={"The Expert Opinion You Need"}
        // advisoryHeader={
        //   "We're not just good; we're the best! TechAid is your home away from home for"
        // }
        // advisoryPoint={"No-code solutions"}
        // advisoryPoint1={"Go-to-market strategy"}
        // advisoryPoint2={"Product development consultancy or"}
        // advisoryPoint3={"Technical advice to scale your business"}
        descriptionAdvisory={
          "We've got it all covered with seasoned professionals and well-versed senior managers who will take your business to the next level. "
        }
      />

      <div className="flex  flex-col items-center  px-4 lg:px-20 xl:px-48 gap-5 pt-10">
        <div className="flex flex-col gap-2  px-6">
          <h2 className="font-DMSans font-normal py-1 text-black  text-center text-4xl  leading-[4rem]">
            We're not just good; we're the best! TechAid is your home away from
            home for
          </h2>
          <ol className="list-disc flex gap-3 flex-col">
            <li className=" font-DMSans font-normal  text-[#869AB8] text-lg">
              No-code solutions
            </li>
            <li className=" font-DMSans font-normal  text-[#869AB8] text-lg">
              Go-to-market strategy
            </li>
            <li className=" font-DMSans font-normal  text-[#869AB8] text-lg">
              Product development consultancy or
            </li>
            <li className=" font-DMSans font-normal  text-[#869AB8] text-lg">
              Technical advice to scale your business
            </li>
          </ol>
        </div>
      </div>

      <div className=" bg-white">
        <div className="lg:pt-16  pt-8  flex flex-col relative w-full items-center">
          <div className="flex  flex-col md:flex-row items-center  px-4 lg:px-20 xl:px-48 gap-5">
            <h1 className="font-DMSans font-bold   lg:leading-[4.5rem] pb-5 text-black lg:text-[3.75rem] text-4xl flex ">
              What We Offer
            </h1>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row gap-5 px-4   relative  mx-auto my-0 lg:w-[800px]">
          <div className="bg-[#FFFFFF] py-1 md:pb-14 pb-8 px-6 object-contain rounded-lg shadow-lg">
            <div className="flex justify-center">
            <Image src={Painter} alt="Painter" className="" priority={true} />
            </div>
            <p className="text-[#162D1B] text-lg font-DMSans font-medium py-2">
              Flexible no-code solutions for small projects
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              Build simple custom applications and workflows that automate
              business processes for your small business/project.
            </p>

            <div className="flex py-4 justify-center">
              <button className="flex  bg-[#00C664] rounded-lg justify-between py-2 px-6 items-center">
                <Link
                  href={"/contactUs"}
                  className="font-DMSans font-bold  text-[#005F56] text-sm text-center "
                >
                  Get Quote
                </Link>
                <BsArrowRightShort className="text-[#005F56] text-4xl" />
              </button>
            </div>
          </div>
          <div className="bg-[#FFFFFF] py-1 pb-8  md:pb-14 px-6 object-contain rounded-lg shadow-lg">
          <div className="flex justify-center">
            <Image
              src={BusinessPlan}
              alt="Painter"
              className=""
              priority={true}
              />
              </div>
            <p className="text-[#162D1B] text-lg font-DMSans font-medium py-2">
              Track your projects with ideas from senior managers
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              Enhance project management by leveraging insights of senior
              managers to meticulously track and optimize your projects.
            </p>

            <div className="flex py-4 justify-center">
              <button className="flex  bg-[#00C664] rounded-lg justify-between py-2 px-6 items-center">
                <Link
                  href={"/contactUs"}
                  className="font-DMSans font-bold  text-[#005F56] text-sm text-center "
                >
                  Consult Now
                </Link>
                <BsArrowRightShort className="text-[#005F56] text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
