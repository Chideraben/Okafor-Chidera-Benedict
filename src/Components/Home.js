import React, { useEffect, useState ,useCallback} from 'react'
import Image from './Images/FaceLeft.jpg' 
import { FaGithub, FaLinkedin, FaRegGrinTears, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { Text, Box, Flex, Stack, Button ,Center, Link,Icon} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import { HomeIconList } from './Store/ProjectList';
export default function Profile() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDelecting] = useState(false)
  const toRotate = ["Benedict", "Front-End Developer"];
  const [ text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const [isvisible, setIsvisible] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const element = document.getElementById('animate');
    if(element){
      const elementPosition = element.offsetTop;
      if(scrollPosition > elementPosition){
        setIsvisible(true);
      }
      else{
        setIsvisible(false)
      }
    }
  };
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return() =>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  const tick=useCallback(()=>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length + 1);

    setText(updatedText);

    if (isDeleting){
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText){
      setIsDelecting(true);
      setDelta(period)

    } else if(isDeleting && updatedText === ""){
      setIsDelecting(false);
      setLoopNum(loopNum + 1);
      setDelta(500)
    }
  },[isDeleting,loopNum,text.length,toRotate,period]);

  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick();
    },delta)
    return ()=> {clearInterval(ticker)}
  },[delta,tick])
  return (
    <Box as='div' h='100vh' id='home'>
      <Flex bg='#cffafe' justify="space-around">
            <Text textShadow='2px 2px #14b8a6' fontWeight='bold' fontSize='2xl' color='#50319e ' cursor='pointer'>
              WEB<Text as='span' color=' #14b8a6' >DEV</Text>
            </Text>
            <Box></Box>
      </Flex>
      {/*Introduction*/}
      <Flex flexWrap='wrap'  gap={10} w='100%' h='100%'  justify='space-around' align='center' bg='#cffafe' >
        <motion.Box 
        initial={{opacity: 0, translateY: 0, y: 200}}
        whileInView = {{opacity: 1, translateY: 1, y: 0}}
        transition = {{duration: 0.9}}
         >
          
          <Text fontSize='xl' fontWeight='bold'  style={{fontFamily: '"Changa" , sans-serif'}}>Hello,I am</Text>
          <Text color='#14b8a6' style={{fontFamily: '"Changa" , sans-serif'}} fontSize='3xl' h='50px'  fontWeight='600'>{text}</Text>
          <Text maxW={80} fontWeight='600' fontSize='12px' style={{fontFamily: 'Signika" , sans-serif'}}>I enjoy building everything from small business sites to rich interactive web apps, if you own a business seeking a web developer or an employer looking to hire,you can get in touch with me here.</Text>

          <Stack direction='row' spacing={4} mt={8}>
            <Button  bg='#14b8a6' p='2' variant='solid'  fontSize='sm' color='white'  borderRadius={6}>
              <Link href='https://chiderabenedict04@gmail.com' style={{fontFamily: '"Signika" , sans-serif'}}>CONTACT ME</Link>
            </Button> 
            <Button bg='#14b8a6' variant='solid' p='2' fontSize='sm' color='white' style={{fontFamily: '"Changa" , sans-serif'}} borderRadius={3}>MY RESUME</Button>
          </Stack>
          
          <Flex gap={3} mt={3}>
            {HomeIconList.map((icons, index)=>(
              <Center key={index}  color={icons.color}   fontSize='3xl' >
                <Link href={icons.href}>
                  <Icon as={icons.icon} style={icons.style}/>
                </Link>
              </Center>
            ))}
           
          
          </Flex>
        </motion.Box>
         
        <Box h='300px' w='250px' overflow='hidden'>
          <img src={Image} alt='' borderRadius='100%'/>
        </Box>
      </Flex>
     
    </Box>
  )
}
