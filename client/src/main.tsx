import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/index.tsx'
import About from './pages/about/index.tsx'
import Program from './pages/program/index.tsx'

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/about", element: <About/>},
  {path: "/program/:programName", element: <Program/>},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
