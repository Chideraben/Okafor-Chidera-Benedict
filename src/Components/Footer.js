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
    <Box background='#14b8a6' justifyContent='center' h='120px' w='100%'>
      <Center>
        <Flex align='center' flexDirection='colume'>
          <Button onClick={scrollToTop} boxSize='50px'>
            {<FaArrowUpLong/>}
          </Button>
          <Text>(c) All rights reserved, Benedict Chidera 2024. </Text>
        </Flex>
      </Center>
    </Box>
  )
}
