import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import Plans from "../../shared/Plans";
import Testimonials from "../../shared/Testimonials";
import { ProgramDictType } from "../../shared/types";
import { useParams } from "react-router-dom";

type Props = {}

function Program({}: Props) {
    const  { programName }  = useParams() as { programName: string };;
    const programs: ProgramDictType = {
      "fatloss": {
        tagline: "Loose your belly fat & gain confidence",
        ytLink: "https://www.youtube.com/embed/LTM-tSGGhI4?si=rAoK7icjS4sdKffj"
      },
      "bulking": {
        tagline: "Get ready to pack on quality muscles",
        ytLink: "https://www.youtube.com/embed/vqTPbSIBo5k?si=x6epLrOxT2nOtxQG"
      },
      "bodyRecomposition": {
        tagline: "Loose fat and build muscles at the same time",
        ytLink: "https://www.youtube.com/embed/f4szJ_e4zsQ?si=8tGfJpIgdYSXNIyk"
      }
    };
    
    const ytLink = `${programs[programName].ytLink}`
    return (
      <div>
          <Navbar /> 
          <div className="mx-4 pt-32 space-y-5 flex flex-col gap-5 items-center text-center">
            <div className="space-y-5">
                <h1 className="leading-[2.5rem] text-4xl md:text-[55px]">{programs[programName].tagline}<br/>in just</h1>
                <h1 className="text-red-600 text-8xl md:text-[145px]">120 days</h1>
                <p className="text-sm md:text-lg font-sans">The Step-by-Step 120 days transformation program that will guide you to<br/>lose fat through home workouts or gym workouts combined with 300+ diet plans</p>
            </div>
            <button type="button" className="md:w-[50rem] w-fit text-sm md:text-xl border-2 px-3 py-2 md:px-5 md:py-2 mt-0 m-5 border-red-600 goldman hover:bg-red-600 hover:text-white">CLICK HERE TO JOIN</button>
            <div id="iframe" className="flex items-center justify-center">
                <iframe className="m-5 w-[448px] h-[252px] md:w-[672px] md:h-[378px]" width="672" height="378" src={ytLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
          <Testimonials />
          <Plans />
          <Footer />
    </div>
  )
}

export default Program