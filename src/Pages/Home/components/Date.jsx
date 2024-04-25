import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Date = () => {
    const [mode,setMode]=useState(1)
  const settings = {
    
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
   
   
  };

  return (
    <div className=" w-[100%] ">
       
      
      <Slider {...settings} className="">
        
          <div className=" h-[80px] w-[123px] mr-[18px]">
             <div onClick={()=>setMode(1)} className={`border-[1px] rounded-[18px] h-[78px] w-[158px] lg:h-[70px] lg:w-[110px] sm:w-[70px] sm:h-[60px] esm:h-[50px] esm:w-[60px] flex flex-col items-center justify-center ${mode==1&&'bg-[#F2FBF2] border-[#3A643B85]'}`}>
              <h1  className={`font-Roboto text-[16px] lg:text-[14px] sm:text-[11px] esm:text-[9px] font-semibold  flex items-center  ${mode==1?'text-[#3A643B]':'text-[#1F1F1F]'}`}>Mon,10 Oct</h1>
            <p  className='text-[#606060] text-[16px] lg:text-[14px] sm:text-[11px] esm:text-[9px] font-Roboto'>10 slots</p>
          </div>
        </div>
        <div className=" h-[80px] w-[123px] mr-[18px]">
             <div onClick={()=>setMode(2)} className={`border-[1px] rounded-[18px] h-[78px] w-[158px] lg:h-[70px] lg:w-[110px] sm:w-[70px] sm:h-[60px] esm:h-[50px] esm:w-[60px] flex flex-col items-center justify-center ${mode==2&&'bg-[#F2FBF2] border-[#3A643B85]'}`}>
              <h1  className={`font-Roboto text-[16px] lg:text-[14px] sm:text-[11px] esm:text-[9px] font-semibold  flex items-center  ${mode==2?'text-[#3A643B]':'text-[#1F1F1F]'}`}>Tue,11 Oct</h1>
            <p className='text-[#D5512E] text-[16px] lg:text-[14px] sm:text-[11px] esm:text-[9px] font-Roboto'>02 slots</p>
          </div>
        </div>
        <div className=" h-[80px] w-[123px] mr-[18px]">
             <div onClick={()=>setMode(3)} className={`border-[1px] rounded-[18px] h-[78px] w-[158px] lg:h-[70px] lg:w-[110px] sm:w-[70px] sm:h-[60px] esm:h-[50px] esm:w-[60px] flex flex-col items-center justify-center ${mode==3&&'bg-[#F2FBF2] border-[#3A643B85]'}`}>
              <h1  className={`font-Roboto text-[16px] lg:text-[14px] sm:text-[11px] esm:text-[9px] font-semibold  flex items-center  ${mode==3?'text-[#3A643B]':'text-[#1F1F1F]'}`}>Wed,12 Oct</h1>
            <p className='text-[#F1B93A] text-[16px] lg:text-[14px] sm:text-[11px] esm:text-[9px]  font-Roboto'>05 slots</p>
          </div>
        </div>
        <div className=" h-[80px] w-[123px] mr-[18px]">
             <div onClick={()=>setMode(4)} className={`border-[1px] rounded-[18px] h-[78px] w-[158px] lg:h-[70px] lg:w-[110px] sm:w-[70px] sm:h-[60px] esm:h-[50px] esm:w-[60px] flex flex-col items-center justify-center ${mode==4&&'bg-[#F2FBF2] border-[#3A643B85]'}`}>
              <h1  className={`font-Roboto text-[16px] lg:text-[14px] sm:text-[11px] esm:text-[9px] font-semibold  flex items-center  ${mode==4?'text-[#3A643B]':'text-[#1F1F1F]'}`}>Thu,13 Oct</h1>
            <p className='text-[#F1B93A] text-[16px] lg:text-[14px] sm:text-[11px] esm:text-[9px] font-Roboto'>07 slots</p>
          </div>
        </div>
        <div className=" h-[80px] w-[123px] mr-[18px]">
             <div onClick={()=>setMode(5)} className={`border-[1px] rounded-[18px] h-[78px] w-[158px] lg:h-[70px] lg:w-[110px] sm:w-[70px] sm:h-[60px] esm:h-[50px] esm:w-[60px] flex flex-col items-center justify-center ${mode==5&&'bg-[#F2FBF2] border-[#3A643B85]'}`}>
              <h1  className={`font-Roboto text-[16px] lg:text-[14px] sm:text-[11px] esm:text-[9px] font-semibold  flex items-center  ${mode==5?'text-[#3A643B]':'text-[#1F1F1F]'}`}>Fri,14 Oct</h1>
            <p className='text-[#606060] text-[16px] lg:text-[14px] sm:text-[11px] esm:text-[9px] font-Roboto'>09 slots</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Date;