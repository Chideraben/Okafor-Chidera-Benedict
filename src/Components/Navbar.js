import React ,{useEffect}from 'react'
import {Box,Center, Flex, Text, VStack, Heading, Avatar, AvatarBadge, ListItem, Link,IconButton , HStack,UnorderedList} from '@chakra-ui/react'
import { IoHomeOutline } from 'react-icons/io5'
import { FaPencilRuler, FaRegListAlt  } from 'react-icons/fa'
import {VscProject} from 'react-icons/vsc'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { MdOutlineContactMail } from 'react-icons/md'
export default function Nav() {
  useEffect(()=>{
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if(header) {
        header.classList.toggle('sticky',window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])

  const scrollToSection = (id) =>{
    
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  }
  return (
    <Box p={2}
      bottom={0}
      width='100%'
      position='fixed'
      bg='transparent'
      zIndex='1000'
    >
      <Center>
        <Flex 
          gap='9'
          bg='#082f49d7'
          p={3}
          borderRadius='30px'     
          backdropFilter="auto"
          backdropConstrast= '60%'
         className=  'text-[#082f49d7]'  
        >
       
            <IconButton 
              icon={ <IoHomeOutline/>}
              aria-label='Home' 
              _active={{color: ' white'}} 
              _hover={{color: 'white'}} 
              style={{fontFamily: ' "Varela Round", sans-serif'}} 
              onClick={()=>{scrollToSection('home')}} 
              fontSize='20px'
              color='#a1a1aa'
              className=' animate-bounce hover:translate-y-1 hover:scale-110 duration-700'
            />

            <IconButton 
              icon={<FaRegListAlt/>}
              style={{fontFamily: ' "Varela Round", sans-serif'}} 
              _hover={{color: 'white'}} 
              onClick={()=>{scrollToSection('service')}} 
              fontSize='20px'
              color='#a1a1aa'
              fontWeight='600'
              className=' hover:scale-110' 
            />
                 
               
            <IconButton 
              icon={<FaPencilRuler/>}
              style={{fontFamily: ' "Varela Round", sans-serif'}} 
              _hover={{color: 'white'}}
              onClick={()=>{scrollToSection('skills')}}
              fontSize='20px'
              color='#a1a1aa'
              fontWeight='600'
              className=' hover:scale-110' 
            />
             
           

            <IconButton 
              icon={<AiOutlineFundProjectionScreen/>}
              style={{fontFamily: ' "Varela Round", sans-serif'}} 
              _hover={{color: 'white'}}
              onClick={()=>{scrollToSection('projects')}} 
              fontSize='20px'
              color='#a1a1aa'
              fontWeight='600'
              className=' hover:scale-110' 
            />
             
           
       
        </Flex>
      </Center>
    </Box>
  )
}
