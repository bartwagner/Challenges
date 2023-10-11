import React from "react"
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Stripe from './components/subcomponents/Stripe'
import './App.css'


function App() {


  return (
    <div>
      <Navbar />
      <div className='main'>
        <div className='container'>
          <Welcome />
          <div className='obj-comp'>
            <AboutMe />
            <Stripe />
            <Experience />
            <Stripe />
            <Projects />
            <Stripe />
            <Skills />
            <Stripe />
            <Contact />
          </div>
        </div>
      </div>
    </div>
    )
}

export default App
