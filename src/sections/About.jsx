import React from 'react'
import Box from '../Component/Box'
import Title from '../Component/Title'
import heroimg from '../assets/heroimg.png'

const About = () => {
  return (
    <div className='min-h-[90vh] text-white flex justify-center items-center py-[80px] md:flex-row flex-col-reverse'>
        <div className="lefts md:w-[45%] w-[100%] ">
        <img src={heroimg} alt="a young boy smiling" className='w-[60%] md:w-[70%] lg:w-[80%] ml-[20%] md:ml-[10%]' />
        </div>
        {/* end of left side */}
        <div className="rights md:w-[45%] w-[100%] pl-[32px] md:ml-[0] md:mb-[0] mb-[50px]">
            <Title small='About Me' large='Who I Am'/>
            <div className="content">
                <p className='w-[90%]  text-justify leading-[32px] my-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel amet. Repudiandae alias in nostrum illo a facere. Temporibus exercitationem modi necessitatibus quidem. Commodi, fugit. Sed voluptas impedit libero eos vitae unde dolores facilis architecto iure. Voluptatem, culpa illo. Voluptatum quae cum debitis labore. Itaque labore perferendis aperiam tenetur blanditiis?</p>
                <div className="funfact">
                    <h3 className='text-2xl font-bold my-[16px]'>Fun Fact</h3>
                    <div className="topfact flex justify-start gap-[32px] mb-[32px] md:flex-row flex-col">
                        <Box top='Started Since' bottom='2021'/> 
                        <Box top='Self Taught' bottom='Dev'/> 
                        <Box top='Chill Spot' bottom='YouTube'/> 
                    </div>
                    {/* end of first top fact */}
                    <div className="bottomfact flex justify-start gap-[32px] md:flex-row flex-col">
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