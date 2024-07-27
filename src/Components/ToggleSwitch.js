import {useState, useEffect } from 'react';
import {CiLight} from "react-icons/ci"
import {CiDark} from "react-icons/ci"
import {Progress , Flex , Box, Text, Button, UnorderedList, ListItem, Link} from '@chakra-ui/react';
function Navbar({toggleDarkMode, darkMode}){
  const [isOpen, setIsOpen] = useState(false);

  
 
  return (
    <Box as='nav' boxShadow='2xl' width='100%' className='header'>
      <Box className=' max-w-7xl  mx-auto px-4 sm:px-6 '>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <p className='font-bold text-2xl text-[#50319e] cursor-pointer'>
              Benedict
            </p>
          </div>
          {/* Desktop Menu */}
          <Box >
          <Button onClick={(toggleDarkMode)} fontSize='30px'>
                 {!darkMode ? (<CiLight />) : (<CiDark className='text-black '/>)}
              </Button>
            
          </Box>
          
        
        </div>
      </Box>
      
    </Box>
  );
};

export default Navbar;
