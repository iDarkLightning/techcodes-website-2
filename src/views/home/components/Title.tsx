import { Heading, Center, Stack, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface TitleProps {}

const TitleLine: React.FC = ({ children }) => (
  <Heading fontSize="12vh" fontWeight="500" lineHeight="95%" textAlign="center">
    {children}
  </Heading>
);

const JoinButton: React.FC = () => (
  <Flex
    alignItems="center"
    justifyContent="space-evenly"
    bgGradient="linear-gradient(90deg, #c766ff 0%, #ff8b66 100%)"
    borderRadius="41px"
    w="20vw"
    h="3vw"
    fontWeight="500"
    textTransform="none"
    fontSize="1vw">
    <Text color="background">Join us for another year</Text>
    <Button bgColor="background" borderRadius="41px">
      Sign up now
    </Button>
  </Flex>
);

const Title: React.FC<TitleProps> = ({}) => {
  return (
    <Center textTransform="uppercase" color="text" as={Stack} spacing={0}>
      <TitleLine>
        teaching students <br /> around the world <br /> how to code
      </TitleLine>
      <JoinButton />
    </Center>
  );
};

export default Title;
