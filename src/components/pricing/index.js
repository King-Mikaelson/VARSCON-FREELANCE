import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Pricing() {
  return (
    <main className="bg-white h-fit flex flex-col items-center justify-center  pt-24 relative w-full px-6 lg:px-0">
      <div className="flex justify-center items-center relative md:mb-20 mb-10 gap-4 flex-col">
        <h4 className="font-sans font-bold md:text-[2.5rem] text-2xl text-center  text-[#141414]">
          <span className="text-[#005F56]">Our</span> Packages.
        </h4>
      </div>

      <div className="lg:grid-cols-[1fr,400px,1fr] grid grid-cols-1 gap-5 lg:gap-0 xl:px-48">
        <div className="p-10  pt-5 lg:h-[33rem] h-fit shadow-md border-[0.4px] lg:border-r-0 border-[#005F56] border-solid rounded-xl lg:rounded-br-none lg:rounded-tr-none z-0 self-center  flex flex-col">
          <h3 className="font-sans font-medium text-2xl  text-[#141414] pb-6">
            Basic
          </h3>
          <div className="flex flex-col gap-1 pb-5">
            <h4 className="font-sans font-bold text-[2.5rem]  text-[#141414]">
              Free
            </h4>
            <p className="font-sans font-medium text-xl">
              Full access to any of the following services
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-2">
              <IoMdCheckmarkCircleOutline size={20} color={"#005F56"} />
              <p className="font-sans font-medium text-sm">Talent sourcing</p>
            </div>
            <div className="flex gap-2">
              <IoMdCheckmarkCircleOutline size={20} color={"#005F56"} />
              <p className="font-sans font-medium text-sm">
                World-class referrals
              </p>
            </div>
            <div className="flex gap-2">
              <IoMdCheckmarkCircleOutline size={20} color={"#005F56"} />
              <p className="font-sans font-medium text-sm">Hiring advisory</p>
            </div>
            <div className="flex gap-2">
              <IoMdCheckmarkCircleOutline size={20} color={"#005F56"} />
              <p className="font-sans font-medium text-sm">
                Technical outsourcing
              </p>
            </div>
          </div>
          <div className="flex py-4 justify-center">
            <button className="flex  bg-[#005F56] rounded-lg justify-between py-2 px-6 items-center">
              <Link
                href={"/recruitment"}
                className="font-DMSans font-bold  text-white text-sm text-center "
              >
                Get Started
              </Link>
              <BsArrowRightShort className=" text-white text-4xl" />
            </button>
          </div>
        </div>

        <div className=" pt-5 lg:px-10 p-10 lg:h-[40rem] h-fit border-[#FFF] border-solid rounded-xl  flex justify-center flex-col  shadow-lg box text-[#FFF] z-20 bg-[#005F56]">
          <h3 className="font-sans font-medium text-2xl pb-6">Professional</h3>
          <div className="flex flex-col gap-1 pb-6">
            <h4 className="font-sans font-bold text-[2.5rem]">$15/month</h4>
            <p className="font-sans font-medium text-xl w-[18ch]">
              Full access to any of the following services
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-2">
              <IoMdCheckmarkCircleOutline size={20} className="text-white" />
              <p className="font-sans font-medium text-sm">Talent sourcing</p>
            </div>
            <div className="flex gap-2">
              <IoMdCheckmarkCircleOutline size={20} className="text-white" />
              <p className="font-sans font-medium text-sm">
                World-class referrals
              </p>
            </div>
            <div className="flex gap-2">
              <IoMdCheckmarkCircleOutline size={20} className="text-white" />
              <p className="font-sans font-medium text-sm">Hiring advisory</p>
            </div>
            <div className="flex gap-2">
              <IoMdCheckmarkCircleOutline size={20} className="text-white" />
              <p className="font-sans font-medium text-sm">
                Technical outsourcing
              </p>
            </div>
          </div>
          <p className="font-sans font-medium text-sm  pt-4">
            Free hiring advisory services
          </p>
          <p className="font-sans font-medium text-sm py-2">
            Exclusive access to our talent pool
          </p>
          <p className="font-sans font-medium text-sm  ">
            One month of free complimentary services (T&Cs apply)
          </p>

          <div className="flex py-4 justify-center">
            <button className="flex  bg-white rounded-lg justify-between py-2 px-6 items-center">
              <Link
                href={"/recruitment"}
                className="font-DMSans font-bold  text-[#005F56] text-sm text-center "
              >
                Get Started
              </Link>
              <BsArrowRightShort className="text-[#005F56] text-4xl" />
            </button>
          </div>
        </div>

        <div className="p-10 pt-5 lg:h-[33rem] h-fit shadow-md border-[0.4px] lg:border-l-0 border-[#005F56] border-solid rounded-xl z-0 self-center  lg:rounded-bl-none lg:rounded-tl-none">
          <h3 className="font-sans font-medium text-2xl  text-[#141414] pb-6">
            Teams
          </h3>
          <div className="flex flex-col gap-1 pb-5">
            <h4 className="font-sans font-bold text-[2.5rem]  text-[#141414]">
              $25/month
            </h4>
            <p className="font-sans font-medium text-xl">
              Full access to any of the following services
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-2">
              <IoMdCheckmarkCircleOutline size={20} color={"#005F56"} />
              <p className="font-sans font-medium text-sm">Talent sourcing</p>
            </div>
            <div className="flex gap-2">
              <IoMdCheckmarkCircleOutline size={20} color={"#005F56"} />
              <p className="font-sans font-medium text-sm">
                World-class referrals
              </p>
            </div>
            <div className="flex gap-2">
              <IoMdCheckmarkCircleOutline size={20} color={"#005F56"} />
              <p className="font-sans font-medium text-sm">Hiring advisory</p>
            </div>
            <div className="flex gap-2">
              <IoMdCheckmarkCircleOutline size={20} color={"#005F56"} />
              <p className="font-sans font-medium text-sm">
                Technical outsourcing
              </p>
            </div>
          </div>
          {/* <p className="font-sans font-medium text-sm  pt-4">One month of free complimentary services (T&Cs apply)</p> */}

          <div className="flex py-4 justify-center">
            <button className="flex  bg-[#005F56] rounded-lg justify-between py-2 px-6 items-center">
              <Link
                href={"/recruitment"}
                className="font-DMSans font-bold   text-white text-sm text-center "
              >
                Get Started
              </Link>
              <BsArrowRightShort className=" text-white text-4xl" />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center items-center my-16 mb-24 gap-4 flex-col md:flex-row">
          <div className="border solid border-[#0065FE] rounded-full px-7 py-[0.65rem]">
            <Link
              className="text-[#0065FE] text-base font-sans font-semibold"
              href={"/"}
            >
             Get Custom Pricing
            </Link>
          </div>

          <div className="text-base bg-[#0065FE]  px-10 py-[0.65rem] flex justify-center items-center rounded-full">
            <Link
              className=" text-[#FFF] text-base font-sans font-semibold "
              href={"/"}
            >
             Select Pricing
            </Link>
          </div>
     </div> */}
    </main>
  );
}

export default Pricing;
