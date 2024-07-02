// ReviewPage.js
import React from 'react';
import { Box, Heading, Link, Text, VStack, HStack } from '@chakra-ui/react';

const ReviewPage = () => {
  return (
    <Box p={4}>
      <Box as="header" bg="gray.200" p={4} mb={4}>
        <Heading as="h1">Review</Heading>
      </Box>
      <Box as="nav" bg="gray.100" p={4} mb={4}>
        <HStack spacing={4}>
          <Link href="index.html">Home</Link>
          <Link href="people.html">People</Link>
          <Link href="signup.html">Sign up</Link>
        </HStack>
      </Box>
      <Box as="main" p={4}>
        <VStack spacing={4} align="start">
          <Box as="article">
            <Heading as="h2" size="md">Yorian</Heading>
            <Text>My name is Yorian. I give Humble a 10/10. Oblivion made it happen; I found the love of my life. I recommend this app to everyone. The app has a beautiful design and is easy to use.</Text>
          </Box>
          <Box as="article">
            <Heading as="h2" size="md">Gus</Heading>
            <Text>One of my friends told me about Oblivion. At first, I wasn't interested, but after hearing good stories, I got interested. Now I have found friends for a lifetime.</Text>
          </Box>
          <Box as="article">
            <Heading as="h2" size="md">Amber</Heading>
            <Text>I have been lonely for a while and was looking for the love of my life. I started to use Humble and met some fun people, had great dates, and finally met that special one.</Text>
          </Box>
          <Box as="article">
            <Heading as="h2" size="md">Floor</Heading>
            <Text>I always said to myself I was never going to use a dating app. But because of my job and busy lifestyle, I don't have much time to meet face to face. I gave Oblivion a try and became more social, spicing up my dating life.</Text>
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

export default ReviewPage;
