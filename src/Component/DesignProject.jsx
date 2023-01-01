import React from 'react'
import { useState } from 'react'
import {ProjectDesignArray} from './Objects/projectArr.js'
const DesignProjects = () => {
    const [popupDetails, setpopupDetails] = useState("default")
    const [modalIsOn, setmodalIsOn] = useState(false)
  return (
    <div className='flex justify-center items-center gap-[32px] mt-[80px] flex-wrap'>
        {ProjectDesignArray.map((e)=>{
            return(
                <div className='w-[350px] mb-[32px] cursor-pointer' key={e.id} onClick={()=>{
                    setpopupDetails([e]);
                    setmodalIsOn(!modalIsOn)
                    }}>
                    <div className='w-[350px] h-[350px] shadow-lg rounded-[16px] overflow-hidden relative'>
                        <img src={e.mainImg} alt="" className='object-cover h-[350px] w-[350px] hover:w-[450px] hover:h-[450px] ease duration-1000'/>
                        <p className='absolute top-[24px] right-[12px]  bg-[var(--bg)] text-white px-[18px] py-[10px] rounded-full text-sm border-[2px] border-white'>{e.category}</p>
                    </div>
                <p className='text-white text-2xl text-center my-[24px] text-[20px] hover:text-[var(--secondary)] duration-300 ease'>{e.title}</p>
                </div>
            )
        })}
        
        {modalIsOn ? 
        //if true
        <div className='w-[100vw]  h-[calc(100vh)] fixed top-[0px] left-[0%] z-[100] bg-[var(--bg2)] text-black flex  overflow-y-scroll overflow-x-hidden pt-[32px] pb-[100px] justify-center items-center'>
            {/* the modal content */}
            {/* the modal content */}
            {/* the modal content */}
            {/* the modal content */}
            {/* the modal content */}
            {/* the modal content */}
            <div className="container flex justify-around items-start md:flex-row flex-col w-[100%] overflow-auto h-[85vh] mt-[100px]">
                {/* the left side */}
                <div className="left md:w-[45%] w-full px-[24px] mb-[40px] relative ">
                    <img src={popupDetails[0].mainImg} alt="the snapshot of the project" className='md:h-[70vh] h-[30vh] rounded-[20px] object-cover w-full ' />
                    {/* close btn */}
                    <button className='btn bg-red-500 text-white p-[15px] md:text-xl text-md font-bold absolute rounded-l-full top-[32px] right-[20px]' onClick={()=>setmodalIsOn(!modalIsOn)}>close me</button>
                    <p className='text-center w-full text-2xl font-bold text-[var(--secondary)] my-[20px] hidden md:block'>Snapshots</p>
                    <div className="bottomImg flex justify-start gap-[2%] items-center flex-wrap w-full mt-[32px]">
                        {/* map through other images in the array */}
                        {popupDetails[0].otherImgs.map((images)=>{
                            return <img src={images} alt="product imaes" className='w-[calc(98%/2)] mb-[20px] min-h-[200px] object-cover rounded-[20px] md:block hidden'  />
                        })}
                    </div>
                </div>
                {/* the right side */}
                <div className="right md:w-[45%] w-full px-[24px]  overflow-y-auto">
                    {/* the project tools header */}
                    <div className="toplist flex md:justify-start justify-around gap-[10px]">
                        {popupDetails[0].techs.map((tech)=>{
                            return (
                                    <p className='text-sm w-[30%] md:text-[12px] flex-wrap text-white bg-[#16425B] shadow-xl px-[15px] inline py-[12px]  rounded-[10px] min-w-[70px] text-center'>{tech}</p>
                            )
                        })}
                        {/* end of the map block */}
                    </div>
                    {/* the title */}
                    <h3 className='text-2xl md:text-4xl my-[32px] text-[var(--secondary)] capitalize'>{popupDetails[0].title} <br/>(design project)</h3>
                    {/* the project details */}
                    <div className="details text-white w-full leading-[38px] font-light ">
                        <p>{popupDetails[0].details}</p>
                        <ul className='ml-[30px]'>
                            {popupDetails[0].bullet.map((list)=>{
                                return <li className='w-full list-disc'>{list}</li>
                            })}
                        </ul>
                    </div>
                    {/* other images */}
                    <div className='w-full'>
                        <p className='text-center w-full text-2xl font-bold text-[var(--secondary)] my-[20px]'>Snapshots</p>
                        <div className="theImgflex flex justify-center items-center gap-[2%] flex-wrap">
                    {popupDetails[0].otherImgs.map((images)=>{
                            return <img src={images} alt="product imaes" className='w-[calc(98%/2)] mb-[20px] min-h-[200px] object-cover rounded-[20px] md:hidden block'  />
                        })}
                        </div>
                    </div>
                    {/* the CTAs */}
                    <div className="btns mt-[32px] flex items-center  justify-center gap-[20px] flex-wrap ">
                        <a href={popupDetails[0].link1} target='_blank' rel="noreferrer"><button className='px-[24px] py-[12px] bg-[var(--secondary)] rounded-full text-xl'>View Live</button></a>
                        <a href={popupDetails[0].link2} target='_blank' rel="noreferrer"><button className='px-[24px] py-[12px] border-[2px] border-[var(--secondary)] rounded-full text-xl text-white'>View Code</button></a>
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