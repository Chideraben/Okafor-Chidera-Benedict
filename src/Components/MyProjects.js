import React from 'react'
import amazon from './Images/AmazonProjectImage.jpg'
import {Box, Text, Flex, SimpleGrid, Button, Link } from '@chakra-ui/react'
import './Style/Project.css'
import { FiExternalLink } from 'react-icons/fi'
export default function MyProjects() {
    
    const ProjectList = [
       
        
        {
            head: 'Amazon Clone',
            tools: 'React.js| CSS | Js',
            link: "https://amazon-clone-e-commence.vercel.app",
            image: amazon,
            title: 'This is Amazon cloned built with React.js ', 
        },
        {
            image: amazon,
            title: 'This is Landing page website',
            link: 'https://chideraben.github.io/snap-from-FrontEnd-Mentor',
            tools: 'HTML| CSS |JS' ,
            head: "Landing Page",
            
        }
        ,
        {
            head: "Simple Calculator",
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
    <Box as='center' width='100%' gap={9} justify='center' align='center' h='100%' id='projects'>
        <Text fontSize='lg' fontWeight='bold' className='font-bold text-2xl'>My <Box as='span' color='#0066ff'>Project</Box></Text>
        <SimpleGrid columns={[1,2,3]}  spacing={0} placeItems='center'  gap={7}>
            {ProjectList.map((projects,index) => (
            <Box key={index} className='flex justify-center overflow-hidden bg-[lightgray] flex-wrap flex-col shadow-[black] shadow-2xl w-[20rem] rounded-[1rem]' id='color'>
                <Box  className='flex justify-between px-3 items-center pt-5'>
                    <Box className='flex flex-col'>
                        <Text className='text-base font-serif font-base text-[#0066ff]'>{projects.head}</Text>
                        <Text className='text-sm'>{projects.tools}</Text>
                    </Box>
                    <Button width='4rem' gap='3px' className='bg-[#0066ff]  h-7 rounded-[20px] text-center font-thin text-[#ece4e4fa]'>
                        <Link href={projects.link}>Visit </Link><FiExternalLink/>
                    </Button>
                </Box>
                <Box className='flex flex-col  h-[280px] rounded p-2 justify-end  items-center'>
                    <Text className='font-normal text-sm mb-[1rem]'>{projects.title}</Text>
                    <img src={projects.image} alt='' className='w-[100%] h-[80%] rounded-xl' id='scale'/>
                </Box>

           
            </Box>
    
          )) }
        </SimpleGrid>
    </Box>
   
  )
}
