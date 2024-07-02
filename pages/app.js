// App.js
import React from 'react';
import { Box, Heading, Image, Link, Text, VStack, HStack, Stack } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Box as="header" bg="gray.200" p={4}>
        <Heading as="h1">Welcome to Oblivion</Heading>
        <Image src="/picture/IMG_20231227_175207_161.webp" alt="logo" />
      </Box>
      <Box as="nav" bg="gray.100" p={4}>
        <HStack spacing={4}>
          <Link href="signup.html">Signup</Link>
          <Link href="people.html">People</Link>
          <Link href="reviews.html">Reviews</Link>
        </HStack>
      </Box>
      <Box as="main" p={4}>
        <VStack spacing={4}>
          <Box>
            <Heading as="h2">Ready for the Oblivion</Heading>
          </Box>
          <Stack direction={['column', 'row']} spacing={4}>
            <Box className="block-a" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/picture/20240101_001852.jpg" alt="New comer 2024" />
              <Heading as="h3" size="md" p={4}>New comer 2024</Heading>
            </Box>
            <Box className="block-b" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/picture/20231101_112927.jpg" alt="Chat Match meet" />
              <Heading as="h3" size="md" p={4}>Chat Match meet</Heading>
            </Box>
            <Box className="block-c" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/picture/20230517_105027.jpg" alt="Zoomers" />
              <Heading as="h3" size="md" p={4}>Zoomers</Heading>
            </Box>
          </Stack>
        </VStack>
      </Box>
      <Box as="footer" bg="gray.200" p={4} mt={4}>
        <Heading as="h2" size="md">Contact</Heading>
        <Link href="mailto:sydney-cook@outlook.com" target="_blank">sydney-cook@outlook.com</Link>
      </Box>
    </Box>
  );
}

export default App;
