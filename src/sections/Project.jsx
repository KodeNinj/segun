import React from 'react'
import { useState } from 'react'
import Title from '../Component/Title'
const Project = () => {
  const [devActive, setdevActive] = useState(true)
  return (
    <section className='min-h-screen py-[60px ] md:px-[80px] px-[20px] mt-[80px]'>
        <Title small='PROJECTS' large="What I've done"/>
        <p className='my-[32px] md:w-[80%] md:mx-[10%] text-xl text-white text-center leading-[38px] font-small'>Here are the few projects I worked on over the months. Toggle between the design projects and the Frontend Development projects using the switch below </p>
        {/* the swith button for dev and design */}
        {devActive ? 
        // if dev is active
        <div className='switchbtn flex justify-center  items-center gap-[20px]'>
          <button className="dev w-[150px] bg-[var(--bg2)] px-[24px] py-[12px] rounded-full text-white bg-[#16425B]">Dev</button>
          <button className="design w-[150px] bg-[var(--bg2)] px-[24px] py-[12px] rounded-full text-white shadow-lg" onClick={()=>setdevActive(!devActive)}>Design</button>
        </div> 
        // if design is active
        : 
        <div className='switchbtn flex justify-center items-center gap-[20px]'>
          <button className="dev w-[150px] bg-[var(--bg2)] px-[24px] py-[12px] rounded-full text-white " onClick={()=>setdevActive(!devActive)}>Dev</button>
          <button className="design w-[150px] bg-[var(--bg2)] px-[24px] py-[12px] rounded-full text-white shadow-lg bg-[#16425B]">Design</button>
        </div> }
        
        
    </section>
  )
}

export default Project