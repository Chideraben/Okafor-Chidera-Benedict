import React, { useEffect, useState ,useCallback} from 'react'
import Image from './Images/FaceLeft.jpg' 
import { FaGithub, FaLinkedin, FaRegGrinTears, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { Text, Box, Flex, Stack, Button ,Center, Link} from '@chakra-ui/react';
import {motion} from 'framer-motion';

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
    <Box as='div'  className='home justify-end  items-start h-[100%]' id='home'>
      {/*Introduction*/}
      <Box p='25px' w='100%' className=' gap-9 justify-between  flex items-center h-96 bg-[#cffafe]' >
        <motion.Box
        initial={{opacity: 0, translateY: 0, y: 200}}
        whileInView = {{opacity: 1, translateY: 1, y: 0}}
        transition = {{duration: 0.9}}
        className='grid gap-6 max-w-96' >
           <Text fontSize='xl' fontWeight='bold'  style={{fontFamily: '"Changa" , sans-serif'}}>Hello,I am</Text>
          <Text color='#14b8a6' lineHeight={8} style={{fontFamily: '"Changa" , sans-serif'}} className=' text-4xl font-bold text-wrap'>{text}</Text>
          <Text maxW={80} fontWeight='600' fontSize='12px' style={{fontFamily: 'Signika" , sans-serif'}}>I enjoy building everything from small business sites to rich interactive web apps, if you own a business seeking a web developer or an employer looking to hire,you can get in touch with me here.</Text>

          <Stack direction='row' spacing={4}>
            <Button  bg='#14b8a6' p='2' variant='solid'  fontSize='sm' color='white'  borderRadius={6}>
              <Link href='https://chiderabenedict04@gmail.com' style={{fontFamily: '"Signika" , sans-serif'}}>CONTACT ME</Link>
            </Button> 
            <Button bg='#14b8a6' variant='solid' p='2' fontSize='sm' color='white' style={{fontFamily: '"Changa" , sans-serif'}} borderRadius={3}>MY RESUME</Button>
          </Stack>
          <ul className='inline-flex gap-2'>
            <li className='flex justify-center items-center text-[green] w-[2.5rem] h-[2.5rem] text-2xl bg-[transparent] rounded-[50%] shadow-xl hover:bg-[lightgreen] hover:text-[#fdfdfd]  shadow-[#00000060] border-2 border-[#0c0c0c]'>
              <Link href='https://wa.me/message/7F2SR4SNHDDFG1'>
                <FaWhatsapp/>
              </Link>
            </li>
            <li className='flex justify-center items-center w-[2.5rem] h-[2.5rem] bg-[transparent] text-2xl rounded-[50%] shadow-xl hover:bg-[gray] hover:text-[white]  shadow-[#00000060] border-2 border-[#0c0c0c]'>
              <Link href='https://github.com/Chideraben'>
                <FaGithub/>
              </Link>
            </li>
            <li className='flex justify-center items-center w-[2.5rem] h-[2.5rem] bg-[transparent] text-2xl rounded-[50%] shadow-xl hover:bg-[skyblue] hover:text-[#fdfdfd] shadow-[#00000060] border-2 border-[#0c0c0c]'>
              <Link href='https://x.com/benedic51298511?s=21'>
                <FaTwitter/>
              </Link>
            </li>
            <li className='flex justify-center items-center w-[2.5rem] h-[2.5rem] bg-[transparent] text-2xl rounded-[50%] shadow-xl hover:bg-[#0284c7] hover:text-[#fdfdfd] shadow-[#00000060] border-2 border-[#0c0c0c]'>
              <Link href='https://www.linkdin.com/in/benedict-okafor-0382522b1'>
                <FaLinkedinIn/>
              </Link>
            </li>
          </ul>
        </motion.Box>
         
     
      </Box>
      <Center h='350px'  overflow='hidden'>
        <img src={Image} alt='' borderRadius='100%'  className='w-[300px]   ' id='profileImage' />
      </Center>
    </Box>
  )
}
