import React from 'react'

const Title = ({small,large}) => {
  return (
    <header className='w-full  text-center lg:px-[100px] md:px-[40px] sm:px-[30px] px-[25px]'>
        <h6 className='text-[var(--secondary)] text-sm mb-3 font-[500]'>{small}</h6>
        <h4 className='text-white text-3xl font-[700]'>{large}</h4>
    </header>
  )
}

export default Title