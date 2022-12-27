import React from 'react'
import Title from './Title'
import skills from './skillsArr'
import Box from './Box'
const Skills = () => {
  
  return (
    <section className='py-[40px] text-white z-[-1]'>
      <Title small='MY SKILLS' large='What I Know'/>  
      <div id="topskills"  className='flex flex-wrap justify-center items-center gap-8 mt-[40px] '>
        {skills.slice(0,5).map((e)=>{
            return(
                <Box name={e.name} img={e.img}/>
            )
        })}
      </div>
      <div id="midskills"  className='flex flex-wrap justify-center items-center gap-8 mt-[40px]'>
        {skills.slice(5,9).map((e)=>{
            return(
                <Box name={e.name} img={e.img}/>
            )
        })}
      </div>
      <div id="bottomskills"  className='flex flex-wrap justify-center items-center gap-8 mt-[40px]'>
        {skills.slice(9,).map((e)=>{
            return(
                <Box name={e.name} img={e.img}/>
            )
        })}
      </div>
    </section>
  )
}

export default Skills