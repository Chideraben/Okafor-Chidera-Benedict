import React from 'react'
import amazon from './Images/AmazonProjectImage.jpg'

import {Link} from "react-router-dom"
import './Style/Home.css'
export default function MyProjects() {
    
    const ProjectList = [
       
        
        {
            image: amazon,
            title: 'This is Amazon cloned with React.js', 
        },
        {
            image: amazon,
            title: 'This is Amazon cloned with React.js', 
            
        }
        ,
        {
            image: amazon,
            title: 'This is Amazon cloned with React.js', 
        },
        {
            image: amazon,
            title: 'This is Amazon cloned with React.js', 
        }
        ,
        {
            image: amazon,
            title: 'This is Amazon cloned with React.js', 
        },
        {
            image: amazon,
            title: 'This is Amazon cloned with React.js', 
        }
    ]
  return (
    <div className='flex flex-col gap-9 justify-center items-center h-full' id='projects'>
        <h1 className='font-bold text-2xl'>My <span className='text-[#0066ff]'>Project</span></h1>
        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-7'>
            {ProjectList.map((projects,index) => (
            <div key={index} className=' ' >
                <div className='flex justify-center items-center relative  shadow-2xl overflow-hidden rounded-[1rem] '>
                    <img src={projects.image} alt='' className='w-60 h-60 scale' />
                    <div  className='flex flex-col justify-center items-center absolute w-full h-full text-[#fdfdfd] bg-gradient-to-bl from-sky-500 to-[--main-color] opacity-0 hover:opacity-85'>
                        <p className='font-normal text-sm'>{projects.title}</p>
                        <a href="https//:w3school.com">Contact Me</a>
                    </div>
                </div>

           
            </div>
    
          )) }
        </div>
    </div>
   
  )
}
