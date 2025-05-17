import { Link, useParams } from "react-router-dom";
import { BlogPostType } from '../../shared/types'
import { useEffect, useState } from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

type Props = {}

function BlogPostPage({}: Props) {
  const [blogPosts, setBlogPosts] = useState<Array<BlogPostType>>([]);

  useEffect(() => {
    const data:BlogPostType[] = JSON.parse(localStorage.getItem('blogPosts') as any);
    if (data) {
     setBlogPosts(data);
    }
  }, []);
  const  { id }  = useParams() as { id: string };
  const postObj:BlogPostType = blogPosts.find(x => x.id === Number(id)) as BlogPostType;

  return (
    <div className="bg-white">
      <Navbar/>
      <div className="py-24 flex justify-center items-center text-black font-sans text-center">
        <div className="relative w-[60%] space-y-10 px-20 py-12 h-fit border border-black ">
          <Link to="/blog"><ArrowLeftIcon className="w-14 h-14 top-[7rem] left-[-8rem] mr-10 absolute fill-red-600"/></Link>
          <p className="text-left w-full text-sm">{`Admin • ${postObj?.date} • ${postObj?.duration} min read`}</p>
          <h1 className="text-5xl font-bold">{postObj?.title}</h1>
          <p className="text-sm md:text-[17px]/8">{postObj?.content}</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default BlogPostPage