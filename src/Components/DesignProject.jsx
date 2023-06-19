import React from 'react'
import { useState } from 'react'
import {ProjectDesignArray} from '../Objects/projectArr.js'
const DesignProjects = () => {
    const [popupDetails, setpopupDetails] = useState("default")
    const [modalIsOn, setmodalIsOn] = useState(false)
  return (
    <div className='flex justify-center items-center gap-[32px] mt-[80px] flex-wrap' >
        {ProjectDesignArray.map((e)=>{
            return(
                <div className='w-[350px] mb-[32px] cursor-pointer'  key={e.id} onClick={()=>{
                    setpopupDetails([e]);
                    setmodalIsOn(!modalIsOn)
                    }}>
                    <div data-aos='slide-up' className='w-[350px] h-[350px] shadow-lg rounded-[16px] overflow-hidden relative'>
                        <img src={e.mainImg} alt="" className='object-cover h-[350px] w-[350px] hover:w-[450px] hover:h-[450px] hover:grayscale ease duration-1000'/>
                        <p className='absolute top-[24px] right-[12px]  bg-[var(--bg)] text-white px-[18px] py-[10px] rounded-full text-sm border-[2px] border-white'>{e.category}</p>
                    </div>
                <p className='text-white text-2xl text-center my-[24px] text-[20px] hover:text-[var(--secondary)] duration-300 ease' >{e.title}</p>
                </div>
            )
        })}
        
        {modalIsOn ? 
        //if true
        <div  className='w-[100vw]  h-[calc(100vh)] fixed top-[0px] left-[0%] z-[100] bg-[var(--bg2)] text-black flex  overflow-y-scroll overflow-x-hidden pt-[32px] pb-[100px] justify-center items-center'>
        
            {/* the modal content */}
            {/* the modal content */}
            <div id='modal' className="container flex justify-around items-start md:flex-row-reverse flex-col w-[100%] overflow-auto h-full pt-[50px] ">
                {/* the left side */}
                <div className="left md:w-[45%] w-full px-[24px] mb-[40px] relative ">
                <img src={popupDetails[0].mainImg} alt="the snapshot of the project" className='md:h-[70vh] h-[35vh] rounded-[20px] object-cover w-full' />
                    {/* close btn */}
                    <button className='btn bg-red-500 text-white p-[15px] md:text-xl text-md font-bold absolute rounded-l-full top-[32px] right-[20px]' onClick={()=>setmodalIsOn(!modalIsOn)}>close me</button>
                    <p className='text-center w-full text-2xl font-bold text-[var(--secondary)] my-[20px] hidden md:block'>Snapshots</p>
                    <div className="bottomImg flex justify-start gap-[2%] items-center flex-wrap w-full mt-[32px]">
                        {/* map through other images in the array */}
                        {popupDetails[0].otherImgs.map((images)=>{
                            return <img src={images} alt="product imaes" key={images.id} className='w-[calc(98%/2)] mb-[20px] min-h-[200px] object-cover rounded-[20px] md:block hidden'  />
                        })}
                    </div>
                </div>
                {/* the right side */}
                <div className="right md:w-[45%] w-full px-[24px] md:h-full h-[50vh]">
                    
                    {/* the title */}
                    <h3 className='text-2xl md:text-3xl mb-[10px] text-[var(--secondary)] text-center md:text-left capitalize'>{popupDetails[0].title} (design project)</h3>

                        {/* the project tools header */}
                    <div className="toplist flex md:justify-between my-[24px] items-center justify-around gap-[10px]">
                        {popupDetails[0].techs.map((tech)=>{
                            return (
                                    <p className='text-sm w-[30%] md:text-[12px] flex items-center justify-center min-h-[30px] flex-wrap text-white bg-[#16425B] shadow-xl  inline py-[12px]  rounded-[5px] min-w-[70px] text-center' key={tech.index}>{tech}</p>
                            )
                        })}
                        {/* end of the map block */}
                    </div>

                    
                    {/* the project details */}
                    <div className="details text-white w-full leading-[38px] font-light ">


                        {/* the idea */}
                        <p className='text-lg text-center text-[var(--secondary)] font-bold'>The Idea</p>
                        <p>{popupDetails[0].details}</p>
                        

                        {/* the process */}
                        <p className='text-lg text-center text-[var(--secondary)] font-bold my-[10px]'>The Process</p>
                        <ul  className='px-[20px]'>
                        {popupDetails[0].process.map((processes)=>{
                            return <li className='list-disc' key={processes.index}>{processes}</li>
                        })}
                        </ul>


                        {/* the features */}
                        <p className='text-lg text-center text-[var(--secondary)] font-bold my-[10px]'>The Features</p>
                        <ul className='ml-[30px]'>
                            {popupDetails[0].features.map((list)=>{
                                return <li className='w-full list-disc' key={list.index}>{list}</li>
                            })}
                        </ul>
                        
                    
                    </div>


                    {/* The result */}
                    <div className='w-full'>
                        <p className='text-center w-full text-lg font-bold text-[var(--secondary)] my-[20px] md:hidden block '>The Result</p>
                        <div className="theImgflex flex justify-center items-center gap-[2%] flex-wrap">
                    {popupDetails[0].otherImgs.map((images)=>{
                            return <img src={images} alt="product images" className='w-[calc(98%/2)] mb-[20px] min-h-[200px] object-cover rounded-[20px] md:hidden block' key={images.index} />
                        })}
                        </div>
                    </div>


                    {/* the CTAs */}
                    <div className="btns mt-[32px] flex items-center  justify-center gap-[20px] flex-wrap md:flex-row flex-col md:w-auto w-[80%] md:pl-0 pl-[20%]">
                        <a href={popupDetails[0].link1} target='_blank' rel="noreferrer"><button className='px-[24px] py-[12px] bg-[var(--secondary)] rounded-full text-xl'>View Prototype</button></a>
                        <a href={popupDetails[0].link2} rel="noreferrer"><button className='px-[24px] py-[12px] border-[2px] border-[var(--secondary)] rounded-full text-xl text-white'>Go to Behance</button></a>
                        <button className='px-[24px] py-[12px] border-[2px] border-red-500 w-full md:hidden rounded-full text-xl text-white' onClick={()=>setmodalIsOn(!modalIsOn)}>Close Me</button>
                    </div>
                
                </div>
            </div>
            
            
        </div> :
        //if false
         ''
        }
    </div>
  )
}

export default DesignProjects 