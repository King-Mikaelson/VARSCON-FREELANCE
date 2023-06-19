import Contact from "@/components/contact"
import { useRouter } from "next/router"
function ContactUs() {
    const router = useRouter()
  return (
    <div>
    <Contact/>
    </div>
  )
}

export default ContactUs