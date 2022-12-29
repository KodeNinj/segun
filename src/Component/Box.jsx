import React from 'react'

const Box = ({top, bottom}) => {
  return (
    <div className='h-[90px] md:w-[200px] w-[100%]  shadow-md  rounded-[10px] bg-[var(--bg2)] flex flex-col items-center justify-center hover:translate-y-[-2px]  ease duration-300 cursor-pointer'>
                    <h3 className='text-[14px] font-medium text-center text-[var(--secondary)]'>{top}</h3>
                    <h3 className='text-[18px] font-bold text-center'>{bottom}</h3>
                </div>
  )
}

export default Box