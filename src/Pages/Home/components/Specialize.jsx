import React from 'react'
import icon1 from '../../../assets/Frame 1000006268.png'
import icon2 from '../../../assets/Frame 1000006269.png'
import icon3 from '../../../assets/Frame 1000006270.png'
import icon4 from '../../../assets/Frame 1000006271.png'
const Specialize = () => {
  return (
    <div className='aboutme'>
        <div className='aboutmeHeader'>
            <h3>I Specialize In</h3>
            
        </div>
        
        <div className='p-[30px_20px] sm:p-[15px_10px] flex flex-wrap esm:justify-center items-center text-[16px] lg:text-[14px] md:text-[13px] sm:text-[10px] font-poppins font-medium  gap-[14px] '>
            <div className='flex flex-col gap-2 items-center'>
                <img src={icon1} alt="img" className='speImg' />
                <p>women’s health</p>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <img src={icon2} alt="img" className='speImg'/>
                <p>Skin Care</p>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <img src={icon3} alt="img" className='speImg'/>
                <p>Immunity</p>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <img src={icon4} alt="img" className='speImg'/>
                <p>Hair care</p>
            </div>
        </div>
        </div>
  )
}

export default Specialize