import React from 'react'
import review from '../../../assets/review.png'
import { FaStar } from "react-icons/fa";
const Featured = () => {
  return (
    <div className='aboutme'>
    <div className='aboutmeHeader'>
        <h3>Featured Reviews (102)</h3>
        
    </div>

    <div className='p-[20px] space-y-2'>
        <div className='bg-[#FAFAFA] p-[15px_20px] space-y-2 rounded-[17px]'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                <img src={review} alt="" className='md:w-[45px] sm:w-[35px] esm:w-[30px]'/>
                <div>
                    <h4 className='text-[20px] lg:text-[16px] md:text-[14px] sm:text-[11px] esm:text-[9px] text-[#2F2F2F] font-semibold font-poppins'>Alicent Hightower</h4>
                    <p className='font-poppins text-[#939393] text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] esm:text-[8px] font-medium'>Consulted for Skin care</p>
                </div>
                </div>
                <p className='text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] esm:text-[8px] text-[#979797] font-Roboto'>20 January 2023</p>
            </div>

            <div>
                <div className='flex gap-1 text-[#F79624] text-[18px] lg:text-[14px] md:text-[12px] sm:text-[10px] esm:text-[8px]'><FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
</div>
                <p className='font-poppins text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] esm:text-[8px] text-[#2E2F2E] my-2'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
            </div>
        </div>
        <div className='bg-[#FAFAFA] p-[15px_20px] space-y-2 rounded-[17px]'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                <img src={review} alt="" className='md:w-[45px] sm:w-[35px] esm:w-[30px]'/>
                <div>
                    <h4 className='text-[20px] lg:text-[16px] md:text-[14px] sm:text-[11px] esm:text-[9px] text-[#2F2F2F] font-semibold font-poppins'>Alicent Hightower</h4>
                    <p className='font-poppins text-[#939393] text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] esm:text-[8px] font-medium'>Consulted for Skin care</p>
                </div>
                </div>
                <p className='text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] esm:text-[8px] text-[#979797] font-Roboto'>20 January 2023</p>
            </div>

            <div>
                <div className='flex gap-1 text-[#F79624] text-[18px] lg:text-[14px] md:text-[12px] sm:text-[10px] esm:text-[8px]'><FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
</div>
                <p className='font-poppins text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] esm:text-[8px] text-[#2E2F2E] my-2'>Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods</p>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Featured