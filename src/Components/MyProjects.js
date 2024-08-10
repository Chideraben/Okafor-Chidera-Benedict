import React from 'react'
import {ProjectList,HeaderStyle} from './Store/ProjectStore'
import {Box, Text, Flex, SimpleGrid, Button, Link, Image } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import {motion} from 'framer-motion'
export default function MyProjects() {
    
  return (
    <Box as='center' width='100%' p='10px' gap={90} h='100%' bg='white' id='projects' >
        <Text mt='10px' style={HeaderStyle}> My Projects</Text>
        <SimpleGrid columns={[1,2,3]} w='100%' px='5px' mt='30px' spacing={0} placeItems='center' gap={3} >
            {ProjectList.map((projects,index) => (
            <motion.Box 
            initial={{opacity: 0, translateY: 0, y: 200}}
            whileInView = {{opacity: 1, translateY: 1, y: 0}}
            transition = {{duration: 0.9}}
            style={{ background: 'white', overflow: 'hidden', boxShadow: 'l', maxWidth: '20rem' ,borderRadius: '1rem', border: '1px solid #ece4e4fa'}}
            key={index}
            id='color'>
                <Flex justify='space-between' px={3} align={'center'} pt={5}>
                    <Box>
                        <Text style={{fontFamily: '"Changa" , sans-serif'}} color=' #14b8a6' fontWeight='600'>{projects.head}</Text>
                        <Text fontSize='small' style={{fontFamily: '"Valera" , sans-serif'}}>{projects.tools}</Text>
                    </Box>
                    <Button width='4rem' gap='3px' bg='#14b8a6' h={7} borderRadius={'20px'} fontWeight={'thin'} color={'#ece4e4fa'}   >
                        <Link href={projects.link}>Visit </Link><FiExternalLink/>
                    </Button>
                </Flex>
                <Box  p={2} h='200px' mt={10} overflow=' hidden'>
                    <Image src={projects.image} alt='' style={{borderRadius: '10px'}}/>
                </Box>

           
            </motion.Box>
    
          )) }
        </SimpleGrid>
    </Box>
   
  )
}
