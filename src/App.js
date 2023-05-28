import React from 'react'
import Contact from './Component/Contact'
// import DevProjects from './Component/DevProjects'
import Skills from './Component/skills'
import './index.css'
import About from './sections/About'
import Hero from './sections/Hero'
import Project from './sections/Project'
// import Aos from 'aos'
// import "aos/dist/aos.css";
import { ToastContainer } from 'react-toastify';
import Footer from './Component/Footer'
// import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <div className='relative bg-[var(--bg)] min-h-[120vh]  overflow-hidden'>
      
      <Hero/>
      <About/>
      <Skills  />
      <Project />
      <Contact />
      <Footer/>
      <ToastContainer />
      {/* <DevProjects/> */}
    </div>
  )
}

export default App