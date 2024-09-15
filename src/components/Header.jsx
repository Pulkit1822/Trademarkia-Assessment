import { Box, Flex, Image, Button } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import Logo from '../images/Logo.png'; 

const Header = ({ handleSearch }) => {
  return (
    <Flex
      as="header"
      bg="white"
      p="4"
      justify="space-between"
      align="center"
    >
      <Flex align="center">
        <Image
          src={Logo} 
          alt="Trademarkia Logo"
          boxSize="150px" 
          objectFit="contain"
          mr="4"
        />
        <Box width="1200px">
          <SearchBar handleSearch={handleSearch} />
        </Box>
      </Flex>
      <Button colorScheme="orange" size="lg">Apply for Trademark</Button>
    </Flex>
  );
};

export default Header;