import { BlogPostType } from "../../shared/types"

function BlogPostCard({ date, duration, title, content }: BlogPostType) {
  return (
    <div className="font-sans text-center ">
        <div className="relative border w-96 h-fit flex flex-col">
          <div className='h-[255px] flex items-center justify-center bg-black text-white text-center'>
            <h1 className="p-5 text-4xl font-sans italic font-bold">{title}</h1>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center m-5">
            <p className="text-left w-full text-xs">{`Admin • ${date} • ${duration} min read`}</p>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-center">{`${content.slice(0,149)}....`}</p>
            <button className="w-full mx-5 border px-5">Read More</button>
          </div>
        </div>
    </div>
  )
}

export default BlogPostCard