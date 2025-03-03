import { useState } from "react";
import Navbar from "./scenes/navbar"

function App() {
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
    </div>
  )
}

export default App
