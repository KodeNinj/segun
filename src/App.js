import React from 'react'
import Contact from './Component/Contact'
// import DevProjects from './Component/DevProjects'
import Skills from './Component/skills'
import './index.css'
import About from './sections/About'
import Hero from './sections/Hero'
import Project from './sections/Project'
const App = () => {
  return (
    <div className='bg-[var(--bg)] min-h-[120vh]  overflow-hidden'>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      {/* <DevProjects/> */}
    </div>
  )
}

export default App