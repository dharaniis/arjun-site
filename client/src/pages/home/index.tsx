import Landing from "./Landing"
import Quote from "./Quote"

type Props = {}

function Home({}: Props) {
  return (
    <div> 
        <Landing/>
        <Quote/>
    </div>
  )
}

export default Home