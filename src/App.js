import React, {useEffect} from 'react'
import Contact from './Component/Contact'
// import DevProjects from './Component/DevProjects'
import Skills from './Component/skills'
import './index.css'
import About from './sections/About'
import Hero from './sections/Hero'
import Project from './sections/Project'
import Aos from 'aos'
import "aos/dist/aos.css";
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
    
  }, [])
  

  return (
    <div className='bg-[var(--bg)] min-h-[120vh]  overflow-hidden'>
      <Hero/>
      <About/>
      <Skills data-aos='fade-up' />
      <Project data-aos='slide-up'/>
      <Contact data-aos='flip-right'/>
      <ToastContainer />
      {/* <DevProjects/> */}
    </div>
  )
}

export default App