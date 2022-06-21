import type { Component } from 'solid-js'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

const App: Component = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
