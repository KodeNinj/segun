import React from 'react'
import Typewriter from 'typewriter-effect';
const Title = ({small,large}) => {
  return (
    <header className='md:text-left text-center flex flex-col items-center justify-center px-[40px]'>
      
        <div className='text-[var(--secondary)] text-sm mb-1 font-[500]'>
        <Typewriter options={{
                  strings: [small, small],
                  autoStart: true,
                  loop: true,
                }} /> 
          </div>
        <h4 className='text-white text-3xl font-[700]'>{large}</h4>
    </header>
  )
}

export default Title