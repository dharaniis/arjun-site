type Props = {}

function Footer({}: Props) {
  return (
    <div className="relative bg-red-600 text-black text-center font-bold font-sans">
        <div className="grid grid-cols-5 justify-center items-center p-16">
            <div className="flex justify-start">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Programs</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="col-span-3">
                <a className="text-10xl goldman">Arjun</a>
            </div>
            <div className="flex justify-end">
                <ul>
                    <li className="font-bold text-xl"><span className="border-b-2 border-black">Programs</span></li>
                    <li><a>Fatloss</a></li>
                    <li><a>Bulking</a></li>
                    <li><a>Body Recomposition</a></li>
                </ul>
            </div>
            <h1 className="w-fit absolute bottom-2 left-0 right-0 mx-auto text-xs">© 2035 by Arjun Kumar. Powered and secured by Dharani I S</h1>
        </div>
    </div>
  )
}

export default Footer