import React from 'react'
import Title from './Title'
import skills from './skillsArr'
import Box from './Box'
const Skills = () => {
  
  return (
    <section className='py-[40px] text-white z-[-1]' id='skills' data-aos='slide-up'>
      <div className='flex justify-center items-center text-center'>
        <Title small='PROFICIENCY' large="What I work with" />
        </div>  
      <div id="topskills"  className='flex flex-wrap justify-center items-center gap-8 mt-[40px] w-[80%] ml-[10%] '>
        {skills.map((e)=>{
            return(
                <Box bottom={e.name} />
            )
        })}
       </div>
    </section>
  )
}

export default Skills