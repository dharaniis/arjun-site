type Props = {}

function AboutMe({}: Props) {
  return (
    <div id="AboutMe" className="grid grid-cols-1 md:grid-cols-2 h-fit">
        <div className="relative h-screen">
            <img className="absolute top-0 left-0 object-cover h-full w-full opacity-50" src="/src/assets/saket.jpg"></img>
        </div>
        <div className="m-7 md:mx-10 flex flex-col justify-center items-center text-center md:text-left md:items-start">
            <div className="">
                <h1 className="text-3xl text-red-600">About Me</h1>
                <h1 className="text-5xl font-bold">Arjun Kumar</h1>
            </div>
            <p className="mt-10 w-full md:w-[25rem] font-sans">I'm a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.<br/><br/>Im a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
    </div>
  )
}

export default AboutMe