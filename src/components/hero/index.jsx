import Image from "next/image";
import download from "../../../public/download.png";
import marketList from "../../../public/marketList.png";
import goMarket from "../../../public/goMarket.png";
import voya from "../../../public/voya.png";
import myNada from "../../../public/myNada.png";
import eMenu from "../../../public/eMenu.png";

function Hero() {
  return (
    <main className="relative flex-col flex justify-center  w-full mt-12 ">
    <div className="lg:pt-16 lg:pb-32 pb-28  pt-14 clip-your-needful-style  flex justify-center flex-col items-center relative bg-[#005F56] w-full ">
    <h1 className="font-DMSans font-bold  lg:leading-[4.5rem] pb-5 text-[#C9FCCF] lg:text-[3.75rem] text-4xl text-center lg:w-[18ch] flex ">We solve real business problems.</h1>

<h2 className="font-DMSans font-normal py-5 text-[#E0E0E0] text-lg text-center lg:w-[52ch]">We handle the research, product design and development cycle of business technology so that entrepreneurs can focus on business logic and management.</h2>
<div className="hidden md:block absolute z-10 -bottom-36  bg-[url(/Vector2.png)] h-[50rem] w-full bg-center bg-cover bg-no-repeat"></div>
    </div>
<div className="relative">
<Image priority={true} src={download} alt="download" className="w-[5rem] h-[5rem] lg:w-[6.5rem] lg:h-[6.5rem] object-contain absolute bottom-[1rem]  lg:right-[47%] lg:left-[47%] right-[42%] left-[42%]" />
</div>
<div className="flex flex-col items-center md:items-stretch">
<div className="grid grid-cols-2 md:flex items-center flex-col md:flex-row justify-around mx-4 lg:mx-20 xl:mx-48 xl:gap-14 lg:gap-1 gap-3 ">
  <Image src={marketList} alt="marketList" className="w-[3rem] h-[3rem] object-contain"priority={true} />
  <Image src={goMarket} alt="marketList" className="w-[5rem] h-[5rem] object-contain" priority={true}/>
  <Image src={myNada} alt="marketList" className="w-[5rem] h-[5rem] object-contain" priority={true}/>
  <Image src={voya} alt="marketList" className="w-[7rem] h-[7rem] object-contain" priority={true}/>
  <Image src={eMenu} alt="marketList" className="w-[5rem] h-[5rem] object-contain" priority={true}/>
  <Image src={goMarket} alt="marketList" className="w-[5rem] h-[5rem] object-contain" priority={true}/>
  <Image src={marketList} alt="marketList" className="w-[3rem] h-[3rem] object-contain" priority={true}/>
  <Image src={myNada} alt="marketList" className="w-[5rem] h-[5rem] object-contain" priority={true}/>
</div>
<div className="grid grid-cols-2 md:flex  items-center flex-col md:flex-row  justify-around  mx-4  lg:mx-20 xl:mx-48 xl:gap-14 lg:gap-1 gap-3 border-b-2 border-[#EEEEEE] solid pb-12">
  <Image src={voya} alt="marketList" className="w-[7rem] h-[7rem] object-contain" priority={true}/>
  <Image src={myNada} alt="marketList" className="w-[5rem] h-[5rem] object-contain" priority={true}/>
  <Image src={goMarket} alt="marketList" className="w-[3rem] h-[3rem] object-contain" priority={true}/>
  <Image src={marketList} alt="marketList" className="w-[3rem] h-[3rem] object-contain" priority={true}/>
  <Image src={myNada} alt="marketList" className="w-[5rem] h-[5rem] object-contain" priority={true}/>
  <Image src={goMarket} alt="marketList" className="w-[5rem] h-[5rem] object-contain" priority={true}/>
  <Image src={marketList} alt="marketList" className="w-[3rem] h-[3rem] object-contain" priority={true}/>
  <Image src={eMenu} alt="marketList" className="w-[5rem] h-[5rem] object-contain" priority={true}/>
</div>
</div>

    </main>
  )
}

export default Hero
