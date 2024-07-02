// PeoplePage.js
import React from 'react';
import { Box, Heading, Image, Link, Text, VStack, HStack } from '@chakra-ui/react';

const PeoplePage = () => {
  return (
    <Box p={4}>
      <Box as="header" bg="gray.200" p={4} mb={4}>
        <Heading as="h1">People Page</Heading>
      </Box>
      <Box as="nav" bg="gray.100" p={4} mb={4}>
        <HStack spacing={4}>
          <Link href="index.html">Home</Link>
          <Link href="signup.html">Signup</Link>
          <Link href="reviews.html">Review</Link>
        </HStack>
      </Box>
      <Box as="main">
        <VStack spacing={4} align="start">
          <Image src="/picture/20230419_154356.jpg" alt="20230419_154356" boxSize="200px" objectFit="cover" />
          <Text>Hello nice to meet you! Here is The Boss himself💪 on this page you can find everything about the people you will meet on Oblivion. Check it out! Have fun dating💯</Text>
          <Image src="/picture/IMG_20231227_163037_771.webp" alt="IMG_20231227_163037_771.webp" boxSize="200px" objectFit="cover" />
          <Box as="article">
            <Text>On Oblivion, you can match with all kinds of people all over the world 🌎. Talk about your hobbies🥇, travelling🏝, food, movies, whatever you want. Share your dating experience🔥, your green and red flags.</Text>
            <Text>You can use Oblivion also to find friendship or for business-related connections.</Text>
            <Image src="/picture/IMG_20231227_174537_743.webp" alt="IMG_20231227_174537_743.webp" boxSize="150px" objectFit="cover" />
          </Box>
        </VStack>
      </Box>
      <Box as="footer" bg="gray.200" p={4} mt={4}>
        <Heading as="h2" size="md">Contact</Heading>
        <Link href="mailto:sydney-cook@outlook.com" target="_blank">sydney-cook@outlook.com</Link>
      </Box>
    </Box>
  );
};

export default PeoplePage;
