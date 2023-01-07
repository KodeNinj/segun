import React from 'react'
import Title from './Title'

const Contact = () => {
  return (
    <section className='my-[80px] min-h-[100vh] px-[10px] md:px-[0]'>
       <Title small="CONTACTS" large="How To Reach Me"/>
       <div className="container">
        <div className="left"></div>
        {/* the address section */}
        <div className="right"></div>
        {/* the form section */}
       </div>
    </section>
  )
}

export default Contact