import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ContentCreator from './components/ContentCreator'
import Gallery from './components/Gallery'
import CommercialVideo from './components/CommercialVideo'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white selection:bg-yellow-500 selection:text-black font-sans">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <CommercialVideo />
      <ContentCreator />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
