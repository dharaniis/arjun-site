import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

type Props = {
  isHidden:  boolean;
  setIsHidden: (value: boolean) => void ;
  DelayHandler: any;
  setDelayHandler: (value: any) => void;
}

function Navbar({isHidden, setIsHidden, DelayHandler, setDelayHandler}: Props) {
  
  return (
    <nav id="Navbar" className="">
        <div className="bg-[rgba(0,0,0,0.2)] w-full fixed z-30 flex items-center py-3">
            <div className="basis-1/2 px-7">
              <a href="/" className="goldman font-bold text-3xl">Arjun</a>
            </div>
            <div className="basis-1/2 text-md flex justify-end gap-7 px-7">
              <Link to="/" >Home</Link>
              <Link to="/about" >About</Link>
              <Link to="/" 
                className="relative flex gap-2 items-center"
                onMouseEnter={ ()=>setIsHidden(false) } 
                onMouseLeave={ ()=> {
                  setDelayHandler(setTimeout(()=> setIsHidden(true), 500));
                } }
                >
                  Programs
                  <ChevronDownIcon className="size-4"/>
                  {!isHidden && (  
                    <div className="absolute top-0 mt-7 left-0">
                      <div 
                        className="flex flex-col gap-4 py-3 pl-3 pr-7 text-left rounded-md bg-red-600/[0.9]"
                        onMouseEnter={ ()=>{
                          setIsHidden(false)
                          clearTimeout(DelayHandler)
                        }} 
                        onMouseLeave={ ()=>setIsHidden(true) }
                        >
                          <Link to="/">Fat Loss</Link>
                          <Link to="/">Bulking</Link>
                          <Link to="/">Body Recomposition</Link>
                      </div>
                    </div>
                  )}
                </Link>
              <Link to="/">Blog</Link>
              <Link to="/">Contact</Link>
            </div>

        </div>

    </nav>
  )
}

export default Navbar;