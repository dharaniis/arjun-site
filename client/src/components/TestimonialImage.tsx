
type Props = {
    name: string
}

function TestimonialImage( { name } : Props) {
  const url = `/src/assets/${(name.toLowerCase())}.png`
  return (
    <img className="rounded-full w-9 h-9" src={url} />
  )
}

export default TestimonialImage