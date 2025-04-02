import AboutMe from "./AboutMe"
import ContactUs from "./ContactUs"
import Landing from "./Landing"
import Plans from "./Plans"
import Programs from "./Programs"
import Quote from "./Quote"
import Testimonials from "./Testimonials"

type Props = {}

function Home({}: Props) {
  return (
    <div> 
        <Landing/>
        <Quote/>
        <AboutMe/>
        <Programs/>
        <Plans/> 
        <Testimonials/>
        <ContactUs />
    </div>
  )
}

export default Home