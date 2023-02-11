import React from 'react'

export const Box = ({top, bottom, width}) => {
  return (
    <div className='h-[60px] md:w-[200px] w-[30%] px-[10px]  shadow  rounded-[10px] bg-[#162646] flex flex-col items-center justify-center hover:translate-y-[-2px]  ease duration-300 cursor-pointer'>
                    <h3 className='md:text-[14px] text-[12px] font-bold text-center text-[var(--secondary)]'>{top}</h3>
                    <h3 className='md:text-[16xpx] text-[12px]  text-center'>{bottom}</h3>
                </div>
  )
}

export const Box2 = ({top, bottom, width}) => {
  return (
    <div className='h-[60px] md:w-[200px] w-[25%] px-[10px]  shadow  rounded-[10px] bg-[#162646] flex flex-col items-center justify-center hover:translate-y-[-2px]  ease duration-300 cursor-pointer'>
                   
                    <h3 className='md:text-[16xpx] text-[10px]  text-center'>{bottom}</h3>
                </div>
  )
}