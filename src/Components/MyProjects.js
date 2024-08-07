import React from 'react'
import {ProjectList} from './Store/ProjectList'
import {Box, Text, Flex, SimpleGrid, Button, Link } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import {motion} from 'framer-motion'
export default function MyProjects() {
    
<<<<<<< HEAD
   
=======
    const ProjectList = [
       
        
        {
            head: 'Amazon Clone',
            tools: 'React.js| CSS | Js',
            link: "https://amazon-clone-e-commence.vercel.app",
            image: amazon,
            title: 'This is Amazon cloned built with React.js ', 
        },
        {
            image: snap,
            title: '',
            link: 'https://chideraben.github.io/snap-from-FrontEnd-Mentor',
            tools: 'HTML| CSS | JS' ,
            head: "Landing Page",
            
        }
        ,
        {
            head: "Simple Calculator",
            link: 'https://calculator-benedict.vercel.app/',
            image: calculator,
            title: '', 
            tools: 'HTML| CSS | JS  '

        },
        {
            head: "Sneaker Website", 
            image: sneakers,
            title: '', 
            tools: 'HTML| CSS | JS  ',
            link: 'https://sneakers-ruby.vercel.app'
        }
    ]
>>>>>>> 32b52588963f70ab692590ee9b0133cfe1900a22
  return (
    <Box as='center' width='100%' p='10px' gap={90} justify='center' align='center' h='100%' id='projects' bg='white'>
        <Text  color='#14b8a6' fontWeight='bold' mt='10px' fontSize='30px' style={{fontFamily: '"Changa" , sans-serif' }}>My Featured Projects</Text>
        <SimpleGrid columns={[1,2,3]} w='100%' px='10px' mt='30px' spacing={0} placeItems='center' gap={3} >
            {ProjectList.map((projects,index) => (
            <motion.Box 
            initial={{opacity: 0, translateY: 0, y: 200}}
            whileInView = {{opacity: 1, translateY: 1, y: 0}}
            transition = {{duration: 0.9}}
<<<<<<< HEAD
            style={{ background: 'white', overflow: 'hidden', boxShadow: 'l', maxWidth: '20rem', borderRadius: '1rem', border: '1px solid #ece4e4fa'}}
            key={index}
            id='color'>
                <Flex justify='space-between' px={3} align={'center'} pt={5}>
                    <Box>
=======
 
            key={index} className='flex bg-[white] justify-center overflow-hidden shadow-sm flex-col flex-wrap maxW-[15rem] rounded-[1rem]'  id='color'>
                <Box  className='flex justify-between px-3 items-center pt-5'>
                    <Box className='flex flex-col'>
>>>>>>> 32b52588963f70ab692590ee9b0133cfe1900a22
                        <Text style={{fontFamily: '"Changa" , sans-serif'}} color=' #14b8a6' fontWeight='600'>{projects.head}</Text>
                        <Text fontSize='small' style={{fontFamily: '"Valera" , sans-serif'}}>{projects.tools}</Text>
                    </Box>
                    <Button width='4rem' gap='3px' bg='#14b8a6' h={7} borderRadius={'20px'} fontWeight={'thin'} color={'#ece4e4fa'}   >
                        <Link href={projects.link}>Visit </Link><FiExternalLink/>
                    </Button>
                </Flex>
                <Flex flexDirection='column' justify='end' p='2' h='250px'>
                    <Text fontWeight={'500'} fontSize={'small'}>{projects.title}</Text>
                    <img src={projects.image} alt=''/>
                </Flex>

           
            </motion.Box>
    
          )) }
        </SimpleGrid>
    </Box>
   
  )
}
