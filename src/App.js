import React from 'react'
import Skills from './Component/skills'
import './index.css'
import Hero from './sections/Hero'
const App = () => {
  return (
    <div className='bg-[var(--bg)] min-h-[120vh] '>
      <Hero/>
      <Skills/>
    </div>
  )
}

export default App