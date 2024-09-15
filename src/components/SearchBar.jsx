import { Flex, Input, Button, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchBar = ({ handleSearch }) => (
  <Flex as="section" bg="white" p="4" align="center" justify="center" gap="2" width={"50%"}>
    <InputGroup w="80%">
      <InputLeftElement pointerEvents="none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20px"
          height="20px"
          color="gray.300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </InputLeftElement>
      <Input
        placeholder="Search Trademark Here e.g. Mickey Mouse"
        size="lg"
        borderColor="gray.300"
        onChange={handleSearch}
      />
    </InputGroup>
    <Button colorScheme="blue" size="lg">
      Search
    </Button>
  </Flex>
);

export default SearchBar;