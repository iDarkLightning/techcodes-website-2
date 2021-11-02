import { Center, Stack, Heading } from "@chakra-ui/react";
import React from "react";

interface DescriptionTitleProps {}

const DescriptionTitle: React.FC<DescriptionTitleProps> = ({}) => {
  return (
    <Center color="text" mb="8vh">
      <Heading fontWeight="normal" fontSize="6vh" textAlign="center">
        We’re a student-led nonprofit <br /> aiming to increase computer <br /> science engagement
      </Heading>
    </Center>
  );
};

export default DescriptionTitle;
