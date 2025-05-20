import { useForm } from "react-hook-form"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogPostCard from './BlogPostCard'
import { BlogPostType } from '../../shared/types'
import { useEffect, useState } from 'react'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid'


type Props = {}

function Blog({}: Props) {
  const [blogPosts, setBlogPosts] = useState<Array<BlogPostType>>();
  const [newPost, setNewPost] = useState<boolean>(false);
  const {
    register,
    trigger,
    formState: { errors }, 
    } = useForm();
  function newPostHandler(event:any) {
    event.preventDefault();
    setNewPost(false);
  }
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefault();
    }};
  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER_URL).then(
      response => response.json()
    ).then(
      data => {
        setBlogPosts(data)
        localStorage.setItem('blogPosts', JSON.stringify(data));
      }
    )
  }, [])


  return (
    <div className="">
      <Navbar />
      <div className="pt-16 bg-white text-black min-h-[70vh] h-fit text-center">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-8xl mx-auto w-fit text-red-600">Blog</h1>
          <h1 className="text-4xl">All Posts</h1>
          <button
            onClick={() => setNewPost(true)}
            className="shadow-xl px-4 py-2 rounded-4xl border border-red-600 hover:bg-gray-50 focus:bg-red-50 flex gap-1 justify-center items-center"
          >
            <PlusIcon className="fill-red-600 h-8 w-8" />
            <p className="text-sm text-red-600">NEW POST</p>
          </button>
          <div className={newPost ? 'fixed bg-black top-0 opacity-30 w-screen h-[100vh] z-10': 'hidden'}></div>
          {newPost && (
            <div className="shadow-2xl rounded-lg bg-white top-1/2 left-1/2 h-fit transform -translate-x-1/2 -translate-y-1/2 fixed z-20">
              <button
                  className="absolute right-3 top-3 "
                  onClick={() => {
                    newPostHandler(event);
                  }}>
                  <XMarkIcon className="h-8 w-8"/>
              </button>
              <form 
                  className="mx-5 mt-5 gap-5 flex flex-col font-sans"
                  target="_blank"
                  onSubmit={onSubmit}
                  action={`${import.meta.env.VITE_SERVER_URL}newPost`}
                  method="POST">
                <input 
                  className="text-4xl font-semibold focus:outline-none" 
                  placeholder="Title"
                  type="text"
                  {...register("title", {                  
                  required: true,
                  maxLength: 60,
              })}
              />
              {errors.title && (
                <p className="text-red-600 text-sm">
                {errors.title.type === "required" && "This field is required."}
                {errors.title.type === "maxLength" && "Max length is 60 char."}
                </p>
            )}
                <textarea 
                  className="text-lg focus:outline-none resize-none" cols={50} rows={12} placeholder="Content"
                  {...register("content", {
                    required: true,
                    maxLength: 3500,
                    minLength: 1000,
                })}
                />
                {errors.content && (
                <p className="text-red-600 text-sm">
                {errors.content.type === "required" && "This field is required."}
                {errors.content.type === "maxLength" && "Max length is 3500 char."}
                {errors.content.type === "minLength" && "Min length is 1000 char."}
                </p>
                )}
                <div className="flex flex-col gap-2 items-end text-lg border-t-1 border-stone-300 py-5 px-1">
                  <button  className="px-3 py-1 shadow-4xl rounded-4xl bg-red-700 hover:bg-red-800 w-fit text-white font-sans font-semibold" type="submit">Post</button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="mx-auto text-center">
          <div className="mx-auto h-fit w-fit py-10 grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center">
            {typeof blogPosts === "undefined" ? (
              <div className="mx-auto col-span-full">
                <p className="text-center text-4xl">Loading..</p>
              </div>
            ) : (
              blogPosts.map((post) => (
                <BlogPostCard
                  key={post.id}
                  id={post.id}
                  date={post.date}
                  duration={post.duration}
                  title={post.title}
                  content={post.content}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog
