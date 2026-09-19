import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Privacy } from '@/pages/Privacy'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Privacy />
    <Footer />
  </StrictMode>,
)
