import ProgramCard from "../../components/ProgramCard"

type Props = {}

function Programs({}: Props) {
  return (
    <div id="Programs" className="h-fit text-center">
        <div className="text-6xl w-full inline-flex flex-nowrap border-y-4 border-red-700 overflow-hidden" id="infiniteProgram">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li className="my-4">Programs</li>
                <li className="my-4">Programs</li>
                <li className="my-4">Programs</li>
                <li className="my-4">Programs</li>
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                <li className="my-4">Programs</li>
                <li className="my-4">Programs</li>
                <li className="my-4">Programs</li>
                <li className="my-4">Programs</li>
            </ul>
        </div>
        <h1 className="m-10 text-5xl text-red-700">Explore our goal based programs</h1>
        <div className="flex justify-center gap-10">
          <ProgramCard 
            program="Fat Loss Program"
            info="Diet • BEGINNER • 30 Mins"
            image="fat2fit"
          />
          <ProgramCard 
            program="Bulking Program"
            info="Diet • BEGINNER • 45 Mins"
            image="bulking"
          />
          <ProgramCard 
            program="Body Recomposition Program"
            info="Diet • BEGINNER • 50 Mins"
            image="recomp"
          />
        </div>
    </div>
  )
}

export default Programs