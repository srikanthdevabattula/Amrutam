import React from 'react'

const Filters = () => {
  return (
    <div className='my-[40px] sm:my-[20px] sm:px-[20px]'>
        <div className='flex items-center justify-center gap-[30px] sm:gap-[15px] flex-wrap'>
        <select name="" id="" className='font-poppins text-[16px] md:text-[14px] text-[#585858]  bg-[#F3F3F3] h-[40px] w-[148px] md:h-[35px] md:w-[120px] sm:w-[80px] sm:text-[11px] outline-none rounded-[7px] w-[100%] px-[10px]'>
        <option value="">Expert</option>

                <option value="Hair">Hair</option>

<option value="Liver">Liver</option>

<option value="Heart">Heart</option>
</select>

<select name="" id="" className='font-poppins text-[16px] md:text-[14px] text-[#585858]  bg-[#F3F3F3] h-[40px] w-[148px] md:h-[35px] md:w-[120px] sm:w-[90px] sm:text-[11px] outline-none rounded-[7px] w-[100%] px-[10px]'>
        <option value="">Gender</option>

                <option value="Hair">Male</option>

<option value="Liver">Female</option>


</select>


<select name="" id="" className='font-poppins text-[16px] md:text-[14px] text-[#585858]  bg-[#F3F3F3] h-[40px] w-[148px] md:h-[35px] md:w-[120px] sm:w-[80px] sm:text-[11px] outline-none rounded-[7px] w-[100%] px-[10px]'>
        <option value="">Fees</option>

                <option value="Hair">Rs. 100-200</option>

<option value="Liver">Rs. 200-500</option>

<option value="Heart">Rs. 500-1500</option>
</select>


<select name="" id="" className='font-poppins text-[16px] md:text-[14px] text-[#585858]  bg-[#F3F3F3] h-[40px] w-[148px] md:h-[35px] md:w-[120px] sm:w-[100px] sm:text-[11px] outline-none rounded-[7px] w-[100%] px-[10px]'>
        <option value="">Language</option>

                <option value="Hair">English</option>

<option value="Liver">Hindi</option>

<option value="Heart">Telugu</option>
</select>


<select name="" id="" className='font-poppins text-[16px] md:text-[14px] text-[#3A643B] bg-[#DCEEDC] h-[40px] w-[148px] md:h-[35px] md:w-[120px] sm:w-[90px] sm:text-[11px] outline-none rounded-[7px] w-[100%] px-[10px]'>
        <option value="">All Filters</option>

                <option value="Hair">Remove All</option>


</select>
        </div>
        <div className='flex flex-wrap items-center justify-end gap-[20px] px-[100px] md:px-[60px] sm:px-[20px] my-[40px] sm:my-[20px]'>
            <h2 className='bg-[#EAF2EA] flex items-center justify-center rounded-[31px] text-[16px] md:text-[14px] sm:text-[11px] p-[10px_20px] sm:p-[5px_10px] '>
                Hair Care X
            </h2>
            <h2 className='bg-[#EAF2EA] flex items-center justify-center rounded-[31px] text-[16px] md:text-[14px] sm:text-[11px] p-[10px_20px] sm:p-[5px_10px]'>
                Female X
            </h2>
            <h2 className='bg-[#EAF2EA] flex items-center justify-center rounded-[31px] text-[16px] md:text-[14px] sm:text-[11px] p-[10px_20px] sm:p-[5px_10px]'>
            Rs.0-Rs.500 X
            </h2>
            <h2 className='bg-[#EAF2EA] flex items-center justify-center rounded-[31px] text-[16px] md:text-[14px] sm:text-[11px] p-[10px_20px] sm:p-[5px_10px]'>
            Hindi X
            </h2>
        </div>
    </div>
  )
}

export default Filters