import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { useState } from 'react';
import Footer from '@/components/footer';


export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  return (
    <>
  <NavBar open={open} setOpen={setOpen}  />
  <Component {...pageProps} />
  <Footer/>
    </>
    
  )
}
