import React ,{useEffect}from 'react'
import {Box,Center, Flex, Text, VStack, Heading, Avatar, AvatarBadge, ListItem, Link,Icon , HStack,UnorderedList} from '@chakra-ui/react'
import { IoHomeOutline } from 'react-icons/io5'
import { FaPencilRuler, FaRegListAlt  } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { MdOutlineContactMail } from 'react-icons/md'
import { Navlist } from './Store/ProjectStore' 
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
          {Navlist.map((nav)=>(

            <Icon 
              as={nav.icon}
              _hover={{color: 'white',scale: '10'}} 
              onClick={()=>{scrollToSection(nav.onClick)}} 
              fontSize='20px'
              color='#a1a1aa'
              
            />
         
          ))}
        </Flex>
      </Center>
    </Box>
  )
}
