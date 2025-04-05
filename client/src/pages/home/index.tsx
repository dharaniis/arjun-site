import AboutMe from "./AboutMe"
import ContactUs from "./ContactUs"
import Landing from "./Landing"
import Programs from "./Programs"
import Quote from "./Quote"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import Plans from "../../shared/Plans"
import Testimonials from "../../shared/Testimonials"

type Props = {}

function Home({}: Props) {


  return (
    <div>
        <Navbar /> 
        <Landing/>
        <Quote/>
        <AboutMe/>
        <Programs/>
        <Plans/> 
        <Testimonials/>
        <ContactUs />
        <Footer/>
    </div>
  )
}

export default Home