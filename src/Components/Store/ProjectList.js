import amazon from '../Images/AmazonProjectImage.jpg'
import snap from '../Images/Snap.jpg'
import calculator from '../Images/Calculator.jpg'
import sneakers from '../Images/Sneakers.jpg'
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'

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
        title: 'This is Amazon cloned built with React.js ', 
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
        link: 'https://calculator-chideraben.Vercel.app',
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


export const Headerstyle=[
    {
        
    }
]