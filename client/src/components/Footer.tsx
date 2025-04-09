import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {}

function Footer({}: Props) {
  return (
    <div id="Footer" className="relative bg-red-600 text-black text-center font-bold font-sans">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-5 justify-center items-center p-16">
            <div className="flex justify-center  md:justify-start">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><AnchorLink href="#Programs">Programs</AnchorLink></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="md:col-span-3 order-first md:order-none">
                <a href="/" className="text-8xl md:text-10xl goldman">Arjun</a>
            </div>
            <div className="flex justify-center md:justify-end">
                <ul>
                    <li className="font-bold text-xl"><span className="border-b-2 border-black">Programs</span></li>
                    <li><a href="/program/fatloss">Fatloss</a></li>
                    <li><a href="/program/bulking">Bulking</a></li>
                    <li><a href="/program/bodyRecomposition">Body Recomposition</a></li>
                </ul>
            </div>
            <h1 className="w-fit absolute bottom-2 left-0 right-0 mx-auto text-xs">© 2035 by Arjun Kumar. Powered and secured by Dharani I S</h1>
        </div>
    </div>
  )
}

export default Footer