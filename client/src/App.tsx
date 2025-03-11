import { useState } from "react";
import Home from "./pages/home/";
import Navbar from "./components/Navbar";

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
