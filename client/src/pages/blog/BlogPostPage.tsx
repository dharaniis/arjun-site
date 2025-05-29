import { Link, useParams } from "react-router-dom";
import { BlogPostType } from '../../shared/types'
import { useEffect, useState } from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeftIcon, CheckIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";


type Props = {}

function BlogPostPage({}: Props) {
  const [postObj, setPostObj] = useState<BlogPostType>();
  const [editMode, setEditMode] = useState<boolean>(false);
  const  { id }  = useParams() as { id: string };
  async function delPostReq() {
    await fetch(`${import.meta.env.VITE_SERVER_URL}delPost`, {
      method: "POST",
      mode: "cors",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: id})
    })
  };
  useEffect(() => {
    const data:BlogPostType[] = JSON.parse(localStorage.getItem('blogPosts') as any);
    if (data) {
     setPostObj(data.find(x => x.id === Number(id)) as BlogPostType);
    }
  }, []); 
  const updateForm = (e:any) => {
    if (e.target.name === "title") {
      setPostObj({...postObj, title: e.target.value} as any)
    } else if (e.target.name === "content") {
      setPostObj({...postObj, content: e.target.value} as any)
    }};

  return (
    <div className="bg-white">
      <Navbar/>
      <div className="py-24 flex justify-center items-center text-black font-sans text-center">
        <div className="relative w-[60%] space-y-10 px-20 py-12 h-fit border border-black ">
          <Link to="/blog" onClick={delPostReq} className="absolute right-20 top-12"><TrashIcon className="h-7 w-7 fill-red-700"/></Link>
          <Link to="/blog"><ArrowLeftIcon className="w-14 h-14 top-[7rem] left-[-8rem] mr-10 absolute fill-red-600"/></Link>
          <p className="text-left w-full text-sm">{`Admin • ${postObj?.date} • ${postObj?.duration} min read`}</p>
          <div className={`space-y-10 ${editMode && 'hidden'}`}>
            <button onClick={()=>setEditMode(true)} className="absolute right-30 top-12"><PencilSquareIcon className="h-7 w-7 fill-red-700"/></button>
            <h1 className="text-5xl font-bold">{postObj?.title}</h1>
            <p className="text-sm md:text-[17px]/8">{postObj?.content}</p>
          </div>
          <form className={`space-y-10 ${!editMode && 'hidden'}`} 
            action={`${import.meta.env.VITE_SERVER_URL}editPost`}
            method="POST"
          >
            <input name="id" className="hidden" value={id}/>
            <textarea name="title" onChange={() => updateForm(event)} className="text-5xl font-bold resize-none" rows={4} value={postObj?.title} autoFocus={true}  
              />
            <textarea name="content" onChange={() => updateForm(event)} contentEditable cols={75} rows={30} className="text-sm md:text-[17px]/8 resize-none" value={postObj?.content}/>
            <button onClick={()=>setEditMode(false)} type="submit" className="absolute right-32 top-11"><CheckIcon className="h-10 w-10 fill-red-700"/></button>
          </form> 
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default BlogPostPage