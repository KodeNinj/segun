import React from 'react'
import Title from '../Components/Title'
import skills from '../Objects/skillsArr'
import {Box2} from '../Components/Box'
// import { DiHtml5 } from "react-icons/di";
const Skills = () => {
  
  return (
    <section className='py-[40px] text-white z-[-1] cursor-default' id='skills' data-aos='slide-up'>
      <div className='flex justify-center items-center text-center'>
        <Title small='PROFICIENCY' large="What I work with" />
        </div>  
      <div id="topskills"  className='flex flex-wrap justify-center items-center gap-8 mt-[40px] w-[80%] ml-[10%] '>
        {skills.map((e)=>{
            return(
                <Box2 text={e.name} key={e.id} icon={e.img}/>
            )
        })}
       </div>
    </section>
  )
}

export default Skills