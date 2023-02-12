import React from 'react'
import Form from './Form'
import Title from './Title'
import { FaWhatsapp, FaLinkedinIn, FaBehance, FaDribbble } from 'react-icons/fa';
const Contact = () => {
  
  return (
    <section className='cursor-default my-[80px] min-h-[100vh] px-[30px] md:px-[0] w-[100vw]' id='contact' data-aos='slide-up'>
       <Title small="CONTACTS" large="How To Reach Me"/>
       <p className='text-md md:text-lg text-center capitalize text-slate-300 mt-[12px]'>All roads leads to me. Get in touch with me using any of the channels below. </p>

      {/* the social box */}
      <div className='md:w-[60%] w-full md:mx-[20%] h-[100px] gap-[20px]  rounded-[60px] overflow-hidden mt-[50px] flex items-center justify-center'>

      {/* behance link */}
      <a href="https://www.behance.net/segunfadiya?tracking_source=search_projects%7Cfrontend" target='_blank' rel="noreferrer" className='h-full w-full'>
          <div className='h-full w-full bg-red-100 flex gap-[10px] flex-col justify-center items-center hover:bg-[var(--secondary)] ease duration-[1s] hover:text-[var(--bg)] hover:shadow-inner cursor-pointer'>
            <FaBehance size={40}/>
            <p className='font-bold'>Behance</p>
          </div>
      </a>
      {/* Dribbble link */}
      <a href="https://dribbble.com/i_Osborne" target='_blank' rel="noreferrer" className='h-full w-full'>
        <div className='h-full w-full bg-red-100 flex gap-[10px] flex-col justify-center items-center ease duration-[1s] hover:text-[var(--bg)] hover:shadow-inner hover:bg-[var(--secondary)] cursor-pointer'>
          <FaDribbble size={40}/>
          <p className='font-bold'>Dribbble</p>
        </div>
      </a>
      {/* linkedin link */}
      <a href="https://ng.linkedin.com/in/femi-fadiya-segun-pelumi" target='_blank' rel="noreferrer" className='h-full w-full'>
        <div className='h-full w-full bg-red-100 flex gap-[10px] flex-col justify-center items-center ease duration-[1s] hover:text-[var(--bg)] hover:shadow-inner hover:bg-[var(--secondary)] cursor-pointer'>
          <FaLinkedinIn size={40}/>
          <p className='font-bold'>LinkedIn</p>
        </div>
      </a>

      {/* Whatsapp link */}
      <a href="http://wa.me/2347038329044" target='_blank' rel="noreferrer" className='h-full w-full'>
          <div className='h-full w-full bg-red-100 flex gap-[10px] flex-col justify-center items-center ease duration-[1s] hover:text-[var(--bg)] hover:shadow-inner hover:bg-[var(--secondary)]'>
          <FaWhatsapp size={40}/>
          <p className='font-bold'>Whatsapp</p>
          </div>
      </a>

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