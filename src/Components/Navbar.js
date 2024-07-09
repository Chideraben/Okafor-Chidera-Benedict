import { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-[#231c35] shadow-xl shadow-[#be64be1f] '>
      <div className=' max-w-7xl  mx-auto px-4 sm:px-6 '>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <p className='font-bold text-2xl text-[#50319e]'>
              Ben <sub>web</sub>
            </p>
          </div>
          {/* Desktop Menu */}
          <div className='hidden font-medium items-center md:flex space-x-8  '>
            <ul>
              <li>
                <Link href='/' className='text-[#00b7ff] animate-bounce hover:text-[#1C34FF] hover:origin-right transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700  hover:border-b-2 hover:border-b-[red]'>
                  Home
                </Link>
              </li>

              <li>
                <Link href='/about' className='text-[#c2c9c5] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 hover:text-[#1C34FF] hover:border-b-2 hover:border-b-[red]'>
                  About
                </Link>
              </li>

              <li>
                <Link href='/projects' className='text-[#c2c9c5] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 hover:text-[#1C34FF] hover:border-b-2 hover:border-b-[red] '>
                  Projects
                </Link>
              </li>

              <li>
                <Link href='/contact' className='text-[#c2c9c5] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 hover:text-[#1C34FF] hover:border-b-2 hover:border-b-[red]'>
                  Contact
                </Link>
              </li>
            </ul>
           
            {/*<Link
              href='/get-started'
              className='bg-[#1C34FF] text-white px-3 py-2 rounded-md'
            >
              Get Started
            </Link>*/}
          </div>
          {/* Mobile Menu Button */}
          <div className='flex md:hidden'>
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
        <div className='md:hidden' id='mobile-menu'>
          <div className='px-2 pt-2 pb-5 space-y-1 sm:px-3 font-medium'>
            <Link
              href='/'
              className='block py-2 text-gray-700 hover:text-[#1C34FF]'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='block py-2 text-gray-700 hover:text-[#1C34FF]'
            >
              About
            </Link>
            <Link
              href='/services'
              className='block py-2 text-gray-700 hover:text-[#1C34FF]'
            >
              Services
            </Link>
            <Link
              href='/portfolio'
              className='block py-2 text-gray-700 hover:text-[#1C34FF]'
            >
              Portfolio
            </Link>
            <Link
              href='/team'
              className='block py-2 text-gray-700 hover:text-[#1C34FF]'
            >
              Team
            </Link>
            <Link
              href='/contact'
              className='block py-2 text-gray-700 hover:text-[#1C34FF]'
            >
              Contact
            </Link>
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
