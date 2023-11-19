import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { useState } from "react";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ToastContainer />
      <NavBar open={open} setOpen={setOpen} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
