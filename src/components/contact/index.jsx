// import emailjs from "@emailjs/browser";
// import { useRef } from "react";
// import { toast } from "react-toastify";

// function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault(); // prevents the page from reloading when you hit “Send”

//     emailjs
//       .sendForm(
//         "service_in8qsbd",
//         "template_jmror3b",
//         form.current,
//         "mt0sOPqJjb7043KKw"
//       )
//       .then(
//         (result) => {
//           toast.success("Message sent successfully");
//           form.current.reset();
//         },
//         (error) => {
//           toast.error(error.message);
//         }
//       );
//   };

//   return (
//     <main className="relative flex-col flex justify-center  w-full mt-12 ">
//       <div className=" lg:h-[100vh] pb-32  lg:pb-0 lg:pt-28  pt-14 clip-your-needful-style  flex  flex-col items-center relative bg-[#005F56] w-full ">
//         <h1 className="font-DMSans font-bold  lg:leading-[4.5rem] pb-2  text-[#C9FCCF] lg:text-[3.75rem] text-4xl text-center flex tracking-wide">
//           Contact Us
//         </h1>

//         <h2 className="font-DMSans font-normal py-3 text-[#E0E0E0] text-lg text-center lg:w-[58ch]">
//           We will like to hear from you and learn about ways our services can
//           provide for your business needs.
//         </h2>
//         <div className="hidden md:block absolute z-10 top-[-5rem]  bg-[url(/Vector2.png)] h-full w-full bg-center bg-cover bg-no-repeat"></div>
//       </div>

//       <div className="xl:mt-[-29rem] lg:mt-[-29rem] flex flex-col gap-5 px-4 lg:px-20 xl:px-48 z-100 relative">
//         <div className=" py-1 bg-white md:pt-24 lg:px-3 rounded-lg lg:shadow-lg  flex justify-center items-center flex-col">
//           <h2 className="font-DMSans font-bold  lg:leading-[4.5rem] pb-2  text-[#162D1B] lg:text-[3.75rem] text-4xl text-center">
//             Get in touch with us
//           </h2>
//           <h3 className="font-DMSans font-normal py-1 text-[#869AB8] text-lg text-center">
//             Fill the form to contact us for consultation.
//           </h3>
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="font-DMSans font-normal py-5 md:py-8 text-lg justify-center items-center"
//           >
//             <div className="flex lg:flex-row flex-col justify-between gap-10  w-full">
//               <div className="flex gap-2 flex-col w-full">
//                 <p className=" font-DMSans font-bold text-sm">
//                   Full Name *
//                 </p>
//                 <input
//                   className="lg:w-[18rem] w-full h-12 border border-[#E0E0E0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005F56] focus:border-transparent placeholder:text-sm"
//                   placeholder="e.g John Doe"
//                   type="text"
//                   name="from_name"
//                 />
//               </div>
//               <div className="flex gap-2 flex-col w-full">
//                 <p className="font-DMSans font-bold text-sm">
//                   Email Address *
//                 </p>
//                 <input
//                   className="lg:w-[18rem] w-full h-12 border border-[#E0E0E0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005F56] focus:border-transparent placeholder:text-sm"
//                   placeholder="johndoe@gmail.com"
//                   type="email"
//                   name="to_name"
//                 />
//               </div>
//             </div>
//             <label className="flex gap-3 flex-col py-8 text-sm  font-DMSans font-bold ">
//               Message *
//               <textarea
//                 name="message"
//                 // defaultValue="Tell us about the project"
//                 rows={4}
//                 cols={40}
//                 placeholder="Tell us about the project"
//                 className="w-full h-48 lg:h-60 border border-[#E0E0E0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005F56]  font-normal focus:border-transparent"
//               />
//             </label>{" "}
//             <button className="flex w-fit  bg-[#00C664] rounded-lg py-2 md:py-4 px-6 mx-auto my-8 items-center">
//               <p className="font-DMSans font-bold  text-[#005F56] text-sm text-center ">
//                 Contact Us
//               </p>
//             </button>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Contact;

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import LoadingIndicator from "../LoadingIndicator";

function Contact() {
  const form = useRef();
  const [disabled, setDisabled] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    const { to_name, from_name, message } = e.target.elements;

    if (
      to_name.value === "" ||
      from_name.value === "" ||
      message.value === ""
    ) {
      toast.error("Please fill all input fields");
      return;
    }
    setDisabled(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_in8qsbd",
        "template_jmror3b",
        form.current,
        "mt0sOPqJjb7043KKw"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
          form.current.reset();
          setDisabled(false);
        },
        (error) => {
          toast.error(error.message);
          setDisabled(false);
        }
      );
  };

  return (
    <div className=" bg-white">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="font-DMSans font-normal text-lg flex flex-col gap-4 2xl:gap-12"
      >
        <div className="grid grid-cols-1 justify-between gap-4  2xl:gap-12 w-full">
          <div className="flex gap-2 flex-col w-full">
            <p className=" font-DMSans font-bold text-sm">
              Full Name <span className="text-red-600">*</span>
            </p>
            <input
              required
              className=" w-full  border border-[#E0E0E0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005F56] focus:border-transparent placeholder:text-sm"
              placeholder="e.g John Doe"
              type="text"
              name="from_name"
            />
          </div>
          <div className="flex gap-2 flex-col w-full">
            <p className="font-DMSans font-bold text-sm">
              Email Address <span className="text-red-600">*</span>
            </p>
            <input
              required
              className=" w-full border border-[#E0E0E0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005F56] focus:border-transparent placeholder:text-sm"
              placeholder="johndoe@gmail.com"
              type="email"
              name="to_name"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="flex gap-3 flex-col text-sm  font-DMSans font-bold w-full ">
            <p>
              Message<span className="text-red-600 text"> *</span>
            </p>
            <textarea
              required
              name="message"
              // defaultValue="Tell us about the project"
              rows={4}
              cols={40}
              placeholder="Tell us about the project"
              className="w-full  border border-[#E0E0E0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005F56]  font-normal focus:border-transparent"
            />
          </label>
        </div>
        <button
          disabled={disabled === true}
          className="flex w-fit  bg-[#00C664] rounded-lg py-2 md:py-4 px-10 mx-auto my-2 items-center gap-3 disabled:opacity-50"
        >
          <p className="font-DMSans font-bold  text-[#005F56] text-sm text-center ">
            Contact Us
          </p>
          {disabled ? <LoadingIndicator /> : ""}
        </button>
      </form>
    </div>
  );
}

export default Contact;
