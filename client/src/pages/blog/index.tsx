import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogPostCard from './BlogPostCard'
import { BlogPostType } from '../../shared/types'
import { useEffect, useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

type Props = {}

function Blog({}: Props) {
  const [blogPosts, setBlogPosts] = useState<Array<BlogPostType>>();
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
    <div className=''>
        <Navbar />
        <div className='pt-16 bg-white text-black min-h-[70vh] h-fit text-center'>
          <div className='flex flex-col gap-5 justify-center items-center'>
            <h1 className='text-8xl mx-auto w-fit text-red-600'>Blog</h1>
            <h1 className='text-4xl'>All Posts</h1>
            <button className='shadow-xl px-4 py-2 rounded-4xl border border-red-600 hover:bg-gray-50 focus:bg-red-50 flex gap-1 justify-center items-center'>
              <PlusIcon className='fill-red-600 h-8 w-8'/>
              <p className='text-sm text-red-600'>NEW POST</p>
            </button>
          </div>
          <div className='mx-auto text-center'>
            <div className='mx-auto h-fit w-fit py-10 grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center'>
            {(typeof blogPosts === 'undefined') ? (
              <div className='mx-auto col-span-full'>
                <p className='text-center text-4xl'>Loading..</p>
              </div>
            ): blogPosts.map((post) => (
                <BlogPostCard
                  key={post.id}
                  id={post.id} 
                  date = {post.date}
                  duration = {post.duration}
                  title = {post.title}
                  content = {post.content}
                />
            ))}
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Blog
