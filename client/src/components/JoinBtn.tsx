
type Props = {
  id: string
}

function JoinBtn({ id }: Props) {
  const url = `/program/${ id }` 
  return (
    <a href={url} className="w-20 text-sm inline-flex justify-center items-center px-3 py-2 text-center bg-slate-600 rounded-lg hover:bg-slate-700">
        <div className="h-[8px] w-[8px] mr-[8px] rounded-[4px] bg-[#4ab74a]"></div>
        JOIN
    </a>
  )
}

export default JoinBtn