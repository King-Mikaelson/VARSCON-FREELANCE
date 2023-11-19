import Image from "next/image";
import software from "../../../public/software.png";
import marketing from "../../../public/marketing.png";
import hiring from "../../../public/hiring.png";

import { BsArrowRightShort } from "react-icons/bs";

import { useRouter } from "next/router";
import Img1 from "../../../public/Img1.png";
import Img2 from "../../../public/Img2.png";
import Img3 from "../../../public/Img3.png";
import Img4 from "../../../public/Img4.png";
import Img5 from "../../../public/Img5.png";
import Img6 from "../../../public/Img6.png";
import Img7 from "../../../public/Img7.png";
import Img8 from "../../../public/Img8.png";
import Link from "next/link";

const ImgArr = [
  {
    img: Img1,
    name: "Kosi Nzeako",
    role: "Developer",
  },
  {
    img: Img2,
    name: "Agu Nzeako",
    role: "Developer",
  },
  {
    img: Img3,
    name: "Kosi Nzeako",
    role: "Developer",
  },
  {
    img: Img4,
    name: "Kosi Nzeako",
    role: "Developer",
  },
  {
    img: Img5,
    name: "Kosi Nzeako",
    role: "Developer",
  },
  {
    img: Img6,
    name: "Kosi Nzeako",
    role: "Developer",
  },
  {
    img: Img7,
    name: "Kosi Nzeako",
    role: "Developer",
  },
  {
    img: Img8,
    name: "Kosi Nzeako",
    role: "Developer",
  },
];

