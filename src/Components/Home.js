import React, { useEffect, useState ,useCallback} from 'react'
import Image from './Images/ProfilePic.jpg'
import './Style/Home.css'
import { FaGithub, FaLinkedin, FaRegGrinTears, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import { FaLinkedinIn } from 'react-icons/fa';
import { Text } from '@chakra-ui/react';
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
    <div className='home flex justify-end  items-center h-[100vh]' id='home'>
      {/*Introduction*/}
      <div className='flex flex-wrap w-full gap-9 justify-around items-center absolute'>
        <motion.div
        initial={{opacity: 0, scale: 0, x: 500}}
        whileInView = {{opacity: 1, scale: 1, x: 0}}
        transition = {{duration: 0.6}}
        
        className='grid gap-2 max-w-96 ' >
           <h1 className=' text-3xl font-bold '>Hello,I am</h1>
          <h1 className=' text-5xl font-bold text-wrap h-[100px]'>{text}</h1>
          {/*<p className=' text-lg font-sans font-bold border-b-2 border-b-[#64b3d8] text-[#64b3d8]'>Turning ideas into real life products is my calling.</p>*/}
          <Text className=' text-xs font-bold ' id='animate' transition='transform 0.5s, opacity 0.5s'
           transform={isvisible ? 'translateY(0)' : 'translateY(100px)'} opacity={isvisible ? 1 : 0 }
          >I enjoy building everything from small business sites to rich interactive web apps, if you own a business seeking a web developer or an employer looking to hire,you can get in touch with me here.</Text>

          <ul className='inline-flex gap-2'>
            <li className='flex justify-center items-center text-[green] w-[3rem] h-[3rem] text-2xl bg-[transparent] rounded-[50%] shadow-xl hover:bg-[lightgreen] hover:text-[#fdfdfd]  shadow-[#00000060] border-2 border-[#0c0c0c]'>
              <Link>
                <FaWhatsapp/>
              </Link>
            </li>
            <li className='flex justify-center items-center w-[3rem] h-[3rem] bg-[transparent] text-2xl rounded-[50%] shadow-xl hover:bg-[gray] hover:text-[lightgray]  shadow-[#00000060] border-2 border-[#0c0c0c]'>
              <Link>
                <FaGithub/>
              </Link>
            </li>
            <li className='flex justify-center items-center w-[3rem] h-[3rem] bg-[transparent] text-2xl rounded-[50%] shadow-xl hover:bg-[skyblue] hover:text-[#fdfdfd] shadow-[#00000060] border-2 border-[#0c0c0c]'>
              <Link>
                <FaTwitter/>
              </Link>
            </li>
            <li className='flex justify-center items-center w-[3rem] h-[3rem] bg-[transparent] text-2xl rounded-[50%] shadow-xl hover:bg-[#754ef9] hover:text-[#fdfdfd] shadow-[#00000060] border-2 border-[#0c0c0c]'>
              <Link>
                <FaLinkedinIn/>
              </Link>
            </li>
          </ul>
        </motion.div>
         
          <div  className=' rounded-[100%] overflow-hidden hidden xs:block md:block sm:block'>
            <img src={Image} alt='' className='w-[300px] h-[300px] rounded-[50%] ' id='profileImage'></img>
          </div>
      </div>

          {/*My photo*/}
      <div className='image-bg '>
        <div className='overlay'>
                  
        </div>        

       {/* <div className='image-parent flex justify-center items-center w-[20px] h-[20px] absolute'>
          <div className='icon-display' style={{'--i': 4}}>
            <h3 className=''>Web Developer</h3>
          </div>

          <div className='icon-display' style={{'--i': 3}}>
            <h3 className=''>Graphice designer</h3>
          </div>

          <div className='icon-display' style={{'--i': 2}}>
            <h3 className=''>Web designer</h3>
          </div>

          <div className='icon-display' style={{'--i': 1}}>
            <h3 className=''>Programmer</h3>
          </div>

          <div className='circle'></div>
        </div>
          */}
        
      </div>

      
    </div>
  )
}
