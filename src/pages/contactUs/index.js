import NavBar from "@/components/NavBar"
import Contact from "@/components/contact"
import { useRouter } from "next/router"
function ContactUs() {
    const router = useRouter()
  return (
    <div>
    {/* <NavBar/> */}
    <Contact/>
    </div>
  )
}

export default ContactUs