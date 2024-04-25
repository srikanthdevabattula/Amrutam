import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import bubble1 from '../../assets/Ellipse 715.png'
import bubble2 from '../../assets/Ellipse 716.png'
import Filters from './Components/Filters';
import DoctorCard from './Components/DoctorCard';
const FindDoctors = () => {
  return (
    <div>
        <div className='bg-[#EAF2EA] h-[221px] sm:h-[180px] w-[100%] flex flex-col items-center justify-center gap-[40px] sm:gap-[30px]'>
            <img src={bubble1} alt="" className='absolute left-[100px] sm:left-[50px]  mt-[110px] sm:mt-[120px] sm:w-[100px]'/>
            <img src={bubble2} alt="" className='absolute left-[50px] sm:left-[20px] mb-[135px] sm:w-[100px]'/>
           
            <img src={bubble1} alt="" className='absolute right-[100px] sm:right-[50px]  mt-[110px] sm:mt-[120px] sm:w-[100px]'/>
            <img src={bubble2} alt="" className='absolute right-[50px] sm:right-[20px] mb-[135px] sm:w-[100px]'/>
            <h1 className='text-[32px] md:text-[25px] sm:text-[14px] font-Roboto font-medium z-20'>Find expert Doctors for an In-clinic session here </h1>
            <div className='flex sm:flex-col sm:items-center gap-[20px] z-20'>
                <div className='flex bg-[white] items-center border-[#D4D4D4] border-[1px] h-[54px] md:h-[45px] sm:h-[35px] w-[200px] md:w-[170px] sm:w-[150px]  rounded-[8px] px-[10px] gap-[20px] md:gap-[10px]'><IoLocationSharp className='text-[#3A643B] text-[30px] sm:text-[20px]'/>
                <select name="" id="" className='font-poppins text-[16px] sm:text-[13px] outline-none w-[100%]'>
                <option value="Mumbai">Mumbai</option>

<option value="Delhi">Delhi</option>

<option value="Hyderabad">Hyderabad</option>
</select></div>
                <div className='border-[1px] border-[#CDCDCD] rounded-[10px] px-[10px] flex items-center h-[54px] md:h-[45px] sm:h-[35px] w-[475px] md:w-[350px] sm:w-[300px] bg-[white]'><input type="text" name="" id="" placeholder='eg. Doctor, specialisation, clinic name' className='w-[95%] sm:placeholder:text-[10px] h-[100%] pb-[5px] outline-none'/><FaArrowRight /></div>
            </div>
        </div>
        <Filters/>
        <DoctorCard/>
    </div>
  )
}

export default FindDoctors