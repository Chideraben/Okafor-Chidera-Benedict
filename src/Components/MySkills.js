import React, { useRef, useState } from 'react';
import {Box, Flex, Icon, SimpleGrid, Text, Center} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import { SkillIcons, Skills, HeaderStyle} from './Store/ProjectStore'; 
export default function MySkills() {

  return (
  <Box id='skills'>
    <Center h='100%' flexDirection='column' py={20} px='2' bg='white' width='100%'>
 
        <Text  fontSize='30px' style={HeaderStyle} mb='10px' color='#14b8ab'  fontWeight='bold' align='center'>
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
                    {SkillIcons.map((skill) => {
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
                    {Skills.professional.map((skill) => {
                    return(
                    <Box key={skill.name} width='100%' mb='2px'>
                     
                      <Text textAlign='start' fontSize='medium'  fontWeight='600' style={{fontFamily: '"Varelo" , sans-serif'}}>{skill.name}</Text>
                      
                    </Box>
                    )
                    })}
                  </Box>
              </Flex>
          
          
      </motion.Box>

       
        
        
    </Center> 

  </Box>
     
  )
}

           
            
