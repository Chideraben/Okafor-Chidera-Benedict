import React from 'react'

export default function MySkills() {
  return (
    <div className='flex flex-col justify-center h-[100vh]' id='skills'>
      <h1 className='text-[#555050] w-full text-center text-2xl font-bold'>My <span className='text-[#1e5174]'>Skill</span></h1>
      
      <div className='grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 p-10 gap-4'>
        <section className=''>
          <h2>Coding Skill</h2>
          <div className='w-full p-2 border-2 border-[#1e5174]'>
            <div className=''>
              <div className='flex justify-between'>
                <h1>React.js</h1>
                <h1>90%</h1>
              </div>
              <div className='w-full border-2 p-0.5 border-[#1e5174]'>
                <p className='w-[90%] h-[10px] bg-[#1e5174]'></p>
              </div>
            </div>

            <div className=''>
              <div className='flex justify-between'>
                <h1>JavaScript</h1>
                <h1>85%</h1>
              </div>
              <div className='w-full border-2 p-0.5 border-[#1e5174]'>
                <p className='w-[85%] h-[10px] bg-[#1e5174]'></p>
              </div>
            </div>

            <div className=''>
              <div className='flex justify-between'>
                <h1>CSS</h1>
                <h1>75%</h1>
              </div>
              <div className='w-full border-2 p-0.5 border-[#1e5174]'>
                <p className='w-[75%] h-[10px] bg-[#1e5174]'></p>
              </div>
            </div>

            <div className=''>
              <div className='flex justify-between'>
                <h1>HTML</h1>
                <h1>98%</h1>
              </div>
              <div className='w-full border-2 p-0.5 border-[#1e5174]'>
                <p className='w-[98%] h-[10px] bg-[#1e5174]'></p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Professional Skills</h2>
          <div className='w-full p-2 border-2 border-[#1e5174]'>
            <div className=''>
              <div className='flex justify-between'>
                <h1>Web Design</h1>
                <h1>89%</h1>
              </div>
              <div className='w-full border-2 p-0.5 border-[#1e5174]'>
                <p className='w-[89%] h-[10px] bg-[#1e5174]'></p>
              </div>
            </div>

            <div className=''>
              <div className='flex justify-between'>
                <h1>Web Development</h1>
                <h1>95%</h1>
              </div>
              <div className='w-full border-2 p-0.5 border-[#1e5174]'>
                <p className='w-[95%] h-[10px] bg-[#1e5174]'></p>
              </div>
            </div>

            <div className=''>
              <div className='flex justify-between'>
                <h1>CyberSecurity</h1>
                <h1>60%</h1>
              </div>
              <div className='w-full border-2 p-0.5 border-[#1e5174]'>
                <p className='w-[60%] h-[10px] bg-[#1e5174]'></p>
              </div>
            </div>

            <div className=''>
              <div className='flex justify-between'>
                <h1>Graphice Design</h1>
                <h1>85%</h1>
              </div>
              <div className='w-full border-2 p-0.5 border-[#1e5174]'>
                <p className='w-[85%] h-[10px] bg-[#1e5174]'></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
