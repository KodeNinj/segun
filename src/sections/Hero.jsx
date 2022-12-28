import React from 'react'
import Navigation from '../Component/Navigation'
import vid from '../assets/vid.mp4'
const Hero = () => {
  return (
    <div className='h-screen min-w-screen relative'>
        
        <Navigation/>
        <video src={vid} autoPlay loop muted  className='w-[100vw] h-full object-fill top-0 absolute z-[1] opacity-10'></video>
        <div className="codebox w-full md:w-[60vw] h-[60vh] md:h-[60vh]  md:w-[50%] md:mx-[25%] mt-[5%] z-[4] absolute top-[100px] flex items-center justify-center flex-col ">
            <div className="containers">
                <div className="top">
                    <h2 className='text-2xl md:text-4xl text-white'><code><span className='text-blue-500'>const</span> <span className=''>meetMe</span> = <span className='text-[var(--yellow)]'>&#x2774;</span></code></h2>
                </div>
                {/* end of first line */}
                <div className="second md:my-[40px] my-[20px]  pl-[60px]">
                    <h2 className='text-2xl md:text-4xl text-white '><code><span className='text-green-500'>name</span> : <span className=''>"Segun",</span></code></h2>
                </div>
                {/* end of second line */}
                <div className="third mt-[20px]  pl-[60px]">
                    <h2 className=' text-2xl md:text-4xl text-white '><code><span className='text-green-500'>skills</span> : <span className=''>"Frontend Dev"</span></code></h2>
                </div>
                {/* end of third line */}
                <div className="third md:my-[40px] my-[20px]  pl-[60px]">
                    <h2 className=' text-2xl md:text-4xl text-white text-[var(--yellow)]'>&#x2775;</h2>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero