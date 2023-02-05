import React from 'react'
import ContactUs from './Form'
import Title from './Title'

const Contact = () => {
  
  return (
    <section className='my-[80px] min-h-[100vh] px-[30px] md:px-[0] w-[100vw]' id='contact' data-aos='slide-up'>
       <Title small="CONTACTS" large="How To Reach Me"/>
       <div className="containers flex justify-center lg:flex-row flex-col lg:w-[90vw] lg:mx-[5vw] pt-[50px] gap-[40px]">
        <div className="left w-full  lg:w-[50vw] bg-[var(--secondary)] min-h-[20vh] w-full lg:w-[50vw] min-h-[65vh] rounded-[10px] p-[20px] mb-[30px]">
          left
        </div>
        {/* the address section */}
        <div className="right lg:w-[50vw] w-full">
          <h4 className='text-xl font-bold text-[var(--secondary)] mb-[20px]'>Send A Message</h4>
          <ContactUs/>
        </div>
        {/* the form section */}
       </div>
    </section>
  )
}

export default Contact