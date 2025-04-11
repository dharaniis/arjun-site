import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogPostCard from './BlogPostCard'
import { BlogPostType } from '../../shared/types'
import { useEffect, useState } from 'react'

type Props = {}

function Blog({}: Props) {
  const [blogPosts, setBlogPosts] = useState<Array<BlogPostType>>();

  useEffect(() => {
    fetch("http://localhost:4000/").then(
      response => response.json()
    ).then(
      data => {
        setBlogPosts(data)
      }
    )
  }, [])


  return (
    <div className=''>
        <Navbar />
        <div className='pt-16 bg-white text-black min-h-[70vh] h-fit'>
          <h1 className='text-8xl mx-auto w-fit text-red-600'>Blog</h1>
          <div className='mx-auto text-center'>
            <h1 className='text-4xl'>All Posts</h1>
            <div className='mx-auto h-fit w-fit py-10 grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center'>
            {(typeof blogPosts === 'undefined') ? (
              <div className='mx-auto col-span-full'>
                <p className='text-center text-4xl'>Loading..</p>
              </div>
            ): blogPosts.map((post) => (
                <BlogPostCard
                  key={post.title} 
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
