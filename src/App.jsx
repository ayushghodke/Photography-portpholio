import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import { SpeedInsights } from '@vercel/speed-insights/react'

const CommercialVideo = lazy(() => import('./components/CommercialVideo'))
const ContentCreator = lazy(() => import('./components/ContentCreator'))
const Services = lazy(() => import('./components/Services'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const SectionFallback = () => <div className="h-96 bg-black" aria-hidden="true" />

function App() {
  return (
    <div className="bg-black text-white selection:bg-yellow-500 selection:text-black font-sans">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Suspense fallback={<SectionFallback />}>
        <CommercialVideo />
        <ContentCreator />
        <Services />
        <Contact />
        <Footer />
      </Suspense>
      <SpeedInsights />
    </div>
  )
}

export default App
