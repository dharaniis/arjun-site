import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/index.tsx'
import About from './pages/about/index.tsx'
import Program from './pages/program/index.tsx'
import Contact from './pages/contact/index.tsx'
import Blog from './pages/blog/index.tsx'

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/about", element: <About/>},
  {path: "/program/:programName", element: <Program/>},
  {path: "/contact", element: <Contact/>},
  {path: "/blog", element: <Blog />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
