import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Time = () => {
    const [selectedTime,setSelectedTime]=useState('')
    const times=["09:00","09:30",'10:00','10:15',"10:30",'10:45','11:00']
    const Evngtimes=["04:00","04:30",'05:00','05:15',"05:30",'05:45','06:00']

    return (
    <div>
        <h1 className='font-poppins font-bold text-[18px] lg:text-[16px] md:text-[14px] sm:text-[11px] my-5'>Morning</h1>
     <div className='flex flex-wrap gap-[30px] sm:gap-[15px]'>
         {times.map((time,index)=>(
        <button onClick={()=>setSelectedTime(time)}  className={`border-[#EBEBEB] border-[1px] rounded-[22px] h-[67px] lg:h-[55px] sm:h-[40px]  w-[106px] lg:w-[90px] sm:w-[70px] font-Jost text-[15px] lg:text-[14px] md:text-[12px] sm:text-[10px] ${selectedTime==time? 'bg-[#3A643B] text-[white]': 'bg-transparent text-[#131313]'}`}>{time} AM</button>
       ))}
       </div> 


       <h1 className='font-poppins font-bold text-[18px] lg:text-[16px] md:text-[14px] sm:text-[11px] my-5'>Evening</h1>
     <div className='flex flex-wrap gap-[30px] sm:gap-[15px]'>
         {Evngtimes.map((time,index)=>(
        <button onClick={()=>setSelectedTime(time)}  className={`border-[#EBEBEB] border-[1px] rounded-[22px] h-[67px] lg:h-[55px] sm:h-[40px]  w-[106px] lg:w-[90px] sm:w-[70px] font-Jost text-[15px] lg:text-[14px] md:text-[12px] sm:text-[10px] ${selectedTime==time? 'bg-[#3A643B] text-[white]': 'bg-transparent text-[#131313]'}`}>{time} PM</button>
       ))}
       </div> 

     <Link to='/findDoctors'>  <button className='bg-[#3A643B] rounded-[8px] h-[59px] lg:h-[50px] sm:h-[35px] w-[100%] my-[40px] text-[white] font-medium  text-[20px] lg:text-[16px] sm:text-[13px]'>Make An Appointment</button></Link>
    </div>
  )
}

export default Time