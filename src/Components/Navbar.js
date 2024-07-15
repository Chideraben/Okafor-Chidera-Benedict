import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {CiLight} from "react-icons/ci"
import {CiDark} from "react-icons/ci"
import './Style/Navbar.css'
function Navbar({toggleDarkMode}){
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  
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
    <nav className=' fixed shadow-2xl w-full  header'>
      <div className=' max-w-7xl  mx-auto px-4 sm:px-6 '>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <p className='font-bold text-2xl text-[#50319e] cursor-pointer'>
              Benedict
            </p>
          </div>
          {/* Desktop Menu */}
          <div >
            <ul className='hidden font-medium items-center md:flex space-x-8  '>
              <li onClick={()=>{scrollToSection('home')}} className='text-[#00b7ff] animate-bounce before:absolute before:w-full before:h-[2px] before:mt-6 relative before:bg-[#10132e] hover:text-[#1C34FF] hover:origin-right  hover:translate-y-1 hover:scale-110 duration-700  hover:border-b-2 '>
                <Link href='/'>
                  Home
                </Link>
              </li>

              <li onClick={()=>{scrollToSection('about')}} className=' text-[#c2c9c5]   hover:translate-y-1 hover:scale-110 duration-700 hover:text-[#1C34FF] hover:border-b-2 hover:border-b-[red]'>
                <Link href='/about' >
                  About
                </Link>
              </li>

              <li onClick={()=>{scrollToSection('skills')}} className=' text-[#c2c9c5]   hover:translate-y-1 hover:scale-110 duration-700 hover:text-[#1C34FF] hover:border-b-2 hover:border-b-[red]'>
                <Link href='/skill' >
                  Skills
                </Link>
              </li>

              <li onClick={()=>{scrollToSection('projects')}} className='text-[#c2c9c5] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 hover:text-[#1C34FF] hover:border-b-2 hover:border-b-[red] '>
                <Link href='/projects' >
                  Projects
                </Link>
              </li>

              <li onClick={()=>{scrollToSection('contact')}} className='text-[#c2c9c5] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 hover:text-[#1C34FF] hover:border-b-2 hover:border-b-[red]'>
                <Link href='/contact' >
                  Contact
                </Link>
              </li>
              <button onClick={(toggleDarkMode)}>
                <p onClick={()=> setDarkMode(!darkMode)}>
                 {!darkMode ? (<CiLight className='w-[30px] h-[30px]'/>) : (<CiDark className='text-black w-[30px] h-[30px]'/>)}
                </p>
             
              </button>
            </ul>
            
          </div>
          
          {/* Mobile Menu Button */}
          <div className='flex md:hidden'>
            <button onClick={(toggleDarkMode)}>
              <p onClick={()=> setDarkMode(!darkMode)}>
                {!darkMode ? (<CiLight className='w-[25px] h-[25px]'/>) : (<CiDark className='text-black w-[25px] h-[25px]'/>)}
              </p>
             
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900'
              aria-controls='mobile-menu'
              aria-expanded={isOpen}
            >
              <span className='sr-only'>Open main menu</span>
              {!isOpen ? (
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-[#fdfdfd]' id='mobile-menu '>
          <div className='px-2 pt-2 pb-5 space-y-1 sm:px-3 font-medium'>
            <ul className=' flex flex-col gap-8' >
              <li onClick={()=>{scrollToSection('home')}} className='block text-[#00b7ff] animate-bounce hover:text-[#1C34FF] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-90 duration-700'>
                <Link href='/'>
                  Home
                </Link>
              </li>

              <li onClick={()=>{scrollToSection('about')}} className='block text-[#c2c9c5] transition ease-in-out delay-150 hover:translate-x-1 hover:scale-45 duration-700 hover:text-[#1C34FF]'>
                <Link href='/about' >
                  About
                </Link>
              </li>

              <li onClick={()=>{scrollToSection('skills')}} className='block text-[#c2c9c5] transition ease-in-out delay-150 hover:translate-x-1 hover:scale-40 duration-700 hover:text-[#1C34FF]'>
                <Link href='/skills' >
                  Skills
                </Link>
              </li>

              <li onClick={()=>{scrollToSection('projects')}} className='block text-[#c2c9c5] transition ease-in-out delay-150 hover:translate-x-1 hover:scale-40 duration-700 hover:text-[#1C34FF]'>
                <Link href='/projects' >
                  Projects
                </Link>
              </li>

              <li onClick={()=>{scrollToSection('contact')}} className='block text-[#c2c9c5] transition ease-in-out delay-150 hover:translate-x-1 hover:scale-40 duration-700 hover:text-[#1C34FF]'>
                <Link href='/contact' >
                  Contact
                </Link>
              </li>
            </ul>
            
            
            <Link
              href='/get-started'
              className='block bg-[#1C34FF] text-white px-3 py-2 rounded-md'
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
