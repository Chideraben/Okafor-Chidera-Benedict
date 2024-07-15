import React from 'react'
import Image from './Images/ProfilePic.jpg'
import './Style/Home.css'
export default function Profile() {
  return (
    
    <div className='home flex justify-end  items-center h-[100vh]' id='home'>
      {/*Introduction*/}
      <div className='flex flex-wrap w-full gap-9 justify-around items-center absolute'>
        <div className='grid gap-2 max-w-96 ' >
           <h1 className=' text-4xl font-bold '>Hello,I am</h1>
          <h1 className=' text-7xl font-bold'>Benedict</h1>
          {/*<p className=' text-lg font-sans font-bold border-b-2 border-b-[#64b3d8] text-[#64b3d8]'>Turning ideas into real life products is my calling.</p>*/}
          <p className=' text-sm font-bold '>I enjoy building everything from small business sites to rich interactive web apps, if you own a business seeking a web developer or an employer looking to hire,you can get in touch with me here.</p>

          <ul className='inline-flex gap-2'>
            <li className='w-[2rem] h-[2rem] bg-[transparent] rounded-[50%] shadow-xl hover:bg-[#754ef9] hover:text-[#fdfdfd]  shadow-[#00000060] border-2 border-[#754ef9]'></li>
            <li className='w-[2rem] h-[2rem] bg-[transparent] rounded-[50%] shadow-xl hover:bg-[#754ef9] hover:text-[#fdfdfd]  shadow-[#00000060] border-2 border-[#754ef9]'></li>
            <li className='w-[2rem] h-[2rem] bg-[transparent] rounded-[50%] shadow-xl hover:bg-[#754ef9] hover:text-[#fdfdfd] shadow-[#00000060] border-2 border-[#754ef9]'></li>
            <li className='w-[2rem] h-[2rem] bg-[transparent] rounded-[50%] shadow-xl hover:bg-[#754ef9] hover:text-[#fdfdfd] shadow-[#00000060] border-2 border-[#754ef9]'></li>
          </ul>
        </div>
         
          <div className=' bg-[#112e42] rounded-[100%] overflow-hidden'>
            <img src={Image} alt='' className='w-[300px] h-[300px] rounded-[50%] '></img>
          </div>
      </div>

          {/*My photo*/}
      <div className='image-bg '>
        <div className='overlay'>
                  
        </div>        

       {/* <div className='image-parent flex justify-center items-center w-[20px] h-[20px] absolute'>
          <div className='icon-display' style={{'--i': 4}}>
            <h3 className=''>Web Developer</h3>
          </div>

          <div className='icon-display' style={{'--i': 3}}>
            <h3 className=''>Graphice designer</h3>
          </div>

          <div className='icon-display' style={{'--i': 2}}>
            <h3 className=''>Web designer</h3>
          </div>

          <div className='icon-display' style={{'--i': 1}}>
            <h3 className=''>Programmer</h3>
          </div>

          <div className='circle'></div>
        </div>
          */}
        
      </div>

      
    </div>
  )
}
