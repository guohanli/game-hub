import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack padding="20px" spacing={5}>
      <Link to="/" style={{ display: 'contents' }}>
        <Image src={logo} height="auto" width={{ base: '50px', sm: '70px', lg: '90px' }} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
