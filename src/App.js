import React from 'react'
import Navigation from './Component/Navigation'
import Skills from './Component/skills'
import './index.css'
const App = () => {
  return (
    <div className='bg-[var(--bg)] min-h-[120vh]'>
      <Navigation/>
      <div className='mt-[90px]'>
        <Skills/>
      </div>
    </div>
  )
}

export default App