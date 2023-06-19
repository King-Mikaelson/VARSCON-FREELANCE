import Image from "next/image";
import bgPic from "../../../public/bgPic.png";
import { BsArrowRightShort } from "react-icons/bs";

function Contact() {
  return (
    <main className="relative flex-col flex justify-center  w-full mt-12 ">
      <div className=" h-[100vh] pb-20 lg:pb-0 lg:pt-28  pt-14 clip-your-needful-style  flex  flex-col items-center relative bg-[#005F56] w-full ">
        <h1 className="font-DMSans font-bold  lg:leading-[4.5rem] pb-2  text-[#C9FCCF] lg:text-[3.75rem] text-4xl text-center flex tracking-wide">
          Contact Us
        </h1>

        <h2 className="font-DMSans font-normal py-3 text-[#E0E0E0] text-lg text-center lg:w-[58ch]">
          We will like to hear from you and learn about ways our services can
          provide for your business needs.{" "}
        </h2>
        <div className="hidden md:block absolute z-10 top-24  bg-[url(/Vector2.png)] h-[50rem] w-full bg-center bg-cover bg-no-repeat"></div>
      </div>

      <div className="xl:mt-[-29rem] lg:mt-[-29rem] flex flex-col gap-5 px-4 lg:px-20 xl:px-48 z-100 relative">
        <div className=" py-1 bg-white md:pt-24 lg:px-3 rounded-lg shadow-lg  flex justify-center items-center flex-col">
          <h2 className="font-DMSans font-bold  lg:leading-[4.5rem] pb-2  text-[#162D1B] lg:text-[3.75rem] text-4xl text-center">
            Get in touch with us
          </h2>
          <h3 className="font-DMSans font-normal py-1 text-[#869AB8] text-lg text-center">
            Fill the form to contact us for consultation.
          </h3>
          <form className="font-DMSans font-normal py-5 md:py-8 text-lg justify-center items-center">
            <div className="flex justify-between gap-10  w-full">
              <div className="flex gap-2 flex-col w-full">
                <p className="text-[#162D1B] font-DMSans font-bold text-sm">
                  Full Name *
                </p>
                <input
                  className="lg:w-[18rem] w-full h-12 border border-[#E0E0E0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005F56] focus:border-transparent"
                  type="text"
                  placeholder="e.g John Doe"
                />
              </div>
              <div className="flex gap-2 flex-col w-full">
                <p className="text-[#162D1B] font-DMSans font-bold text-sm">
                  Email Address *
                </p>
                <input
                  className="lg:w-[18rem] w-full h-12 border border-[#E0E0E0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005F56] focus:border-transparent"
                  type="text"
                  placeholder="johndoe@gmail.com"
                />
              </div>
            </div>
            <label className="flex gap-3 flex-col py-8">
            Message *
              <textarea
                name="postContent"
                defaultValue="Tell us about the project"
                rows={4}
                cols={40}
                className="w-full h-32 lg:h-60 border border-[#E0E0E0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005F56] focus:border-transparent"
              />
            </label>{" "}
            <button className="flex w-fit  bg-[#00C664] rounded-lg py-2 md:py-4 px-6 mx-auto my-8 items-center">
              <p className="font-DMSans font-bold  text-[#005F56] text-sm text-center ">
                Contact Us
              </p>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
