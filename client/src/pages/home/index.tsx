import AboutMe from "./AboutMe"
import Landing from "./Landing"
import Quote from "./Quote"

type Props = {}

function Home({}: Props) {
  return (
    <div> 
        <Landing/>
        <Quote/>
        <AboutMe/>
    </div>
  )
}

export default Home