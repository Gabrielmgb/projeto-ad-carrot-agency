import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

const App = () => {
  return (
    <main className="overflow-y-hidden bg-orange-50 text-emerald-950 antialiased">
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
    </main>
  )
}

export default App
