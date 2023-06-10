import Image from "next/image";
import Painter from "../../../public/Painter.png";
import Science4 from "../../../public/Science4.png";
import BusinessPlan from "../../../public/BusinessPlan.png";
import aws from "../../../public/aws.png";
import goggle from "../../../public/goggle.png";
import sap from "../../../public/sap.png";
import relic from "../../../public/relic.png";
import bgPic from "../../../public/bgPic.png";
import {BsArrowRightShort} from "react-icons/bs";
import woman from "../../../public/woman.png";
import light from "../../../public/light.png";
import goMarketPic from "../../../public/goMarketPic.png";
import jandCollege from "../../../public/jandCollege.png";



function Portofolio() {
  return (
    <main className="relative flex-col flex justify-center  w-full mt-12 ">
      <div className="relative bg-white">
        <div className="lg:pt-16 lg:pb-[24rem] pb-20  pt-14 clip-your-needful-style flex flex-col relative bg-[#005F56] w-full">
        <div className="hidden md:block absolute z-10 -bottom-0  bg-[url(/Vector2.png)] h-[50rem] w-full bg-center bg-cover bg-no-repeat"></div>
          <div className="flex  flex-col md:flex-row items-center  px-4  lg:px-48 gap-5">
            <h1 className="font-DMSans font-bold  lg:leading-[4.5rem] pb-5 text-[#C9FCCF] lg:text-[3.75rem] text-4xl flex ">
              Our Services
            </h1>

            <div className="md:border-l border-t md:border-t-0 border-[#00725C] solid h-full px-4 flex items-center">
              <h2 className="font-DMSans font-normal py-5 text-[#E0E0E0] text-lg">
                We believe in balancing business needs with optimal solutions,
                and we offer great technological solutions for your business,
                utilizing the best technologies for both security and user
                experience.{" "}
              </h2>
            </div>
          </div>
        </div>

        <div className="lg:mt-[-20rem] lg:grid grid-cols-3 flex flex-col lg:flex-row gap-5 px-4  lg:px-48 z-100 relative">
          <div className="bg-[#FFFFFF] py-1 md:pb-14 px-6 object-contain rounded-lg  shadow-lg">
            <Image src={Painter} alt="Painter" className="" />
            <p className="text-[#162D1B] text-lg font-DMSans font-medium py-2">
              Product Design
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              User Interface & Experience
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              Design Systems & Style Guides
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              {" "}
              Branding & Brand Identity
            </p>
          </div>
          <div className="bg-[#FFFFFF] py-1 md:pb-14 px-6 object-contain rounded-lg  shadow-lg">
            <Image src={Science4} alt="Painter" className="xl:w-[17rem] xl:h-[17rem] w-[9.5rem] h-[9.5rem]" />
            <p className="text-[#162D1B] text-lg font-DMSans font-medium py-2">
              Engineering
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              Frontend Development
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              Backend & API{" "}
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              Mobile App Development{" "}
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              AI & Machine Learning
            </p>
          </div>
          <div className="bg-[#FFFFFF] py-1  md:pb-14 px-6 object-contain rounded-lg  shadow-lg">
            <Image src={BusinessPlan} alt="Painter" className="" />
            <p className="text-[#162D1B] text-lg font-DMSans font-medium py-2">
              Big Data Analysis
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              Data Visualization
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              Ad-Hoc Analysis{" "}
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              Machine Learning
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-stretch">
        <div className="lg:pt-20  pb-6 md:pb-12  pt-14 clip-your flex flex-col relative w-full">
          <div className="flex  flex-col md:flex-row items-center  px-4  lg:px-48 gap-5">
            <h1 className="font-DMSans font-bold  lg:leading-[4.5rem] pb-5 text-[#005F56] lg:text-[3.75rem] text-4xl flex ">
              Our Partners
            </h1>

            <div className="md:border-l border-t md:border-t-0 border-[#00725C] solid h-full px-4 flex items-center">
              <h2 className="font-DMSans font-normal py-5 text-[#869AB8] text-lg">
                By partnering with the best technology providers in the world,
                we can offer our customers the best solutions for their needs.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex  items-center flex-col md:flex-row  justify-between  mx-4  lg:mx-48 xl:gap-14 lg:gap-1 gap-10 pb-14">
          <Image src={aws} alt="marketList" className="" />
          <Image src={goggle} alt="marketList" className="" />
          <Image src={sap} alt="marketList" className="" />
          <Image src={relic} alt="marketList" className="" />
        </div>
      </div>

      <div className="relative bg-white">
        <div className="lg:pt-16 xl:pb-[30rem] lg:pb-[19rem] lg:mb-[10rem]  pb-20  pt-14 clip-your-needful-style flex flex-col relative bg-[#005F56] w-full">
        <div className="hidden md:block absolute z-10 -bottom-0  bg-[url(/Vector2.png)] h-[50rem] w-full bg-center bg-cover bg-no-repeat"></div>
          <div className="flex  flex-col md:flex-row items-center  px-4  lg:px-48 gap-5">
            <h1 className="font-DMSans font-bold  lg:leading-[4.5rem] pb-5 text-[#C9FCCF] lg:text-[3.75rem] text-4xl flex ">
              Our Work
            </h1>

            <div className="md:border-l border-t md:border-t-0 border-[#00725C] solid h-full px-4 flex items-center">
              <h2 className="font-DMSans font-normal py-5 text-[#E0E0E0] text-lg">
                We design & build products for companies that enable them to
                delight their customers while servicing the goals of their
                businesses.
              </h2>
            </div>
          </div>
        </div>

        <div className="xl:mt-[-36rem] lg:mt-[-27rem] flex flex-col gap-5 px-4  lg:px-48 z-100 relative">
          <div className=" py-1 md:pb-14 px-6 rounded-lg">
            <Image
              src={bgPic}
              alt="background picture"
              className="w-full h-full"
            />
            <div className="font-DMSans font-normal py-5 md:py-8 text-[#E0E0E0] rounded-lg  text-lg shadow-lg px-6 flex items-center">
            <div className="w-full flex flex-col justify-between gap-2">
            <p className="font-DMSans font-normal text-[#869AB8] text-sm tracking-[0.4rem]">PRODUCT DESIGN & DEVELOPMENT</p> 
            <p className="font-DMSans font-bold text-[#162D1B] text-3xl">My Data Intel</p>
            </div>
            <BsArrowRightShort className="text-[#869AB8] text-4xl" />
             </div>
          </div>
        </div>


        <div className="flex lg:flex-row flex-col  lg:px-52 px-4 rounded-lg items-center lg:gap-5 gap-2">
        <div className="flex flex-col  rounded-lg h-full lg:w-2/3">
          <div className=" py-1 md:pb-14">
            <Image
              src={woman}
              alt="background picture"
              className="w-full h-full lg:h-[20rem] rounded-t-lg object-fill"
            />
            <div className="font-DMSans font-normal py-5 md:py-8 text-[#E0E0E0] rounded-lg  text-lg shadow-lg px-6 flex items-center">
            <div className="w-full flex flex-col justify-between gap-2">
            <p className="font-DMSans font-normal text-[#869AB8] text-sm tracking-[0.4rem]">PRODUCT DESIGN & DEVELOPMENT</p> 
            <p className="font-DMSans font-bold text-[#162D1B] text-3xl">Marketlist</p>
            </div>
            <BsArrowRightShort className="text-[#869AB8] text-4xl" />
             </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg h-full lg:w-1/3 ">
          <div className=" py-1 md:pb-14">
            <Image
              src={light}
              alt="background picture"
              className="w-full h-full lg:h-[20rem] rounded-t-lg object-fill"
            />
            <div className="font-DMSans font-normal py-5 md:py-8 text-[#E0E0E0] rounded-lg  text-lg shadow-lg px-6 flex items-center">
            <div className="w-full flex flex-col justify-between lg:gap-5 xl:gap-2">
            <p className="font-DMSans font-normal text-[#869AB8] text-sm tracking-[0.4rem]"> DEVELOPMENT</p> 
            <p className="font-DMSans font-bold text-[#162D1B] text-3xl">Uburu</p>
            </div>
            <BsArrowRightShort className="text-[#869AB8] text-4xl" />
             </div>
          </div>
        </div>
        </div>


        <div className="flex lg:flex-row flex-col lg:px-52 px-4 items-center xl:gap-5 gap-2">
        <div className="flex flex-col  rounded-lg h-full  lg:w-1/3">
          <div className=" py-4 h-full">
            <Image
              src={goMarketPic}
              alt="background picture"
              className="w-full h-full rounded-t-lg object-cover"
            />
            <div className="font-DMSans font-normal py-5 md:py-8 text-[#E0E0E0] rounded-lg  text-lg shadow-lg px-6 flex items-center justify-between">
            <div className="w-full flex flex-col justify-between gap-2">
            <p className="font-DMSans font-normal text-[#869AB8] text-sm tracking-[0.4rem]">DEVELOPMENT</p> 
            <p className="font-DMSans font-bold text-[#162D1B] text-3xl">GoMarket</p>
            </div>
            <BsArrowRightShort className="text-[#869AB8] text-4xl" />
             </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg h-full lg:w-2/3 shadow-lg ">
          <div className="py-9  h-full">
            <Image
              src={jandCollege}
              alt="background picture"
              className="w-full h-full  rounded-t-lg object-fill"
            />
            <div className="font-DMSans font-normal py-0 text-[#E0E0E0] rounded-lg  text-lg  px-6 flex items-center">
            <div className="w-full flex flex-col justify-between lg:gap-2">
            <p className="font-DMSans font-normal text-[#869AB8] text-sm tracking-[0.4rem]"> BRAND IDENTITY</p> 
            <p className="font-DMSans font-bold text-[#162D1B] text-3xl">Jand Concierge</p>
            </div>
            <BsArrowRightShort className="text-[#869AB8] text-4xl" />
             </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}

export default Portofolio;
