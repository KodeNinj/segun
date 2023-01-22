import React from 'react'
import Title from './Title'

const Contact = () => {
  return (
    <section className='my-[80px] min-h-[100vh] px-[30px] md:px-[0] w-[100vw]' id='contact'>
       <Title small="CONTACTS" large="How To Reach Me"/>
       <div className="containers flex justify-center lg:flex-row flex-col lg:w-[90vw] lg:mx-[5vw] pt-[50px] gap-[40px]">
        <div className="left w-full  lg:w-[50vw] bg-[var(--secondary)] min-h-[20vh] w-full lg:w-[50vw] min-h-[65vh] rounded-[10px] p-[20px]">
          left
        </div>
        {/* the address section */}
        <div className="right lg:w-[50vw] w-full">
          <h4 className='text-xl font-bold text-[var(--secondary)] mb-[20px]'>Send A Message</h4>
          <form action="post" className='flex flex-col  my-[20px] lg:my-0 '>
            {/* <label htmlFor="fullname">Your name </label> */}
            <input type="text" name='fullname' placeholder='Your name' required autoComplete='off'/>
            
            {/* <label htmlFor="email">Email Address</label> */}
            <input type="text" name='email' placeholder='Email Address' typeof='email' required autoComplete='off'/>

            {/* <label htmlFor="message">Enter Message</label> */}
            <textarea name="message" id="message" cols="50" rows="10" placeholder='Enter Message' className='text-[var(--secondary)] bg-[var(--bg2)] p-[20px]' required></textarea>

            <button type="submit" className='bg-[var(--secondary)] p-[20px] rounded-[10px] mt-[20px] text-[var(--bg)] font-bold hover:bg-slate-300  duration-[1s] w-full'>Send Message</button>
          </form>
        </div>
        {/* the form section */}
       </div>
    </section>
  )
}

export default Contact