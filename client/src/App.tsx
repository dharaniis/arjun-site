import { useState } from "react";
import Navbar from "./scenes/navbar"
import Home from "./scenes/home";

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
        <Home/>
    </div>
  )
}

export default App
