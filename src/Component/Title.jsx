import React from 'react'

const Title = ({small,large}) => {
  return (
    <header className='md:text-left text-center'>
        <h6 className='text-[var(--secondary)] text-sm mb-1 font-[500]'>{small}</h6>
        <h4 className='text-white text-3xl font-[700]'>{large}</h4>
    </header>
  )
}

export default Title