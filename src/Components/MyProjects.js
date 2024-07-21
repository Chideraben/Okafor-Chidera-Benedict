import React from 'react'
import amazon from './Images/AmazonProjectImage.jpg'

import {Link} from "react-router-dom"
import './Style/Project.css'
export default function MyProjects() {
    
    const ProjectList = [
       
        
        {
            head: 'Amazon Clone',
            tools: 'React.js| CSS| Js',
            link: "https://amazon-clone-e-commence.vercel.app",
            image: amazon,
            title: 'This is Amazon cloned with React.js ', 
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
    <div className='flex flex-col w-full gap-9 justify-center items-center h-full' id='projects'>
        <h1 className='font-bold text-2xl'>My <span className='text-[#0066ff]'>Project</span></h1>
        <div className='flex flex-wrap w-full justify-center gap-7'>
            {ProjectList.map((projects,index) => (
            <div key={index} className='flex justify-center overflow-hidden bg-[lightgray] flex-wrap flex-col shadow-[black] shadow-2xl w-[20rem] rounded-[1rem]' id='color'>
                <div  className='flex justify-between px-3 items-center pt-5'>
                    <div className='flex flex-col'>
                        <h1 className='text-base font-serif font-base text-[#0066ff]'>{projects.head}</h1>
                        <h6 className='text-sm'>{projects.tools}</h6>
                    </div>
                    <button className='bg-[#0066ff] w-12 h-7 rounded-[20px] text-center font-thin text-[#ece4e4fa]'>
                        <Link to={projects.link}>Visit</Link>
                    </button>
                </div>
                <div className='flex flex-col  h-[280px] rounded p-2 justify-end  items-center'>
                    <p className='font-normal text-sm mb-[1rem]'>{projects.title}</p>
                    <img src={projects.image} alt='' className='w-[100%] h-[80%] rounded-xl' id='scale'/>
                </div>

           
            </div>
    
          )) }
        </div>
    </div>
   
  )
}
