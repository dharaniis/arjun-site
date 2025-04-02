import { Link } from "react-router-dom"

type Props = {}

function Footer({}: Props) {
  return (
    <div id="Footer" className="relative bg-red-600 text-black text-center font-bold font-sans">
        <div className="grid grid-cols-5 justify-center items-center p-16">
            <div className="flex justify-start">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Programs</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>
            <div className="col-span-3">
                <a href="/" className="text-10xl goldman">Arjun</a>
            </div>
            <div className="flex justify-end">
                <ul>
                    <li className="font-bold text-xl"><span className="border-b-2 border-black">Programs</span></li>
                    <li><Link to="/">Fatloss</Link></li>
                    <li><Link to="/">Bulking</Link></li>
                    <li><Link to="/">Body Recomposition</Link></li>
                </ul>
            </div>
            <h1 className="w-fit absolute bottom-2 left-0 right-0 mx-auto text-xs">© 2035 by Arjun Kumar. Powered and secured by Dharani I S</h1>
        </div>
    </div>
  )
}

export default Footer