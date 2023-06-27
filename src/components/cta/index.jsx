import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import testominal from "../../../public/testominal.png";
import Link from "next/link";

function Cta() {
  return (
    <main className="relative flex-col flex  w-full mt-12 ">
      <div className="lg:pt-16   pt-14  flex justify-center flex-col items-center relative w-full ">
        <h1 className="font-DMSans font-bold  lg:leading-[4.5rem] pb-5 text-[#162D1B] lg:text-[4.56rem] text-4xl text-center flex ">
          Build with Varscon!
        </h1>

        <h2 className="font-DMSans font-normal  text-[#869AB8] text-lg text-center py-3">
          Got a Project? Get in touch, We’re Ready!
        </h2>
      </div>

      <div className="flex justify-center py-4">
        <button className="flex  bg-[#00C664] rounded-lg justify-between py-2 px-6 items-center">
          <Link href={"/contactUs"} className="font-DMSans font-bold  text-[#005F56] text-sm text-center ">
            Contact Us
          </Link>
          <BsArrowRightShort className="text-[#005F56] text-4xl" />
        </button>
      </div>

      <div className="mt-10 relative">
        <div className="absolute z-10 bottom-0 left-0 bg-[url(/Vector.png)] h-[40rem] w-full bg-center bg-cover bg-no-repeat"></div>
        <div className="clip-your-needful-style1 bg-[url(/Services-3.png)] h-[51.9rem] w-full bg-center bg-cover bg-no-repeat "></div>
      </div>

      <div className="flex justify-center pt-12 lg:pt-32 h-full relative lg:px-24 xl:px-52 px-4">
        <div className="md:grid grid-cols-2  left-0   relative flex flex-col items-center h-full shadow-lg">
          <div className="absolute z-10 bottom-[-10rem] bg-[url(/Vector.png)] h-[10rem] w-full bg-center bg-cover bg-no-repeat"></div>
            <div className="md:relative px-4 lg:px-8 flex gap-5 flex-col order-2 md:order-1 py-6 md:py-0">
              <h3 className="text-[#869AB8] font-DMSans font-normal text-sm">
                TRUE STORY
              </h3>
              <p className="text-[#162D1B] font-DMSans font-medium text-lg">
                Varscon demonstrated great expertise and professional excellence
                and I value the integrity and engagement each team member
                presented at every stage.
              </p>
              <div className="relative">
              <div className="absolute left-0 top-2 bg-[#869AB8]  h-1 rounded-full w-1 whitespace-nowrap"></div>
              <p className="text-[#869AB8] font-DMSans font-normal text-sm pl-4">
                YEJI LEE, SEPHORA
              </p>
              </div>
          </div>
          <Image
            src={testominal}
            alt="testominal"
            className="h-full w-full rounded-r-lg rounded-l-lg md:rounded-l-none   order-1 md:order-2"
            priority={true}
          />
        </div>
      </div>
    </main>
  );
}

export default Cta;
