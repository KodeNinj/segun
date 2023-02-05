import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactUs = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sqjdu8d', 'template_j6wvgko', form.current, '9ih2WuxJGqkctIegS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setname('');
      setemail('');
      setmessage('');
      toast.success('🦄 Mail sent successfully!', {
        theme: "dark",
        });
  };

  return (
    <form action="post" ref={form} onSubmit={sendEmail } className='flex flex-col  my-[20px] lg:my-0 '>
    {/* <label htmlFor="fullname">Your name </label> */}
    <input type="text" name="user_name" placeholder='Your name' value={name}  required autoComplete='off' onChange={(e)=>setname(e.value)}/>
    
    {/* <label htmlFor="email">Email Address</label> */}
    <input type="text" name='user_email' placeholder='Email Address' typeof='email' value={email} required autoComplete='off' onChange={(e)=>setemail(e.value)}/>

    {/* <label htmlFor="message">Enter Message</label> */}
    <textarea name="user_message" id="message" value={message} cols="50" rows="10" placeholder='Enter Message' className='text-[var(--secondary)] bg-[var(--bg2)] p-[20px]' required onChange={(e)=>setmessage(e.value)}></textarea>

    <button type="submit" className='bg-[var(--secondary)] p-[20px] rounded-[10px] mt-[20px] text-[var(--bg)] font-bold hover:bg-slate-300  duration-[1s] w-full' >Send Message</button>
   
  </form>
  );
};

export default ContactUs