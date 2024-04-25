import React, { useState } from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
const ModeOfSession = () => {
    const [mode,setMode]=useState(1)
  return (
    <div>
        <div className='flex items-center'>
            <h1 className='text-[20px]  lg:text-[16px] sm:text-[13px] font-bold font-Roboto mr-3'>Select your mode of session</h1>
            <hr className='flex-1 border-[1px] border-[#D4D4D4]'/>
        </div>
        <div className='flex justify-between items-center px-[30px] esm:px-[10px] mt-[40px]'>
            <div onClick={()=>setMode(1)} className={`border-[1px] rounded-[18px] h-[78px] w-[158px] lg:h-[70px] lg:w-[110px] sm:w-[70px] sm:h-[60px] flex flex-col items-center justify-center ${mode==1&&'bg-[#F2FBF2] border-[#3A643B85]'}`}>
                <h1 className={`font-Roboto text-[16px] lg:text-[14px] sm:text-[11px] font-semibold  flex items-center  ${mode==1?'text-[#3A643B]':'text-[#1F1F1F]'}`}>In-Clinic <RiVerifiedBadgeFill className={`ml-1  ${mode==1?'text-[#3A643B] flex':'text-[#1F1F1F] hidden'} `}/></h1>
                <p className='text-[#606060] text-[16px] lg:text-[14px] sm:text-[11px] font-Roboto'>45 Mins</p>
            </div>
            <div onClick={()=>setMode(2)} className={`border-[1px] rounded-[18px] h-[78px] w-[158px] lg:h-[70px] lg:w-[110px] sm:w-[70px] sm:h-[60px] flex flex-col items-center justify-center ${mode==2&&'bg-[#F2FBF2] border-[#3A643B85]'}`}>
                <h1 className={`font-Roboto text-[16px] lg:text-[14px] sm:text-[11px] font-semibold  flex items-center  ${mode==2?'text-[#3A643B]':'text-[#1F1F1F]'}`}>Video <RiVerifiedBadgeFill className={`ml-1  ${mode==2?'text-[#3A643B] flex':'text-[#1F1F1F] hidden'} `}/></h1>
                <p className='text-[#606060] text-[16px] lg:text-[14px] sm:text-[11px] font-Roboto'>45 Mins</p>
            </div>
            <div onClick={()=>setMode(3)} className={`border-[1px] rounded-[18px] h-[78px] w-[158px] lg:h-[70px] lg:w-[110px] sm:w-[70px] sm:h-[60px] flex flex-col items-center justify-center ${mode==3&&'bg-[#F2FBF2] border-[#3A643B85]'}`}>
                <h1 className={`font-Roboto text-[16px] lg:text-[14px] sm:text-[11px] font-semibold  flex items-center  ${mode==3?'text-[#3A643B]':'text-[#1F1F1F]'}`}>Chat <RiVerifiedBadgeFill className={`ml-1  ${mode==3?'text-[#3A643B] flex':'text-[#1F1F1F] hidden'} `}/></h1>
                <p className='text-[#606060] text-[16px] lg:text-[14px] sm:text-[11px] font-Roboto'>10 Mins</p>
            </div>
        </div>
    </div>
  )
}

export default ModeOfSession