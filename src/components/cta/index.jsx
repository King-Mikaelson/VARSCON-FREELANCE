import Image from "next/image";
import download from "../../../public/download.png";
import marketList from "../../../public/marketList.png";
import goMarket from "../../../public/goMarket.png";
import voya from "../../../public/voya.png";
import myNada from "../../../public/myNada.png";
import eMenu from "../../../public/eMenu.png";
import { BsArrowRightShort } from "react-icons/bs";
import testominal from "../../../public/testominal.png";

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
          <p className="font-DMSans font-bold  text-[#005F56] text-sm text-center ">
            Contact Us
          </p>
          <BsArrowRightShort className="text-[#005F56] text-4xl" />
        </button>
      </div>

      <div className="mt-10 relative">
        <div className="absolute z-10 bottom-0 left-0 bg-[url(/Vector.png)] h-[40rem] w-full bg-center bg-cover bg-no-repeat"></div>
        <div className="clip-your-needful-style1 bg-[url(/Services-3.png)] h-[51.9rem] w-full bg-center bg-cover bg-no-repeat "></div>
      </div>
    
    <div className="flex justify-center  pt-12 lg:pt-32 h-full relative">
    <div className="lg:grid grid-cols-2 py-4 px-4 left-0  lg:px-48 relative flex flex-col items-center h-full">
        <div className="absolute z-10 bottom-[-28rem] bg-[url(/Vector.png)] h-[40rem] w-full bg-center bg-cover bg-no-repeat"></div>
        <div className=" shadow-lg h-full">
        <div className="md:relative px-4 flex gap-6 flex-col">
        <h3 className="text-[#869AB8] font-DMSans font-normal text-sm">TRUE STORY</h3>
        <p className="text-[#162D1B] font-DMSans font-medium text-lg">Varscon demonstrated great expertise and professional excellence and I value the integrity and engagement each team member presented at every stage.</p>
        <p className="text-[#869AB8] font-DMSans font-normal text-sm">YEJI LEE, SEPHORA</p>
        </div>
        </div>
        <Image src={testominal} alt="testominal" className="h-full w-full rounded-r-lg" /> 
      </div>
    </div>

    </main>
  );
}

export default Cta;