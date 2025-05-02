import About from './components/About'
import AdAgencyPackages from './components/AdAgencyPackages'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectShowcase from './components/ProjectShowcase'
import Services from './components/Services'
import Team from './components/Team'

const App = () => {
  return (
    <main className="overflow-y-hidden bg-orange-50 text-emerald-950 antialiased">
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <ProjectShowcase/>
        <AdAgencyPackages/>
        <Team/>
    </main>
  )
}

export default App
