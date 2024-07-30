import { Box, Center, Progress,Text,Flex ,Button} from '@chakra-ui/react'
import React from 'react'
import {FaArrowUpLong} from 'react-icons/fa6'
export default function Footer() {

    const scrollToTop =()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
        duration: 0.9,
      });
    };
  return (
    <Box background='#cffafe' align='center' justify='center' h='150px' w='100%'>
      
        <Box flexDirection='colume'>
          <Button leftIcon={<FaArrowUpLong />} color='#148ba9' onClick={scrollToTop} boxSize='50px'>
             Back To Top
          </Button>
          <Text>
            (c) All rights reserved, Benedict Chidera 2024. 
          </Text>
        </Box>
      
    </Box>
  )
}
