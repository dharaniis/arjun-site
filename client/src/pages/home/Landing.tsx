import AnchorLink from "react-anchor-link-smooth-scroll"

const Landing = () => {
  return (
    <div id="Landing" className="relative flex justify-center items-center h-screen overflow-hidden">
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <h1 className="text-[50px] leading-none md:text-7xl">"Your Fitness Odyssey Begins Here"</h1>
        <h1 className="text-sm md:text-xl">ARJUN KUMAR - ONLINE FITNESS COACH</h1>
        <AnchorLink href="#Programs" className="w-fit md:text-sm text-xs px-5 py-2 md:px-7 md:py-2.5 text-red-600 hover:text-white border border-red-600 hover:bg-red-600 focus:ring-2 focus:ring-red-300" >Get Started</AnchorLink>
      </div>
      <video className="absolute object-cover h-full w-full top-0 left-0 opacity-30 z-[-1]" playsInline={true} autoPlay={true} muted loop={true} id="myVideo">
        <source src="gym.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Landing