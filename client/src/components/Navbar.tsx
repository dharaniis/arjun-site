import AnchorLink from "react-anchor-link-smooth-scroll"
import { ChevronDownIcon } from '@heroicons/react/24/solid'

type Props = {
  isHidden:  boolean;
  setIsHidden: (value: boolean) => void ;
  DelayHandler: any;
  setDelayHandler: (value: any) => void;
}

function Navbar({isHidden, setIsHidden, DelayHandler, setDelayHandler}: Props) {
  
  return (
    <nav className="">
        <div className="bg-[rgba(0,0,0,0.2)] w-full fixed z-30 flex items-center py-3">
            <div className="basis-1/2 px-7">
              <AnchorLink href="" className="goldman font-bold text-3xl">Arjun</AnchorLink>
            </div>
            <div className="basis-1/2 text-md flex justify-end gap-7 px-7">
              <AnchorLink href="">Home</AnchorLink>
              <AnchorLink href="">About</AnchorLink>
              <AnchorLink href="" 
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
                          <AnchorLink href="">Fat Loss</AnchorLink>
                          <AnchorLink href="">Bulking</AnchorLink>
                          <AnchorLink href="">Body Recomposition</AnchorLink>
                      </div>
                    </div>
                  )}
                </AnchorLink>
              <AnchorLink href="">Blog</AnchorLink>
              <AnchorLink href="">Contact</AnchorLink>
            </div>

        </div>

    </nav>
  )
}

export default Navbar;