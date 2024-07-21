import React from 'react'
import Image from './Images/BenImg.jpg'
export default function About() {
  return (
    <div className=' flex justify-center ' id='about'>
        <div className='flex flex-wrap gap-11 justify-between items-center'>
            <div className=''>
                <img src={Image} alt='' className='w-[400px] h-[400px]'></img>
            </div>
            <div className='flex justify-center  flex-col items-center'>
                <h1 className='text-2xl font-bold '><span className='text-[#754ef9] mr-3' >About</span>Me</h1>
                <p className=' text-lg font-sans font-medium'>Turning ideas into real life products is my calling.</p>

            </div>
           
            
        </div>
       
    </div>
  )
}
