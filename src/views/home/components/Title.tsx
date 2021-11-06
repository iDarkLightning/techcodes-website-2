import { Heading, Center, Stack, Button, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";

interface TitleProps {}

const TitleLine: React.FC = ({ children }) => {
  return (
    <Heading
      fontSize={{ xs: "2rem", sm: "4rem", md: "6rem", lg: "8rem" }}
      fontWeight="500"
      lineHeight="95%"
      textAlign="center">
      {children}
    </Heading>
  );
};

const JoinButton: React.FC = () => (
  <Flex
    alignItems="center"
    justifyContent="space-evenly"
    bgGradient="linear-gradient(90deg, #c766ff 0%, #ff8b66 100%)"
    borderRadius="41px"
    w="40vh"
    h="6vh"
    fontWeight="500"
    textTransform="none"
    fontSize="2vh">
    <Text color="background">Join us for another year</Text>
    <Link href="https://bit.ly/techcodes">
      <Button bgColor="background" borderRadius="35px">
        Sign up now
      </Button>
    </Link>
  </Flex>
);

const Title: React.FC<TitleProps> = ({}) => {
  return (
    <Center textTransform="uppercase" color="text" as={Stack} spacing={0}>
      <TitleLine>teaching students</TitleLine>
      <TitleLine>around the world</TitleLine>
      <TitleLine>how to code</TitleLine>
      <JoinButton />
    </Center>
  );
};

export default Title;
