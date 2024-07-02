// SignUpPage.js
import React from 'react';
import { Box, Heading, Link, VStack, HStack, FormControl, FormLabel, Input, Textarea, Checkbox, Radio, RadioGroup, Button } from '@chakra-ui/react';

const SignUpPage = () => {
  return (
    <Box p={4}>
      <Box as="header" bg="gray.200" p={4} mb={4}>
        <Heading as="h1">Sign Up</Heading>
      </Box>
      <Box as="nav" bg="gray.100" p={4} mb={4}>
        <HStack spacing={4}>
          <Link href="index.html">Home</Link>
          <Link href="people.html">People</Link>
          <Link href="reviews.html">Review</Link>
        </HStack>
      </Box>
      <Box as="main" p={4}>
        <VStack spacing={4} align="start">
          <FormControl isRequired>
            <FormLabel htmlFor="Name">Name:</FormLabel>
            <Input id="Name" name="Name" placeholder="name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="User_name">User Name:</FormLabel>
            <Input id="User_name" name="User_name" placeholder="User_name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input type="password" id="password" name="password" placeholder="password" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input type="email" id="email" name="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="phone">Phone:</FormLabel>
            <Input type="tel" id="phone" name="phone" />
          </FormControl>
          <FormControl>
            <FormLabel>Gender:</FormLabel>
            <Checkbox id="male" name="gender" value="male">Male</Checkbox>
            <Checkbox id="female" name="gender" value="female">Female</Checkbox>
          </FormControl>
          <FormControl>
            <FormLabel>Sexuality:</FormLabel>
            <RadioGroup defaultValue="hetro">
              <Radio id="hetro" name="sexuality" value="hetro">Hetro</Radio>
              <Radio id="Homoseksuel" name="sexuality" value="Homoseksuel">Homoseksuel</Radio>
              <Radio id="bisexual" name="sexuality" value="bisexual">Bisexual</Radio>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="about">Tell Something About Yourself:</FormLabel>
            <Textarea id="about" name="about" placeholder="Are you humble?" rows={4} />
          </FormControl>
          <Button type="submit">Submit</Button>
        </VStack>
      </Box>
      <Box as="article" p={4}>
        <Text>You are Ready To be Humble</Text>
      </Box>
      <Box as="footer" bg="gray.200" p={4} mt={4}>
        <Heading as="h2" size="md">Contact</Heading>
        <Link href="mailto:sydney-cook@outlook.com" target="_blank">sydney-cook@outlook.com</Link>
      </Box>
    </Box>
  );
};

export default SignUpPage;
