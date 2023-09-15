import Hero from '@/components/hero'
import Pricing from '@/components/pricing';
import { DM_Sans } from 'next/font/google';
import React from 'react'

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
    <Pricing/>
    </div>
  )
}

export default Recruitment