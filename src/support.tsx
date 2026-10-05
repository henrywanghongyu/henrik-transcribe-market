import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Support } from '@/pages/Support'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Support />
    <Footer />
  </StrictMode>,
)
