import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/home/index.tsx'
import About from './pages/about/index.tsx'
import Program from './pages/program/index.tsx'
import Contact from './pages/contact/index.tsx'
import Blog from './pages/blog/index.tsx'
import BlogPostPage from './pages/blog/BlogPostPage.tsx'

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/about", element: <About/>},
  {path: "/program/:programName", element: <Program/>},
  {path: "/contact", element: <Contact/>},
  {path: "/blog", element: <Blog />},
  {path: "/blogPostPage/:id", element: <BlogPostPage />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
