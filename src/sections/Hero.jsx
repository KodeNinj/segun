import React from 'react'
import Navigation from '../Component/Navigation'
import vid from '../assets/vid.mp4'
import heroimg from '../assets/heroimg.png'
const Hero = () => {
  return (
    <div className='min-h-screen w-screen relative' id='home'>
        
        <Navigation/>
        <video src={vid} autoPlay loop muted  className='w-full h-full object-cover  left-0 top-0 absolute z-[1] opacity-10'></video>
        <div className="hero flex md:flex-row flex-col justify-center md:justify-around  items-center   min-h-[100vh] z-[3] absolute md:w-[90vw] w-full md:ml-[5vw] pt-[90px]  gap-[30px] ">
            <div className="left  w-full md:w-[50%] text-white flex flex-col items-center ">
                <h4 className='md:text-xl text-xl lg:text-2xl text-white font-medium'>Smart People Writes Codes</h4>
                <h2 className=' md:text-3xl lg:text-5xl text-4xl font-bold my-[30px]'>I Writes <span className='text-[var(--secondary)]'> Solutions</span></h2>
                <h4 className='text-xl md:text-2xl  lg:text-2xl'>Want to know how?</h4>
                <button className='py-3 px-6 bg-[var(--secondary)] rounded-full font-[500] my-[30px] w-[60%] hover:bg-slate-200 ease duration-[1s] cursor-pointer text-[var(--bg2)] font-bold md:block hidden'>Get Started</button>
            </div>
            {/* end of left side of hero */}
            <div className="right  w-[100%] lg:w-[45%] md:w-[60%] ">
                <img src={heroimg} alt="a young boy smiling" className='w-[60%] md:w-[70%] lg:w-[80%] ml-[20%] md:ml-[10%]' />
               
            </div>
            <div className='w-full md:hidden block'>
            <button className='py-3 px-6 bg-[var(--secondary)] rounded-full font-[500] my-[30px] w-[60%] ml-[20%] hover:bg-slate-200 ease duration-[1s] cursor-pointer text-[var(--bg2)] font-bold md:hidden block '>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero