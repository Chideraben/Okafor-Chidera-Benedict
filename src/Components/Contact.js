import React ,{ useState }from 'react';
import {motion} from 'framer-motion'
import { Box , Input , Text, Textarea, Flex, Grid, Button} from '@chakra-ui/react'
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");


  return (
    <Box className='flex flex-col justify-center items-center h-[100vh]' id='contact'>
          <Text color='#14b8a6' mb='8px' fontWeight='600'  fontSize='30px' style={{fontFamily: '"Changa" , sans-serif' }} textAlign='center'>
            Contact Me
          </Text>
          
        <motion.Grid 
          initial={{opacity: 0, translateY: 0, y: 200}}
          whileInView = {{opacity: 1, translateY: 1, y: 0}}
          transition = {{duration: 0.9}}
          style={{w: '100%', placeItems:'center', py: '10px'}} >
          <Flex justify='center' align='center' flexDirection='column' gap={3} px={3}>
            <Box className='w-full flex gap-2 flex-wrap sm:flex sm:flex-nowrap md:flex md:flex-nowrap'>
              <Input
                className='w-full outline-none h-[50px] border-2 font-semibold text-[#5f5b5b] text-sm bg-[transparent] border-[#BDBDBD] rounded px-4'
                placeholder='Your Name'
                type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
              />

              <Input
                className='w-full outline-none h-[50px] border-2 font-semibold text-[#5f5b5b] text-sm bg-[transparent] border-[#BDBDBD] rounded px-4'
                placeholder='Your Email'
                value={email}
                type='email'
                onChange={(e)=>setEmail(e.target.value)}
                required
              />

              <Input
                className='w-full outline-none h-[50px] border-2 font-semibold text-[#5f5b5b] text-sm bg-[transparent] border-[#BDBDBD] rounded px-4'               
                placeholder='Your Phone Number'
                type='text'
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
                required
              />
            </Box>

           

            <Box w='100%'>
              <Textarea
                className='w-full outline-none resize-none h-[222px] font-bold text-[#5f5b5b] bg-[transparent] text-base  text-start rounded border-2 border-[#BDBDBD] px-4 pt-3'
                placeholder='Message'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                required
              />
            </Box>

            <Box width='100%'>
              <Button type='sumbit' bg='#14b8a6' p='8px' borderRadius=' 10px' color='white'>
                Send Message
              </Button>
            </Box>
          </Flex>
        </motion.Grid>
    </Box>
  )
}
