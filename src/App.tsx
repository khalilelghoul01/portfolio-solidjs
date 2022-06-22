import type { Component } from 'solid-js'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

const App: Component = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
