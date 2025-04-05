import { useState } from "react"
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';

type Props = {
}

function Navbar({}: Props) {
  const [IsProgramsToggled, setIsProgramsToggled] = useState<boolean>(false);
  const [DelayHandler, setDelayHandler] = useState<any>(null);
  const [IsMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navBg = !isAboveMediumScreens && IsMenuToggled ? "bg-red-600": "bg-[rgba(0,0,0,0.2)]";
  return (
    <nav id="Navbar" className="">
        <div className={`${navBg} w-full fixed z-30 flex items-center py-3`}>
            <div className="basis-1/2 px-7">
              <a href="/" className="goldman font-bold text-3xl">Arjun</a>
            </div>
            {isAboveMediumScreens? (
            <div className="basis-1/2 text-md flex justify-end gap-7 px-7">
              <Link to="/" >Home</Link>
              <Link to="/about" >About</Link>
              <p
                className="relative flex gap-2 items-center"
                onMouseEnter={ ()=>setIsProgramsToggled(true) } 
                onMouseLeave={ ()=> {
                  setDelayHandler(setTimeout(()=> setIsProgramsToggled(false), 500));
                } }
                >
                  Programs
                  <ChevronDownIcon className="size-4"/>
                  {IsProgramsToggled && (  
                    <div className="absolute top-0 mt-7 left-0">
                      <div 
                        className="flex flex-col gap-4 py-3 pl-3 pr-7 text-left rounded-md bg-red-600/[0.9]"
                        onMouseEnter={ ()=>{
                          setIsProgramsToggled(true)
                          clearTimeout(DelayHandler)
                        }} 
                        onMouseLeave={ ()=>setIsProgramsToggled(false) }
                        >
                          <Link to="/program/fatloss">Fat Loss</Link>
                          <Link to="/program/bulking">Bulking</Link>
                          <Link to="/program/bodyRecomposition">Body Recomposition</Link>
                      </div>
                    </div>
                  )}
                </p>
              <Link to="/">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
            ): (
              <div className="basis-1/2 flex justify-end">
                <button
                  onClick={ () => setIsMenuToggled(!IsMenuToggled)}
                  className="mx-5"
                > <Bars3Icon className="size-12"/>
                </button>
              </div>
            )}
            {!isAboveMediumScreens && IsMenuToggled && (
              <div className="absolute top-0  mt-16 bg-red-600 w-full">
                <div className="py-5 flex flex-col items-center gap-5 text-xl">
                  <Link to="/" >Home</Link>
                  <Link to="/about" >About</Link>
                  <span>
                    <button 
                      className="flex gap-2 items-center"
                      onClick={() => {setIsProgramsToggled(!IsProgramsToggled)}}
                      >Programs 
                      <ChevronDownIcon className="size-4"/>
                      </button>
                    </span>
                  {IsProgramsToggled && (
                    <div className="flex flex-col shadow-lg p-2 gap-2 text-lg items-center">
                      <Link to="/program/fatloss">Fat Loss</Link>
                      <Link to="/program/bulking">Bulking</Link>
                      <Link to="/program/bodyRecomposition">Body Recomposition</Link>
                    </div>
                  )}
                  <Link to="/">Blog</Link>
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar;