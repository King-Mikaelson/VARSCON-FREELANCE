import Image from "next/image";
import download from "../../../public/download.png";
import marketList from "../../../public/marketList.png";
import goMarket from "../../../public/goMarket.png";
import voya from "../../../public/voya.png";
import myNada from "../../../public/myNada.png";
import eMenu from "../../../public/eMenu.png";
export default function Brands() {
  return (
    <div className="relative flex-col flex justify-center  w-full">

      <div className="flex flex-col items-center md:items-stretch">
        <div className="grid grid-cols-2 md:flex items-center flex-col md:flex-row justify-around mx-4 lg:mx-20 xl:mx-48 xl:gap-14 lg:gap-1 gap-3 ">
          <Image
            src={marketList}
            alt="marketList"
            className="w-[3rem] h-[3rem] object-contain"
            priority={true}
          />
          <Image
            src={goMarket}
            alt="marketList"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={myNada}
            alt="marketList"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={voya}
            alt="marketList"
            className="w-[7rem] h-[7rem] object-contain"
            priority={true}
          />
          <Image
            src={eMenu}
            alt="marketList"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={goMarket}
            alt="marketList"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={marketList}
            alt="marketList"
            className="w-[3rem] h-[3rem] object-contain"
            priority={true}
          />
          <Image
            src={myNada}
            alt="marketList"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
        </div>
        <div className="grid grid-cols-2 md:flex  items-center flex-col md:flex-row  justify-around  mx-4  lg:mx-20 xl:mx-48 xl:gap-14 lg:gap-1 gap-3 border-b-2 border-[#EEEEEE] solid pb-12">
          <Image
            src={voya}
            alt="marketList"
            className="w-[7rem] h-[7rem] object-contain"
            priority={true}
          />
          <Image
            src={myNada}
            alt="marketList"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={goMarket}
            alt="marketList"
            className="w-[3rem] h-[3rem] object-contain"
            priority={true}
          />
          <Image
            src={marketList}
            alt="marketList"
            className="w-[3rem] h-[3rem] object-contain"
            priority={true}
          />
          <Image
            src={myNada}
            alt="marketList"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={goMarket}
            alt="marketList"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={marketList}
            alt="marketList"
            className="w-[3rem] h-[3rem] object-contain"
            priority={true}
          />
          <Image
            src={eMenu}
            alt="marketList"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
        </div>
      </div>
    </div>
  )
}
