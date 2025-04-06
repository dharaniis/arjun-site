import JoinBtn from "./JoinBtn"

type Props = {
    id: string
    program: string,
    info: string,
    image: string
}

function ProgramCard({ id, program, info, image }: Props) {
  return (
    <div className="w-84 md:w-96 rounded-lg overflow-hidden bg-gray-800 shadow-lg transition-all duration-300 hover:scale-110 font-sans text-center">
      <img className="object-cover h-56" src={`src/assets/${image}.jpg`}></img>
      <div className="my-5 flex flex-col items-center gap-1">
        <h1 className="font-bold text-xl">{program}</h1>
        <h1 className="text-gray-400">{info}</h1>
        <JoinBtn 
          id = {id}
        />
      </div>
    </div>
  )
}

export default ProgramCard