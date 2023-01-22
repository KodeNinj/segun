import React from 'react'
import Box from '../Component/Box'
import Title from '../Component/Title'
import heroimg from '../assets/me.png'

const About = () => {
  return (
    <div className='min-h-[90vh] text-white flex justify-center items-center py-[80px] md:flex-row w-screen flex-col-reverse' id='about'  >
        <div className="lefts md:w-[45%] w-[100%] ">
        <img src={heroimg} alt="a young boy smiling" className='w-[60%] md:w-[70%] lg:w-[80%] ml-[20%] md:ml-[10%]' />
        </div>
        {/* end of left side */}
        <div className="rights md:w-[45%] w-[100%] md:pl-[32px] md:ml-[0] md:mb-[0] mb-[50px] md:mt-[30px]">
            <Title small='ABOUT ME' large='Who I Am'/>
            <div className="content w-full">
                <p className=' px-[32px] md:px-[0] text-justify leading-[38px] my-[10px]'>Segun is a <b> Junior Web Developer</b> who is also skilled in the art of <b>Product Designing</b> cutting across research, prototyping and testing. He have a vast knowledge of the Fontend technology using ReactJs. He is currently looking for Junior Developer or Product Designer role where he could show his unique abilities.</p>
                <div className="funfact w-[90%] mx-[5%] md:mx-[0] md:w-[100%]">
                    <h3 className='text-2xl font-bold my-[24px] text-center'>Fun Facts</h3>
                    <div className="topfact flex md:justify-start justify-center gap-[32px] flex-wrap md:flex-nowrap mb-[32px]">
                        <Box top='Started Since' bottom='2021'/> 
                        <Box top='Self Taught' bottom='Dev'/> 
                        <Box top='Chill Spot' bottom='YouTube'/> 
                    </div>
                    {/* end of first top fact */}
                    <div className="bottomfact flex md:justify-start justify-center gap-[32px] flex-wrap md:flex-nowrap">
                        <Box top='Design Tool' bottom='Figma'/> 
                        <Box top='Twitter Handle' bottom='@frontend_bros'/> 
                        <Box top='LinkedIn Handle' bottom='Click Me'/> 
                    </div>
                    {/* end of bottom fact */}
                </div>
            </div>
        </div>
        {/* end of right side */}
    </div>
  )
}

export default About