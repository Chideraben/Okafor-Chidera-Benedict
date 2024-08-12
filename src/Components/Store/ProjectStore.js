import amazon from '../Images/AmazonProjectImage.jpg'
import snap from '../Images/Snap.jpg'
import calculator from '../Images/Calculator.jpg'
import sneakers from '../Images/Sneakers.jpg'
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp, FaPencilRuler, FaRegListAlt } from 'react-icons/fa'
import { IoHomeOutline } from 'react-icons/io5'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { IoLogoHtml5 } from 'react-icons/io5';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';

export const HomeIconList=[
    
        {icon: FaWhatsapp , style:{color: 'green'}, href: 'https://wa.me/message/7F2SR4SNHDDFG1'}
    ,
    
        {icon: FaGithub, style:{color: 'gray'}, href: 'https://github.com/Chideraben' }
    ,
    
        {icon: FaTwitter ,  style:{color: 'skyblue'}, href: 'https://x.com/benedic51298511?s=21'}
    ,
   
        {icon: FaLinkedinIn, style:{color: '#0284c7'}, href: 'https://www.linkdin.com/in/benedict-okafor-0382522b1'}
    
]

export const ProjectList =[
    {
        head: 'Amazon Clone',
        tools: 'React.js| CSS | Js',
        link: "https://amazon-clone-e-commence.vercel.app",
        image: amazon,
        title: '', 
    },
    {
        image: snap,
        title: '',
        link: 'https://chideraben.github.io/snap-from-FrontEnd-Mentor',
        tools: 'HTML| CSS | JS' ,
        head: "Landing Page",
        
    }
    ,
    {
        head: "Simple Calculator",
        link: 'https://calculator-benedict.vercel.app',
        image: calculator,
        title: '', 
        tools: 'HTML| CSS | JS  '

    },
    {
        head: "Sneaker Website", 
        image: sneakers,
        title: '', 
        tools: 'HTML| CSS | JS  '
    }
]

export const Skills = {
    coding: [
      {name: 'React.js'},
      {name: 'JavaScript'},
      {name: 'CSS'},
      {name: 'HTML'},
  ],
  professional:[
    {name: 'Web Design'},
    {name: 'Web Development'},
    {name: 'Graphic Design'},
    {name: 'Chakra-ui '}

  ]

};


export const SkillIcons = [
  
    {src:IoLogoHtml5, name: 'HTML', style:{color: '#c2410c' }},
    {src:IoLogoCss3, name: 'CSS3', style:{color:'#3b82f6'}},
    {src:SiJavascript, name: 'JavaScript', style:{color:'yellow',background: ' black'}},
    {src:FaReact, name: 'REACT', style:{color:'#38bdf8'}},
    {src:FaGitAlt, name: 'Git', style:{color:' #c2410c'}},
    {src:RiTailwindCssFill, name: 'TailWindCss', style:{color:'#38bdf8'}}
  
]

export const Navlist=[
        {icon: IoHomeOutline, onClick: 'home' },
        {icon: FaRegListAlt, onClick: 'service'},
        {icon: FaPencilRuler, onClick: 'skills'},
        {icon:  AiOutlineFundProjectionScreen, onClick: 'projects' },
    ]

export const HeaderStyle=
    {
        fontFamily: '"Prompt", system-ui',
        fontSize: ' 30px',
        color: ' #14b8ab',
        fontWeight: ' bold',
        
    }
export const MyName={
    fontFamily: '"Prompt", system-ui',
    fontSize: '26px',
    color: '#14b8ab',
    fontWeight: 'bold',
}
