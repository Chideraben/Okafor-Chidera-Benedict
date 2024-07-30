import React, { useRef, useState } from 'react';
import {Box, Flex, Icon, SimpleGrid, Text, Center} from '@chakra-ui/react'
import { IoLogoHtml5 } from 'react-icons/io5';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import {motion} from 'framer-motion'
export default function MySkills() {
 

  const skills = {
    coding: [
      {name: 'React.js', level: 90, width: 80},
      {name: 'JavaScript', level: 88},
      {name: 'CSS', level: 80},
      {name: 'HTML', level: 78},
  ],
  professional:[
    {name: 'Web Design'},
    {name: 'Web Development'},
    {name: 'Graphic Design'},
    {name: 'CyberSecurity'},
    {name: 'Chakra-ui '}

  ]

};

const icon = {
  icons:[
    {src:IoLogoHtml5, name: 'HTML', style:{color: '#c2410c' }},
    {src:IoLogoCss3, name: 'CSS3', style:{color:'#3b82f6'}},
    {src:SiJavascript, name: 'JavaScript', style:{color:'yellow',background: ' black'}},
    {src:FaReact, name: 'REACT', style:{color:'#38bdf8'}},
    {src:FaGitAlt, name: 'Git', style:{color:' #c2410c'}},
    {src:RiTailwindCssFill, name: 'TailWindCss', style:{color:'#38bdf8'}}
  ]
}


  return (
      <Box id="skills">
       <Center h='100%' flexDirection='column' py={20} px='2' bg='white' width='100%'>
   
        <Text  fontSize='30px' style={{fontFamily: '"Changa" , sans-serif' }} mb='10px' color='#14b8ab'  fontWeight='bold' align='center'>
          My Skill
        </Text>
      <motion.Box
          initial={{opacity: 0, translateY: 0, y: 200}}
          whileInView = {{opacity: 1, translateY: 1, y: 0}}
          transition = {{duration: 0.9}}
          style={{justify:'start', backgroundColor:'#cffafe',borderRadius: '10px', overflow:'hidden', align:'center', gap: '7' , width: '100%', maxWidth: '700px', height: '100%'}} >     
              <Flex  width='100%' justify='space-between' >
                <Box  p='20px' gap={7} display='flex' flexDirection='column'>
                 <Text fontSize='xl'  color='#148ba9'  fontWeight='bold' width='100%' >
                    Coding Skills
                  </Text>
                  <SimpleGrid columns={1} >
                    {icon.icons.map((skill) => {
                    return(
                    <Box key={skill.name}  align='center' mb='10px' >
                      <Flex align='center' gap={2} >
                          <Icon as={skill.src} fontSize='30px' style={skill.style}/>
                          <Text fontSize='medium' fontWeight={'600'} style={{fontFamily: '"Varelo" , sans-serif'}}>{skill.name}</Text>

                      </Flex>

                    </Box>
                    )
                    })}
                  </SimpleGrid>
                </Box>
                  <Box  p='20px' gap={7} display='flex' flexDirection='column' >
                    <Text fontSize='xl' color='#148ba9'   fontWeight='bold' width='100%' textAlign='start'>
                      Professional Skills
                    </Text>
                    {skills.professional.map((skill) => {
                    return(
                    <Box key={skill.name} width='100%' mb='2px'>
                     
                      <Text textAlign='start' fontSize='medium'  fontWeight='600' style={{fontFamily: '"Varelo" , sans-serif'}}>{skill.name}</Text>
                      
                    </Box>
                    );
                    })}
                  </Box>
              </Flex>
          
          
         </motion.Box>

      </Center> 

     </Box>
  )
}

           
            