function Portofolio() {
  const router = useRouter();

  return (
    <main className="relative flex-col flex justify-center  w-full mt-12 ">
      <div className="relative bg-white">
        <div className="lg:pt-16 lg:pb-[24rem] pb-20  pt-14 clip-your-needful-style flex flex-col relative bg-[#005F56] w-full">
          <div className="hidden md:block absolute z-10 -bottom-0  bg-[url(/Vector2.png)] h-[50rem] w-full bg-center bg-cover bg-no-repeat"></div>
          <div className="flex  flex-col md:flex-row items-center  px-4 lg:px-20 xl:px-48 gap-5">
            <h1 className="font-DMSans font-bold  lg:leading-[4.5rem] pb-5 text-[#C9FCCF] lg:text-[3.75rem] text-4xl flex ">
              Our Services
            </h1>

            <div className="md:border-l border-t md:border-t-0 border-[#00725C] solid h-full px-4 flex items-center">
              <h2 className="font-DMSans font-normal py-5 text-[#E0E0E0] text-lg">
                Varscon is where excellence embraces innovation. We specialise
                in a trifecta of services geared towards elevating your
                business. Discover what is possible when OUR EXPERTISE meets
                YOUR AMBITION.
              </h2>
            </div>
          </div>
        </div>

        <div className="lg:mt-[-20rem] lg:grid grid-cols-3 flex flex-col lg:flex-row gap-5 px-4  lg:px-20 xl:px-48 z-100 relative">
          <div className="bg-[#FFFFFF] py-8  px-6 object-contain rounded-lg  shadow-lg">
            <Image src={software} alt="software" className="" priority={true} />
            <p className="text-[#162D1B] text-lg font-DMSans font-medium py-2">
              DevShop
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
              Technical building services that supersede your business needs and
              expectations.{" "}
            </p>

            <div className="flex py-4">
              <Link
                href={"/devShop"}
                className="flex  bg-[#00C664] rounded-lg justify-between py-2 px-6 items-center"
              >
                <p className="font-DMSans font-bold  text-[#005F56] text-sm text-center ">
                  Contact Us
                </p>
                <BsArrowRightShort className="text-[#005F56] text-4xl" />
              </Link>
            </div>
          </div>
          <div className="bg-[#FFFFFF] py-8  px-6 object-contain rounded-lg  shadow-lg">
            <Image src={marketing} alt="software" priority={true} />
            <p className="text-[#162D1B] text-lg font-DMSans font-medium py-2">
              Technical Advisory
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
            Harness the power of consulting elite senior managers in scaling your business needs.
            </p>

            <div className="flex  py-4">
              <Link
                href={"/advisory"}
                className="flex  bg-[#00C664] rounded-lg justify-between py-2 px-6 items-center"
              >
                <p className="font-DMSans font-bold  text-[#005F56] text-sm text-center ">
                  Explore
                </p>
                <BsArrowRightShort className="text-[#005F56] text-4xl" />
              </Link>
            </div>
          </div>
          <div className="bg-[#FFFFFF] py-8 px-6 object-contain rounded-lg  shadow-lg">
            <Image src={hiring} alt="software" className="" priority={true} />
            <p className="text-[#162D1B] text-lg font-DMSans font-medium py-2">
              HireUp
            </p>
            <p className="text-[#869AB8] text-[15px] font-DMSans font-normal">
            Recruit efficiently, manage, and nurture engineering teams to propel your projects.
            </p>

            <div className="flex py-4">
              <Link
                href={"/recruitment"}
                className="flex  bg-[#00C664] rounded-lg justify-between py-2 px-6 items-center"
              >
                <p className="font-DMSans font-bold  text-[#005F56] text-sm text-center ">
                  Explore
                </p>
                <BsArrowRightShort className="text-[#005F56] text-4xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <main className="relative flex-col flex  lg:mt-32 mt-12   w-full px-4  lg:px-16  ">
        <div className=" lg:pb-20  pt-14  flex flex-col relative  w-full">
          <div className="flex  flex-col items-center  px-4 lg:px-20 xl:px-48 gap-5">
            <h1 className="font-DMSans font-bold lg:leading-[4.5rem]   lg:text-[3.75rem] text-4xl flex ">
              Meet the team
            </h1>
            <h2 className="font-DMSans font-normal pb-5  text-lg">
              Top team members you will have direct contact with for your
              project.
            </h2>
          </div>

          <div className="grid lg:grid-cols-4  grid-cols-2 gap-y-6">
            {ImgArr.map((data, index) =>
              index % 2 ? (
                <div
                  key={index}
                  className="w-full lg:-mb-36 -mb-8  flex flex-col relative justify-center items-center"
                >
                  <Image
                    alt="profile"
                    src={data.img}
                    className="w-full h-full object-contain"
                  />
                  <p className="font-DMSans font-semibold text-xl absolute lg:bottom-16 bottom-5">
                    {data.name}
                  </p>
                  <p className=" absolute lg:bottom-9 bottom-0">{data.role}</p>
                </div>
              ) : (
                <div
                  key={index}
                  className="w-full flex flex-col gap-1 justify-center items-center"
                >
                  <Image
                    src={data.img}
                    className="w-full h-full"
                    alt="profile"
                  />
                  <p className="font-DMSans font-semibold text-xl">
                    {data.name}
                  </p>
                  <p>{data.role}</p>
                </div>
              )
            )}
          </div>
        </div>
      </main> */}

      {/* <div className="flex flex-col items-center md:items-stretch">
        <div className="lg:pt-20  pb-6 md:pb-12  pt-14 clip-your flex flex-col relative w-full">
          <div className="flex  flex-col md:flex-row items-center  px-4  lg:px-20 xl:px-48 gap-5">
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
        <div className="grid grid-cols-2 md:flex  items-center  justify-between  mx-4  lg:mx-48 xl:gap-14 lg:gap-1 gap-16 pb-14">
          <Image src={aws} alt="marketList" className="" priority={true}/>
          <Image src={goggle} alt="marketList" className=""  priority={true}/>
          <Image src={sap} alt="marketList" className=""  priority={true}/>
          <Image src={relic} alt="marketList" className=""  priority={true}/>
        </div>
      </div>

      <div className="relative bg-white">
        <div className="lg:pt-16 xl:pb-[30rem] lg:pb-[19rem] lg:mb-[10rem]  pb-20  pt-14 clip-your-needful-style flex flex-col relative bg-[#005F56] w-full">
        <div className="hidden md:block absolute z-10 -bottom-0  bg-[url(/Vector2.png)] h-[50rem] w-full bg-center bg-cover bg-no-repeat"></div>
          <div className="flex  flex-col md:flex-row items-center  px-4  lg:px-20 xl:px-48 gap-5">
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

        <div className="xl:mt-[-36rem] lg:mt-[-27rem] flex flex-col gap-5 px-4 lg:px-20 xl:px-48 z-100 relative">
          <div className=" py-1 md:pb-14 lg:px-3 rounded-lg">
            <Image
              src={bgPic}
              alt="background picture"
              className="w-full h-full"
              priority={true}
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


        <div className="flex lg:flex-row flex-col  lg:px-24 xl:px-52 px-4 rounded-lg items-center lg:gap-5 gap-2">
        <div className="flex flex-col  rounded-lg h-full lg:w-2/3 w-full">
          <div className=" py-1 md:pb-14">
            <Image
              src={woman}
              alt="background picture"
              className="w-full h-full lg:h-[20rem] rounded-t-lg object-fill"
              priority={true}

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
        <div className="flex flex-col rounded-lg h-full lg:w-1/3 w-full ">
          <div className=" py-1 md:pb-14">
            <Image
              src={light}
              alt="background picture"
              className="w-full h-full lg:h-[20rem] rounded-t-lg object-fill"
              priority={true}
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


        <div className="flex lg:flex-row flex-col lg:px-24 xl:px-52 px-4 items-center xl:gap-5 gap-2">
        <div className="flex flex-col  rounded-lg h-full  lg:w-1/3 w-full">
          <div className=" py-4 h-full">
            <Image
              src={goMarketPic}
              alt="background picture"
              className="w-full h-full rounded-t-lg object-cover8
              priority={true}

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

        <div className="flex flex-col rounded-lg h-full lg:w-2/3 shadow-lg w-full ">
          <div className="py-9  h-full">
            <Image
              src={jandCollege}
              alt="background picture"
              className="w-full h-full  rounded-t-lg object-fill"
              priority={true}
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
      </div> */}
    </main>
  );
}

export default Portofolio;
