import React from 'react'

export default function Intro() {
  return (
    <div className='flex justify-around items-center '>
      {/*Introduction*/}
        <div className='grid gap-2'>
            <h1 className='w-[250px] text-2xl font-mono font-bold  text-[white]'>Hi, I'm Benedict a Web developer</h1>
            <p className=' text-lg font-sans font-bold border-b-2 border-b-[#64b3d8] text-[#64b3d8]'>Turning ideas into real life products is my calling.</p>
            <p className=' w-[390px] text-sm font-sans font-bold  text-[#2b7699]'>I enjoy building everything from small business sites to rich interactive web apps, if you own a business seeking a web developer or an employer looking to hire,you can get in touch with me here.</p>
        </div>

      {/*My photo*/}
        <div className='w-[300px] h-[400px]'>
<h2>Image</h2>
        </div>
    </div>
  )
}
