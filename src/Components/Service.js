import { Heading, Box, Icon, Text , Grid,Flex, Spacer} from '@chakra-ui/react'
import React from 'react'
import {FaCode} from 'react-icons/fa'
import { IoIosColorPalette } from 'react-icons/io'
import {motion} from 'framer-motion'
export default function Service() {
    const MyService = [
        {
            icon: FaCode,
            head: 'Web Development',
            text: "As a front-end developer, my job is to create websites and ensuring the website is visually appealing and easy to navigate, i also make sure that the website's performance and capaity is optimized"
        },
        {
            icon: IoIosColorPalette,
            head:"Web Design",
            text: "The aesthetics of a website directly impact a user's opinion of the site and the company. as a web designer, i will create the layout and design of a website. In simple terms, i will make sure your site looks good. I will make design decisions which will make your site intuitive and easy for visitors to navigate."
        }
    ]
  return (
    <Grid placeItems='center'  gap={7} width='100%' h='100vh' p='10px' bg='#cffafe' id='service'>
      <motion.Heading 
        initial={{opacity: 0, translateY: 0, y: 0}}
        whileInView = {{opacity: 1, translateY: -1, y: 15}}
        transition = {{duration: 0.5}}
        style={{color:'#14b8a6', fontSize:'large', fontWeight:'600'}}
        >
            Services
        </motion.Heading>
      <motion.Box 
       initial={{opacity: 0, translateY: 0, y: 200}}
       whileInView = {{opacity: 1, translateY: 1, y: 0}}
       transition = {{duration: 0.9}}
       style={{display:'flex', gap:'20px', padding: '20px', maxWidth: '400px', flexDirection:'column', justify:'center'}}>
        {MyService.map((services, index) => (
            <Box key={index} bg='white' p='25px' borderRadius=' 10px'  boxShadow='sm'  _hover={{bg: '#14b8a6', color: 'white'}}>
                <Icon as={services.icon} width='100%' textAlign='center' mb='10px' fontSize='30px' fontWeight='bold'/>
                <Heading width='100%' textAlign='center' color='#14b8a6' mb='20px' style={{fontFamily: '"Changa" , sans-serif'}} >{services.head}</Heading>
                <Text fontFamily='san-serif' fontSize='sm' style={{fontFamily: '"Varelo" , sans-serif'}} >{services.text}</Text>
            </Box>
        ))}
      </motion.Box>
    </Grid>
  )
}
