// import Cta from '@/components/cta';
// import Hero from '@/components/hero';
// import Portofolio from '@/components/portofolio';
// import Carousel from '@/components/swiper';
// import Head from 'next/head';
// import { DM_Sans } from 'next/font/google'
// import Brands from '@/components/brands';

// const dmSans = DM_Sans(
//   {subsets: ['latin'],
//   variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900',],
//   variable: '--font-dmSans',
//   weight: ['400', '500', '700'],
//   style: ['normal'],
// })
// export default function Home() {
//   return (
//     <main className={`bg-[#FFFFFF] flex flex-col ${dmSans.className}`} >
//       <Head>
//         <title>Varscon</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
//         <meta name="keywords" content="Gomarket, Tech, startup, Voya, eMenu, MarketList" />
//         <meta name="description" content="We handle the research, product design and development cycle of business technology so that entrepreneurs can focus on business logic and management."></meta>
//         <meta property="og:title" content="Varscon" />
//         <meta property="og:url" content="https://varscongroup.com/" />
//         <meta charSet="utf-8"></meta>
//         <link rel="icon" href="/favicon.ico"></link>
//      </Head>
//       <Hero header={"Tech Solutions for Business Growth"} description={"Technical support and custom solutions that drive unprecedented growth and success. Relax and watch us revolutionise your business now!"}/>
//       <Brands/>
//       <Carousel/>
//       <Portofolio/>
//       <Cta/>
//     </main>
//   )
// }

import Head from "next/head";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import UnderConstruction from "../../public/UnderConstruction3.jpg";
import Contact from "@/components/contact";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variants: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dmSans",
  weight: ["400", "500", "700"],
  style: ["normal"],
});
export default function Home() {
  return (
    <main className={`bg-[#FFFFFF] flex flex-col ${dmSans.className}`}>
      <Head>
        <title>Varscon</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="keywords"
          content="Gomarket, Tech, startup, Voya, eMenu, MarketList"
        />
        <meta
          name="description"
          content="We handle the research, product design and development cycle of business technology so that entrepreneurs can focus on business logic and management."
        ></meta>
        <meta property="og:title" content="Varscon" />
        <meta property="og:url" content="https://varscongroup.com/" />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <div className="lg:grid lg:grid-cols-2 flex flex-col h-screen  w-full ">
        <div className="flex flex-col lg:px-16 px-4 pt-12  order-2 justify-center">
          <h1 className="text-2xl font-semibold text-[#005F56]">Varscon</h1>

          <div className="mt-6 flex flex-col gap-3  ">
            <div className="w-fit h-fit ">
              <p className="text-[#00C664] py-2 px-2 rounded-2xl font-bold bg-[rgba(17,63,226,0.10)] text-sm">
                COMING SOON
              </p>
            </div>
            <h2 className="text-4xl font-bold text-black  leading-normal">
              Varscon site is under construction.
            </h2>

            <div>
              <p className="text-[rgba(10,27,89,0.60)]">
                We're putting the finishing touches on our website and getting
                ready to launch. We will like to hear from you and learn about
                ways our services can provide for your business needs.
              </p>
            </div>

            <Contact />
          </div>
        </div>
        <div>
          <Image
            src={UnderConstruction}
            alt="UnderConstruction"
            className="lg:w-full h-full order-1"
            priority={true}
          />
        </div>
      </div>
    </main>
  );
}
