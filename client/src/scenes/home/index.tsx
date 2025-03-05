

const Home = () => {
  return (
    <div id="Home" className="relative flex justify-center items-center h-screen overflow-hidden">
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <h1 className="text-7xl">"Your Fitness Odyssey Begins Here"</h1>
        <h1 className="text-xl">ARJUN KUMAR - ONLINE FITNESS COACH</h1>
        <button className="w-fit text-sm px-7 py-2.5 text-red-600 hover:text-white border border-red-600 hover:bg-red-600 focus:ring-2 focus:ring-red-300" >Get Started</button>
      </div>
      <video className="absolute object-cover h-full w-full top-0 left-0 opacity-30 z-[-1]" autoPlay muted loop id="myVideo">
        <source src="/src/assets/gym.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Home