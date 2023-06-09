import {AiOutlineMail} from "react-icons/ai";
import {FiMapPin, FiMail, FiPhone} from "react-icons/fi";
import Logo from "../../../public/logoFooter.png";
import Image from "next/image";
import {FaFacebookF, FaTwitter, FaInstagram,FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";
import {AiFillDribbbleCircle, AiFillGithub, AiOutlineCopyrightCircle, AiFillFacebook, AiFillInstagram, AiOutlineBehanceSquare} from "react-icons/ai";
import {BiLogoFacebookSquare} from "react-icons/bi";

function Footer() {
  return (
    <main className="mt-10 mb-auto bg-[#FFFFFF] pt-10 lg:pt-20  lg:px-36 px-4 mx-0 w-full self-end lg:pb-20">
    

      <div className="flex flex-col lg:flex-row md:justify-between lg:items-center gap-5">
       <div className=" lg:order-1 order-4">
       <Image
            src={Logo}
            alt="logo"
            className="  md:h-[16rem] md:w-[16rem] w-full h-full"
          />
        </div>
        
        <div className="text-[1.857rem] flex flex-col gap-5 font-Satoshi lg:order-2 order-1">
        <h3 className="text-[1.27rem] font-bold font-Poppins text-[#334737]">About Us</h3>
          <Link href="#first-section" className="text-lg font-light font-Poppins text-[#869AB8]">Our Work</Link>
          <Link href="#second-section" className="text-lg font-light font-Poppins text-[#869AB8]">Our Services</Link>
          <Link href="#third-section" className="text-lg font-light font-Poppins text-[#869AB8]">Our Clients</Link>
        </div>

        <div className="text-[1.857rem] flex flex-col gap-5  font-Satoshi  lg:order-2 order-2">
        <h3 className="text-[1.27rem] font-bold font-Poppins text-[#334737]">INFORMATION</h3>
          <p  className="text-lg font-light font-Poppins text-[#869AB8]">Code of Conduct</p>
          <p  className="text-lg font-light font-Poppins text-[#869AB8]">Privacy Policy</p>
          <p  className="text-lg font-light font-Poppins text-[#869AB8]">Rate Card</p>
        </div>

        <div className="text-[1.857rem] flex flex-col gap-5  font-Satoshi  lg:order-2 order-2">
        <h3 className="text-[1.27rem] font-bold font-Poppins text-[#334737]">CONTACT</h3>
          <p  className="text-lg font-light font-Poppins text-[#869AB8]">Contact Form</p>
          <p  className="text-lg font-light font-Poppins text-[#869AB8]">Hello@varson.com</p>
          <p  className="text-lg font-light font-Poppins text-[#869AB8]">+234 (810) 164 8490</p>
        </div>
        
      </div>

      {/* <div className="flex flex-col justify-center items-center relative my-0 mx-auto lg:pt-16 pt-8 lg:pb-6 pb-3 ">
        <div className="bg-[#49AD09] h-[0.1rem] inline-block w-3/4"></div>
      </div> */}
      <p className="text-base font-Poppins font-light text-center pb-6">Studio: 300, Ademona Street, Off Emeka Street, Idumota, Lagos</p>
      <div className="flex pb-2 items-center justify-center gap-10">
        <Link href={"https://www.facebook.com/medichealthwellness"} className="">
        <AiFillFacebook size={25} className="inline-block text-[#334737] cursor-pointer text-lg" />
        </Link>
        <Link href={"https://www.instagram.com/medichealthwellness/"} className="">
        <AiFillInstagram size={25}  className="inline-block text-[#334737] cursor-pointer"/>
        </Link>
        <Link href={"/"} className=" ">
        <FaTwitter  className="inline-block text-[#334737] cursor-pointer" />
        </Link>
        <Link  href={"/"} className="">
        <AiFillDribbbleCircle size={25}  className="inline-block text-[#334737] cursor-pointer" />
        </Link>
        <Link  href={"/"} className="">
        <AiOutlineBehanceSquare size={25}  className="inline-block text-[#334737] cursor-pointer" />
        </Link>
        <Link  href={"/"} className="">
        <AiFillGithub size={25}  className="inline-block text-[#334737] cursor-pointer" />
        </Link>
        
       </div>
       <div className="flex justify-center items-center gap-3 pt-4">
        <AiOutlineCopyrightCircle className="text-[#869AB8]"/>
        <p className="text-[#869AB8]">2021 Varscon</p>
       </div>

    </main>
  );
}

export default Footer;




