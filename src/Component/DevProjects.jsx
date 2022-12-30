import React from 'react'
import { useState } from 'react'
import {ProjectDevArray} from './Objects/projectArr.js'
const DevProjects = () => {
    const [popupDetails, setpopupDetails] = useState("default")
    const [modalIsOn, setmodalIsOn] = useState(false)
  return (
    <div className='flex justify-center items-center gap-[32px] mt-[80px] flex-wrap'>
        {ProjectDevArray.map((e)=>{
            return(
                <div className='w-[350px] mb-[32px]' key={e.id} onClick={()=>{
                    setpopupDetails([e]);
                    setmodalIsOn(!modalIsOn)
                    console.log(popupDetails);
                    console.log(modalIsOn);
                    }}>
                    <div className='w-[350px] h-[350px] shadow-lg rounded-[16px] overflow-hidden relative'>
                        <img src={e.mainImg} alt="" className='object-cover h-[350px] w-[350px] hover:scale-125 cursor-pointer hover:grayscale ease duration-1000'/>
                        <p className='absolute top-[24px] right-[12px]  bg-[var(--bg)] text-white px-[18px] py-[10px] rounded-full text-sm'>{e.category}</p>
                    </div>
                <p className='text-white text-2xl text-center my-[24px] text-[20px]'>{e.title}</p>
                </div>
            )
        })}
        {modalIsOn ? 
        <div className='w-[100vw]  min-h-[calc(100%-90px)] fixed top-[90px] left-[0%] z-[10] bg-[var(--bg2)] text-black flex flex-col-reverse overflow-y-scroll overflow-x-hidden pt-[32px] pb-[100px] justify-center items-center'>
            <button className='btn bg-[var(--secondary)] p-[15px] text-xl font-bold' onClick={()=>setmodalIsOn(!modalIsOn)}>close me</button>
            <p className='text-white'>{popupDetails[0].title}</p>
        </div> : ''
        }
    </div>
  )
}

export default DevProjects