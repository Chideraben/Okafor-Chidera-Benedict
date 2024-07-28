import {useState, useEffect } from 'react';
import {CiLight} from "react-icons/ci"
import {CiDark} from "react-icons/ci"
import { Box, Text, Button} from '@chakra-ui/react';
function Navbar({toggleDarkMode, darkMode}){
  const [isOpen, setIsOpen] = useState(false);

  
 
  return (
    <Box as='nav' boxShadow='2xl' width='100%' className='header'>
      <Box className=' max-w-7xl  mx-auto px-4 sm:px-6 '>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Text textShadow='2px 2px #14b8a6' fontWeight='bold' fontSize='2xl' color='#50319e ' cursor='pointer'>
              WEB<Text as='span' color=' #14b8a6' >DEV</Text>
            </Text>
          </div>
          {/* Desktop Menu */}
          <Box >
          <Button onClick={(toggleDarkMode)} fontSize='30px'>
                 {!darkMode ? (<CiLight color='white' />) : (<CiDark className='text-black '/>)}
              </Button>
            
          </Box>
          
        
        </div>
      </Box>
      
    </Box>
  );
};

export default Navbar;
