import AboutMe from "./AboutMe"
import Landing from "./Landing"
import Programs from "./Programs"
import Quote from "./Quote"

type Props = {}

function Home({}: Props) {
  return (
    <div> 
        <Landing/>
        <Quote/>
        <AboutMe/>
        <Programs/>
    </div>
  )
}

export default Home