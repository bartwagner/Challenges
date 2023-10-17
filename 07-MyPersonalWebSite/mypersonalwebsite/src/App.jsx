import React from "react"
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from "./components/Footer"
import './App.css'

function App() {

  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break;
    case '/aboutMe':
      component = <AboutMe />
      break;
    case '/experience':
      component = <Experience />
      break;
    case '/projects':
      component = <Projects />
      break;
    case '/skills':
      component = <Skills />
      break;
    case '/contact':
      component = <Contact />
      break;
  }

  return (
    <div>
      <Navbar />
      <div className='main'>
        <div className='container'>
          <div className='obj-comp'>
            {component}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
}

export default App