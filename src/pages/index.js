import Cta from "@/components/cta";
import Hero from "@/components/hero";
import Portofolio from "@/components/portofolio";
import Carousel from "@/components/swiper";
import Head from "next/head";
import { DM_Sans } from "next/font/google";
import Brands from "@/components/brands";

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
      <Hero
        header={"Tech Solutions for Business Growth"}
        description={
          "Technical support and custom solutions that drive unprecedented growth and success. Relax and watch us revolutionise your business now!"
        }
      />
      <Brands />
      <Carousel />
      <Portofolio />
      <Cta />
    </main>
  );
}
