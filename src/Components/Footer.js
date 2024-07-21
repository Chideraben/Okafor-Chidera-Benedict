import { Box, Center, Progress } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Box background='gray' justifyContent='center' h='50px' w='100%'>
      <Center>
        (c) All rights reserved, Benedict Chidera 2024. 
        <Progress value=' 90' colorScheme='blue' />
      </Center>
    </Box>
  )
}
