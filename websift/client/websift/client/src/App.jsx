import './index.css'
import './App.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Strategy from './components/Strategy'

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Strategy />
      </main>
    </>
  )
}

export default App
