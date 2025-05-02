import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className="overflow-y-hidden bg-orange-50 text-emerald-950 antialiased">
        <Navbar/>
        <Hero/>
        <About/>
    </main>
  )
}

export default App
