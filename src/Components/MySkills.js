import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Style/Project.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {Box, Flex, Progress, Icon, SimpleGrid,Image, Text, VStack, HStack,Stack, Heading, Center, Wrap, WrapItem, background, position} from '@chakra-ui/react'
import { IoLogoHtml5 } from 'react-icons/io5';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import {motion} from 'framer-motion'
export default function MySkills() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const skills = {
    coding: [
      {name: 'React.js', level: 90, width: 80},
      {name: 'JavaScript', level: 88},
      {name: 'CSS', level: 80},
      {name: 'HTML', level: 78},
  ],
  professional:[
    {name: 'Web Design', level: 87},
    {name: 'Web Development', level: 95},
    {name: 'Graphic Design', level: 80},
    {name: 'CyberSecurity', level: 50}
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
  <Box bg='black'  align='center' spacing={8} p={8} position='relative' height='100vh' id='skills' >
    <Center h='100%' flexDirection='column' bg='lightgray' width='100%'>
      <Text fontSize='2xl'  fontWeight='bold' align='center'>
        My Skill
      </Text>
        <Flex justify='start' overflow='hidden' align='center' gap='7' padding='5' width='100%' maxWidth='700px' height='100%' >

          <Swiper 
           spaceBetween={30}
           centeredSlides={true}
           autoplay={{
            delay: 5000,
            disableOnInteraction:false,
           }}
           pagination={{
            clickable: true,
           }}
           navigation={true}
           modules={[Autoplay, Pagination, Navigation]}
           onAutoplayTimeLeft={onAutoplayTimeLeft}
          
          >
            <SwiperSlide>
              <Stack bg='lightgray' width='100%'>
                <Center spacing={4} p='20px'>
                  <SimpleGrid columns={3} spacing={4} boxShadow='md' >
                    {icon.icons.map((skill) => {
                    return(
                    <Box key={skill.name}  align='center' borderRadius='md' boxShadow='lg' >
                      <Box boxSize='100px'  bg='lightgray' width='100%'   align=' center' justify=' center' fontSize={{base: '50px', sm: '50px', md: '50px',lg: '60px'}}>
                          <Icon as={skill.src} style={skill.style}/>
                      </Box>

                      <Box>
                        <Text fontSize={['sm', 'md','lg']}>{skill.name}</Text>
                      </Box>
                    </Box>
                    )
                    })}
                  </SimpleGrid>
                </Center>
              </Stack>
            </SwiperSlide>

            <SwiperSlide>
              <Stack spacing={4}  width='100%'>
                <Center gap='4' p='30px' bg='lightgray' flexDirection='column' >
                  <Text fontSize='xl' mb='8px' fontWeight='bold' textAlign='start' width='100%'>
                    Coding Skills
                  </Text>
                  {skills.coding.map((skill) => {
                    return(
                    <Box key={skill.name} width='100%'>
                      <Flex justify='space-between'>
                        <Text>{skill.name}</Text>
                        <Text>{skill.level}%</Text>
                      </Flex>
                      <Box width='100%' height='10px'>
                        <Text width={skill.width} bg='red'></Text>
                      </Box>
                      <Progress value={90} colorScheme='green'/>
                    </Box>
                    )
                  })}
                </Center>
              </Stack>
            </SwiperSlide>

            <SwiperSlide>
              <Stack spacing={4}  width='100%'>
                <Center gap='4' p='30px' bg='lightgray' flexDirection='column' >
                  <Text fontSize='xl' mb='8px' fontWeight='bold' width='100%' textAlign='start'>
                    Professional Skills
                  </Text>
                  {skills.professional.map((skill) => {
                    return(
                    <Box key={skill.name} width='100%'>
                      <Flex justify='space-between'>
                        <Text>{skill.name}</Text>
                        <Text>{skill.level}%</Text>
                      </Flex>
                      <Box width=' 100%' height='10px'>
                        <Text width={skill.width} bg='red'></Text>
                      </Box>
                      <Progress value={90} colorScheme='green'/>
                    </Box>
                    )
                  })}
                </Center>
              </Stack>
            </SwiperSlide>

            <Box  className="autoplay-progress"  slot="container-end" position='absolute' right='16px' bottom='16px' zIndex='10' width='48px' height='48px' display='flex' alignItems='center' justifyContent='center' fontWeight='bold' color='#007aff'>
              <svg viewBox="0 0 48 48"
             ref={progressCircle}
             sx={{
              '--progress': 0,
              position: 'absolute',
              left: 0,
              top:' 0px',
              zIndex: '10',
              width: '100%',
              strokeWidth: '4px',
              stroke: 'blue',
              fill: 'none',
              strokeDashoffset: 'calc(125.6px * (1 - var(--progress)))',
              strokeDasharray: '125.6',
              transform: 'rotate(-90deg)',
             }}
              >
             </svg>
             <span ref={progressContent}></span>
            </Box>

          </Swiper>
          
      </Flex>

       
        
        
    </Center>  
  </Box>
  )
}

           
            
