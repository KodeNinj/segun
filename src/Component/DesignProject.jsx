import React from 'react'
import {ProjectDesignArray} from './Objects/projectArr.js'
const DesignProjects = () => {
  return (
    <div className='flex justify-center items-center gap-[32px] mt-[80px] flex-wrap'>
        {ProjectDesignArray.map((e)=>{
            return(
                <div className='w-[350px]'>
                    <div className='w-[350px] h-[350px] shadow-lg rounded-[16px] overflow-hidden relative'>
                        <img src={e.mainImg} alt="" className='object-cover h-[350px] w-[350px] hover:w-[450px] hover:h-[450px] ease duration-1000'/>
                        <p className='absolute top-[24px] right-[12px]  bg-[var(--bg)] text-white px-[18px] py-[10px] rounded-full text-sm'>{e.category}</p>
                    </div>
                <p className='text-white text-2xl text-center my-[24px] text-[20px]'>{e.title}</p>
                </div>
            )
        })}
    </div>
  )
}

export default DesignProjects 