import React from 'react'
import Navigation from './Component/Navigation'
import Skills from './Component/skills'
import './index.css'
const App = () => {
  return (
    <div className='bg-[var(--bg)] min-h-[120vh]'>
      <Navigation/>
      
        <Skills/>
    </div>
  )
}

export default App