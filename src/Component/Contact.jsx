import React from 'react'
import Form from './Form'
import Title from './Title'
import { FaBeer } from 'react-icons/fa';
const Contact = () => {
  
  return (
    <section className='cursor-default my-[80px] min-h-[100vh] px-[30px] md:px-[0] w-[100vw]' id='contact' data-aos='slide-up'>
       <Title small="CONTACTS" large="How To Reach Me"/>
       <p className='text-md md:text-lg text-center capitalize text-slate-300 mt-[12px]'>All roads leads to me. Get in touch with me using any of the channels below. </p>

      {/* the social box */}
      <div className='md:w-[60%] w-full md:mx-[20%] h-[200px] border-[2px] border-[var(--secondary)] mt-[50px] flex items-center justify-center'>

      <div className='h-full w-full bg-red-100 flex flex-col justify-center items-center'>
        <p>hello</p>
        <p>hello</p>
      </div>
      <div className='h-full w-full bg-red-300 flex flex-col justify-center items-center'>
        <p>hello</p>
        <p>hello</p>
      </div>
      <div className='h-full w-full bg-red-500 flex flex-col justify-center items-center'>
        <FaBeer/>
        <p>hello</p>
      </div>

      </div>


        {/* the address section */}
       <div className="containers flex justify-center lg:flex-row flex-col lg:w-[90vw] lg:mx-[5vw] pt-[50px] gap-[40px]">
          <div className="right lg:w-[50vw] w-full">
            <h4 className='text-md md:text-xl font-bold text-[var(--secondary)] mb-[20px] text-center'>Send A Message</h4>
            <Form/>
          </div>
        {/* the form section */}
       </div>
    </section>
  )
}

export default Contact