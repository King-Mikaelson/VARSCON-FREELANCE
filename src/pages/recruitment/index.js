import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import { DM_Sans } from "next/font/google";
import React from "react";

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
        <div className="flex flex-col gap-2">
          <h2 className="font-DMSans font-normal py-1 text-black  text-center text-4xl  leading-[4rem]">
            Your one-stop shop for all your hiring needs
          </h2>
          <div className="list-disc flex gap-5 flex-col">
            <li className=" font-DMSans font-normal  text-[#869AB8] text-lg">
              Interviews
              <p>
                Not sure what questions to ask to find the right talents? We are
              </p>
            </li>
            <li className="font-DMSans font-normal  text-[#869AB8] text-lg">
              Talent Sourcing
            </li>
            <li className="text-right  font-DMSans font-normal  text-[#869AB8] text-lg">
              World-class Referrals
            </li>
            <li className="  font-DMSans font-normal  text-[#869AB8] text-lg">
              Internships and entry-level matching
              <p>
                Recruit rising talents in the industry from our talent pool.
              </p>
            </li>
            <li className="text-right  font-DMSans font-normal  text-[#869AB8] text-lg">
              Hiring advisory
            </li>
            <li className=" font-DMSans font-normal  text-[#869AB8] text-lg">
              Technical outsourcing
              <p>Find the right talent without hiring them</p>
            </li>
            <li className="text-right  font-DMSans font-normal  text-[#869AB8] text-lg">
              Can’t find your hiring need in the list?
              <p>
                We’ll have a custom plan tailored just for you. Contact us now
                to get started.
              </p>
            </li>
          </div>
        </div>
      </div>
      <Pricing />
    </div>
  );
};

export default Recruitment;
