import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ImpactBanner from './components/ImpactBanner'
import Projects from './components/Projects'
// import Clients from './components/Clients' // oculto de momento
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ImpactBanner />
        <Projects />
        {/* <Clients /> oculto de momento */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
