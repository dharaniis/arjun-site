import { BlogPostType } from "../../shared/types"
import { Link } from "react-router-dom";

function BlogPostCard({ id, date, duration, title, content }: BlogPostType) {
  return (
    <div className="font-sans text-center ">
        <div className="relative border w-72 md:w-96 h-fit flex flex-col">
          <div className='h-fit md:h-[255px] flex items-center justify-center bg-black text-white text-center'>
            <h1 className="px-5 py-15 md:py-5 text-3xl md:text-4xl font-sans italic font-bold">{title}</h1>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center m-5">
            <p className="text-left w-full text-xs">{`Admin • ${date} • ${duration} min read`}</p>
            <h1 className="text-lg md:text-xl font-bold">{title}</h1>
            <p className="text-sm md:text-[16px] text-center">{`${content.slice(0,149)}....`}</p>
            <Link to={{ pathname: `/blogPostPage/${id}` }} className="text-sm md:text-[16px] w-full mx-5 border px-5">Read More</Link>
          </div>
        </div>
    </div>
  )
}

export default BlogPostCard;