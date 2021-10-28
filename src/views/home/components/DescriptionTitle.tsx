import { Center, Stack, Heading } from "@chakra-ui/react";
import React from "react";

interface DescriptionTitleProps {}

const DescriptionTitle: React.FC<DescriptionTitleProps> = ({}) => {
  return (
    <Center color="text" as={Stack} spacing={0} mb="8vh">
      <Heading fontWeight="normal" fontSize="4vh">
        We’re a student-led nonprofit
      </Heading>
      <Heading fontWeight="normal" fontSize="4vh">
        aiming to increase computer
      </Heading>
      <Heading fontWeight="normal" fontSize="4vh">
        science engagement.
      </Heading>
    </Center>
  );
};

export default DescriptionTitle;
