import { Link } from "react-router-dom"

type Props = {}

function GetStartedBtn({}: Props) {
  return (
    <Link to="/" href="#" className="w-full text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-800 hover:bg-slate-700 focus:ring-slate-800">Get started</Link>
  )
}

export default GetStartedBtn