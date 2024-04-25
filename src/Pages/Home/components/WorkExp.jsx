import React from 'react'
import exp from '../../../assets/exp.png'
const WorkExp = () => {
  return (
    <div className='aboutme'>
    <div className='aboutmeHeader'>
        <h3>My Work Experience</h3>
        
    </div>

    <div className='workExp p-[20px] space-y-3'>
        <h2>I have been in practice for : 7+ Years</h2>
        <hr className='w-[70%] text-[#D1D5D1] border-[1px]'/>
        <div className='flex '>
            <img src={exp} alt="" className='expimg'/>
            <div className='ml-2  expname'>
                <h4 className=''>Midtown Medical Clinic</h4>
                <p>Senior doctor</p>
            </div>
            <p className='period'>2016-present</p>
        </div>

        <div className='flex '>
            <img src={exp} alt="" className='expimg'/>
            <div className='ml-2  expname'>
                <h4 className=''>Midtown Medical Clinic</h4>
                <p>Senior doctor</p>
            </div>
            <p className='period'>2010-2015</p>
        </div>
    </div>
    </div>
  )
}

export default WorkExp