import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { useRouter } from "next/router";
import Image from "next/image";
import download from "../../../public/download.png";

function Hero({
  header,
  description,
  descriptionDevShop,
  link,
  descriptionRecruitment,
  descriptionAdvisory,
}) {
  const router = useRouter();

  return (
    <main className="relative flex-col flex justify-center  w-full mt-12 ">
      <div className="lg:pt-16 lg:pb-32 pb-28  pt-14 clip-your-needful-style  flex justify-center flex-col items-center relative bg-[#005F56] w-full ">
        <h1
          className={`${
            Boolean(descriptionDevShop) === true
              ? `font-DMSans font-bold  lg:leading-[4.5rem] pb-5 text-[#C9FCCF] lg:text-[3.75rem] text-4xl text-center lg:w-[25ch] flex`
              : Boolean(descriptionRecruitment) === true
              ? `font-DMSans font-bold  lg:leading-[4.5rem] pb-5 text-[#C9FCCF] lg:text-[3.75rem] text-4xl text-center lg:w-[25ch] flex`
              : Boolean(descriptionAdvisory) === true
              ? `font-DMSans font-bold  lg:leading-[4.5rem] pb-5 text-[#C9FCCF] lg:text-[3.75rem] text-4xl text-center lg:w-[15ch] flex`
              : `font-DMSans font-bold  lg:leading-[4.5rem] pb-5 text-[#C9FCCF] lg:text-[3.75rem] text-4xl text-center lg:w-[18ch] flex`
          }`}
        >
          {header}
        </h1>


        <h3 className="font-DMSans font-normal py-5 text-[#E0E0E0] text-lg text-center lg:w-[52ch]">
          {description ||
            descriptionDevShop ||
            descriptionRecruitment ||
            descriptionAdvisory}
        </h3>

        <div
          onClick={() => router.push("/contactUs")}
          className="flex justify-center py-4 cursor-pointer"
        >
          <button className="flex  bg-[#00C664] rounded-lg justify-between py-4 px-8 items-center">
            <Link
              href={"/contactUs"}
              className="font-DMSans font-bold  text-[#005F56] text-sm text-center "
            >
              {link ? link : "Contact Us"}
            </Link>
            {/* <BsArrowRightShort className="text-[#005F56] text-4xl" /> */}
          </button>
        </div>

        <div className=" pointer-events-none hidden md:block absolute z-10 -bottom-36  bg-[url(/Vector2.png)] h-[50rem] w-full bg-center bg-cover bg-no-repeat"></div>
      </div>
      <div className="relative">
        <Image
          priority={true}
          src={download}
          alt="download"
          className="w-[5rem] h-[5rem] lg:w-[6.5rem] lg:h-[6.5rem] object-contain absolute lg:bottom-[2rem] bottom-10  lg:right-[47%] lg:left-[47%] right-[42%] left-[42%]"
        />
      </div>
    </main>
  );
}

export default Hero;
