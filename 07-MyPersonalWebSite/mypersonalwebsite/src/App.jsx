import { useState } from 'react'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div className='main'>
        <div className='container'>
          <Welcome />
          <AboutMe />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
    )
}

export default App
