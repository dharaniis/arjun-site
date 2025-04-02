import { useState } from "react"
import AboutMe from "./AboutMe"
import ContactUs from "./ContactUs"
import Landing from "./Landing"
import Plans from "./Plans"
import Programs from "./Programs"
import Quote from "./Quote"
import Testimonials from "./Testimonials"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"

type Props = {}

function Home({}: Props) {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [DelayHandler, setDelayHandler] = useState<any>(null);

  return (
    <div>
        <Navbar 
          isHidden={isHidden}
          setIsHidden={setIsHidden}
          DelayHandler={DelayHandler}
          setDelayHandler={setDelayHandler}
        /> 
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