import React from 'react'

const Box = ({name, img}) => {
  return (
    <div className='h-[200px] w-[150px] border-[1px] shadow border-[var(--grey)] rounded-[15px] bg-[var(--bg2)] flex flex-col items-center justify-center hover:translate-y-[-10px] ease duration-300 '>
                    <img src={img} alt=""  className='w-[60px] h-[60px] object-fill mb-[20px]'/>
                    <h3 className='text-[20px] text-center'>{name}</h3>
                </div>
  )
}

export default Box