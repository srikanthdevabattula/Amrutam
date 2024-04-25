import React from 'react'
import icon1 from '../../../assets/Frame 1000006076.png'
import icon2 from '../../../assets/Frame 1000006077.png'
import icon3 from '../../../assets/Frame 1000006078.png'
import icon4 from '../../../assets/Frame 1000006079.png'
const AboutMe = () => {
  return (
    <div className='aboutme'>
        <div className='aboutmeHeader'>
            <h3>A Little About me</h3>
            <button>Follow +</button>
        </div>
        <div className='aboutmePara'>
            <p>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the</p>
        <div className='rdmore'>
            <hr />
             <p>Read More</p></div>
        </div>

        <div className='flex langbtn items-center gap-3 text-[20px] lg:text-[16px] md:text-[12px] sm:text-[9px] font-medium flex-wrap p-[10px_20px]'>
            <h4 className='font-Roboto '>Language Spoken</h4>
            <button className=''>English</button>
            <button>Hindi</button>
            <button>Telugu</button>
        </div>

        <div className='flex gap-2 p-[20px] md:p-[10px_20px] socialicons'>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
        </div>
    </div>
  )
}

export default AboutMe