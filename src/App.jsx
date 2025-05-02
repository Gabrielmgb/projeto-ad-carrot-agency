import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectShowcase from './components/ProjectShowcase'
import Services from './components/Services'

const App = () => {
  return (
    <main className="overflow-y-hidden bg-orange-50 text-emerald-950 antialiased">
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <ProjectShowcase/>
    </main>
  )
}

export default App
