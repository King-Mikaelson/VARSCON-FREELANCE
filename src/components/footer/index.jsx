import Logo from "../../../public/logoFooter.png";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import {
  AiFillDribbbleCircle,
  AiFillGithub,
  AiOutlineCopyrightCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineBehanceSquare,
} from "react-icons/ai";

function Footer() {
  return (
    <main className="z-[20] mt-0 mb-10 bg-[#FFFFFF] pt-10  lg:px-6 xl:px-36 px-4 mx-0 w-full self-end  border-t lg:border-t-0">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 ">
        <div className=" flex justify-center md:block">
          <Image
            src={Logo}
            alt="logo"
            className="  md:h-[16rem] md:w-[16rem] w-[10rem] h-[10rem] object-contain"
            priority={true}
          />
        </div>

        <Link
          href={"/"}
          className="lg:text-[0.9375rem] text-base font-sans text-[#1E2833]"
        >
          Home
        </Link>

        <Link
          href={"/devShop"}
          className="lg:text-[0.9375rem] text-base font-sans text-[#1E2833]"
        >
          DevShop
        </Link>

        <Link
          href={"/advisory"}
          className="lg:text-[0.9375rem] text-base font-sans text-[#1E2833]"
        >
          Advisory
        </Link>

        <Link
          href={"/recruitment"}
          className="lg:text-[0.9375rem] text-base font-sans text-[#1E2833]"
        >
          Recruitment
        </Link>

        <Link
          href={"/contactUs"}
          className="lg:text-[0.9375rem] text-base font-sans text-[#1E2833]"
        >
          Contact
        </Link>

        {/* <p className="lg:text-[0.9375rem] gap-1 flex items-center text-base font-sans text-[#1E2833] opacity-50">
          Copyright{" "}
          <span>
            <AiOutlineCopyrightCircle />
          </span>
          2023 Varscon All rights reserved.
        </p> */}
      </div>
      <div className="md:flex md:justify-center md:items-center flex-col gap-1 mt-10 lg:mt-0">
        <p className="text-[0.9375rem] gap-1 flex items-center  font-sans text-[#1E2833] opacity-50 text-center ">
          Copyright
          <span>
            <AiOutlineCopyrightCircle />
          </span>
          2023 Varscon All rights reserved.
        </p>
        <p className="lg:text-center">
          Any unauthorized redistribution or reproduction of any copyrighted
          materials on this website is strictly prohibited. Other company names
          are trademarks of their respective owners.
        </p>
      </div>
    </main>
  );
}

export default Footer;
