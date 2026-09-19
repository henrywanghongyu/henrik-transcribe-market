import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'
import { Trust } from '@/sections/Trust'
import { MacSection } from '@/sections/MacSection'
import { IphoneSection } from '@/sections/IphoneSection'
import { Compare } from '@/sections/Compare'
import { Videos } from '@/sections/Videos'
import { Pricing } from '@/sections/Pricing'
import { Faq } from '@/sections/Faq'
import { Download } from '@/sections/Download'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <MacSection />
        <IphoneSection />
        <Compare />
        <Videos />
        <Pricing />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  )
}
